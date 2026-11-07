/* ============================================================
   chatbot.js  -  the chatbot engine. Normally you do not edit this.
   It builds the chat button and window itself, and reads its
   text and answers from faq.js (load faq.js BEFORE this file).
   ============================================================ */
(function () {
    const cfg = window.CHATBOT_CONFIG;
    if (!cfg) { console.warn('chatbot.js: faq.js is missing or loaded after chatbot.js'); return; }

    function init() {
        // ----- build the widget -----
        const wrap = document.createElement('div');
        wrap.innerHTML =
            '<button id="chatToggle" class="btn btn-primary" type="button" aria-label="Open chat" aria-expanded="false" aria-controls="chatBox">' +
                '<i class="bi bi-chat-dots-fill chat-open-ico"></i><i class="bi bi-x-lg chat-close-ico"></i>' +
            '</button>' +
            '<div id="chatBox" class="chat-box" role="dialog" aria-label="' + cfg.title + '" hidden>' +
                '<div class="chat-head">' +
                    '<span class="chat-avatar"><i class="bi bi-robot"></i></span>' +
                    '<div><strong>' + cfg.title + '</strong><small>' + cfg.subtitle + '</small></div>' +
                '</div>' +
                '<div class="chat-body" id="chatBody" aria-live="polite"></div>' +
                '<div class="chat-quick" id="chatQuick"></div>' +
                '<form class="chat-form" id="chatForm" autocomplete="off">' +
                    '<input type="text" id="chatInput" class="form-control" placeholder="Type your question..." aria-label="Type your question" maxlength="200">' +
                    '<button class="btn btn-primary" type="submit" aria-label="Send"><i class="bi bi-send-fill"></i></button>' +
                '</form>' +
            '</div>';
        while (wrap.firstChild) document.body.appendChild(wrap.firstChild);

        const toggle = document.getElementById('chatToggle');
        const box = document.getElementById('chatBox');
        const body = document.getElementById('chatBody');
        const quick = document.getElementById('chatQuick');
        const form = document.getElementById('chatForm');
        const input = document.getElementById('chatInput');
        let greeted = false;

        // ----- helpers -----
        function add(text, who, html) {
            const d = document.createElement('div');
            d.className = 'msg ' + who;
            if (html) d.innerHTML = text; else d.textContent = text;   // visitor text is never inserted as HTML
            body.appendChild(d);
            body.scrollTop = body.scrollHeight;
            return d;
        }
        function clean(s) {
            return ' ' + s.toLowerCase().replace(/[^a-z0-9ñ\s]/g, ' ').replace(/\s+/g, ' ').trim() + ' ';
        }
        // short keys (under 4 letters) must match a whole word; longer keys can match part of a word
        function hasKey(text, key) {
            const k = clean(key).trim();
            return k.length < 4 ? text.includes(' ' + k + ' ') : text.includes(k);
        }
        function findAnswer(question) {
            const text = clean(question);
            let best = null, bestScore = 0;
            cfg.faq.forEach(item => {
                let score = 0;
                item.keys.forEach(k => { if (hasKey(text, k)) score += k.length; });
                if (score > bestScore) { bestScore = score; best = item; }
            });
            return best ? best.answer : cfg.fallback;
        }
        function ask(q) {
            q = q.trim();
            if (!q) return;
            add(q, 'user');
            const typing = add('…', 'bot typing');
            setTimeout(() => { typing.remove(); add(findAnswer(q), 'bot', true); }, 450);
        }
        function setOpen(state) {
            box.hidden = !state;
            toggle.classList.toggle('open', state);
            toggle.setAttribute('aria-expanded', state);
            if (state) {
                if (!greeted) { greeted = true; add(cfg.greeting, 'bot', true); }
                input.focus();
            }
        }

        // ----- wire up -----
        cfg.quick.forEach(q => {
            const b = document.createElement('button');
            b.type = 'button';
            b.textContent = q;
            b.addEventListener('click', () => ask(q));
            quick.appendChild(b);
        });
        toggle.addEventListener('click', () => setOpen(box.hidden));
        form.addEventListener('submit', e => { e.preventDefault(); ask(input.value); input.value = ''; });
        document.addEventListener('keydown', e => { if (e.key === 'Escape' && !box.hidden) setOpen(false); });
        // on phones, close the chat after tapping a link so the section is visible
        body.addEventListener('click', e => {
            if (e.target.closest('a[href^="#"]') && window.innerWidth < 576) setOpen(false);
        });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();