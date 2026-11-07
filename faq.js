/* ============================================================
   faq.js  -  EDIT THIS FILE to change what the chatbot says.
   You do not need to touch chatbot.js or chatbot.css.
   ============================================================ */
window.CHATBOT_CONFIG = {

    // Header of the chat window
    title: 'JCI Imus Assistant',
    subtitle: 'Ask me about joining, events and more',

    // First message shown when the chat opens
    greeting: 'Hi! 👋 I\'m the JCI Imus assistant. How can I help you today?',

    // Reply when no keyword matches
    fallback: 'Sorry, I\'m not sure about that yet. Please ask us directly through the <a href="#contact">Contact</a> section and an officer will reply.',

    // Quick buttons under the messages (they are sent as if the visitor typed them)
    quick: ['How do I join?', 'Upcoming events', 'Where are you located?', 'Contact us'],

    // Questions and answers.
    //   keys   = words a visitor might type (English or Filipino, lowercase)
    //   answer = the reply. HTML links are allowed, e.g. <a href="#contact">Contact</a>
    // To add a topic, copy one block, paste it below, and change the words.
    // Replace the sample facts below with your real information.
    faq: [
        {
            keys: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'kumusta'],
            answer: 'Hello! 👋 I\'m the JCI Imus assistant. Ask me how to join, about events, projects or how to contact us.'
        },
        {
            keys: ['join', 'member', 'membership', 'apply', 'sign up', 'register', 'requirement', 'qualif'],
            answer: 'We welcome young people who want to lead and serve! JCI membership is open to ages 18–40. To apply, send us a message through our <a href="#contact">contact form</a> or our Facebook page and an officer will guide you.'
        },
        {
            keys: ['meeting', 'schedule', 'when', 'time', 'general assembly', 'gm'],
            answer: 'Our general membership meetings are held monthly. Please check the <a href="#events">Upcoming Events</a> section for the next date and time.'
        },
        {
            keys: ['event', 'activity', 'upcoming', 'happening', 'training', 'outreach'],
            answer: 'See our <a href="#events">Upcoming Events</a> for the latest meetings, trainings and community activities.'
        },
        {
            keys: ['project', 'program', 'what do you do', 'community', 'service', 'portfolio'],
            answer: 'We run community projects, leadership trainings and outreach activities. Browse them in <a href="#projects">Our Projects</a> and the <a href="#gallery">Photo Gallery</a>.'
        },
        {
            keys: ['officer', 'president', 'leader', 'board', 'team'],
            answer: 'Meet this year\'s leaders in the <a href="#officers">Officers</a> section.'
        },
        {
            keys: ['where', 'location', 'address', 'office', 'saan', 'imus', 'cavite'],
            answer: 'We are based in Imus, Cavite, Philippines. Full details are in the <a href="#contact">Contact</a> section.'
        },
        {
            keys: ['contact', 'phone', 'call', 'email', 'facebook', 'message', 'reach', 'number'],
            answer: 'You can reach us through the <a href="#contact">Contact</a> section: phone, email, Facebook or the message form.'
        },
        {
            keys: ['fee', 'cost', 'price', 'dues', 'how much', 'free', 'bayad'],
            answer: 'Membership may have yearly dues. Please message us through the <a href="#contact">contact form</a> and an officer will give you the current details.'
        },
        {
            keys: ['jci', 'what is', 'about', 'junior chamber', 'mission', 'vision'],
            answer: 'JCI (Junior Chamber International) is a worldwide organization of young leaders creating positive change. Read our <a href="#mission">Mission &amp; Vision</a>.'
        },
        {
            keys: ['chapter', 'other chapter', 'tanza', 'kawit', 'bacoor', 'noveleta'],
            answer: 'We work together with fellow chapters such as JCI Tanza, Noveleta, Bacoor, Kawit, Dasmariñas, Rosario and Cavite City. See <a href="#chapters">Our Fellow Chapters</a>.'
        },
        {
            keys: ['thank', 'thanks', 'salamat'],
            answer: 'You\'re welcome! 😊 Let us know if you have more questions.'
        }
    ]
};