import { PersonalInfo, ServiceItem, TimelineItem, Project, SkillCategory, Testimonial, FAQItem } from '../types';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Sakib Patwary',
  title: 'Software Developer',
  avatar: 'https://sakibpatwary.github.io/assets/images/avatar.png',
  email: 'shakibpatwary001@gmail.com',
  phone: '+880 1628-279057',
  birthday: 'May 22, 1999',
  location: 'Dhaka, Bangladesh',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187898617!2d90.33728815897476!3d23.780975728147688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1693331855827!5m2!1sen!2sbd',
  aboutParagraphs: [
    'I continue to develop my skills and grow professionally. I am confident in my ability to come up with interesting ideas in the field of development and creative world.',
    'My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many people and companies.'
  ],
  socials: {
    github: 'https://github.com/SakibPatwary',
    linkedin: 'https://www.linkedin.com/in/sakib-patwary/',
    facebook: 'https://www.facebook.com/sakkurian/',
    instagram: 'https://www.instagram.com/_sakiib_/'
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Web development',
    description: "I'm a web developer, specializing in creating responsive and dynamic websites.",
    iconName: 'Code'
  },
  {
    id: 'banner-design',
    title: 'Banner Design',
    description: 'I excel in graphic design, crafting visuals for branding and digital media.',
    iconName: 'Palette'
  },
  {
    id: 'app-dev',
    title: 'App Development',
    description: 'With expertise in mobile app development, I build user-friendly applications for various platforms.',
    iconName: 'Smartphone'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'I focus on user-centered design, crafting visually appealing and intuitive digital experiences.',
    iconName: 'Layers'
  }
];

export const EDUCATION: TimelineItem[] = [
  {
    id: 'edu-aiub',
    institution: 'American International University Bangladesh',
    title: 'BSc. in Software Engineering',
    period: '2018 — 2022'
  },
  {
    id: 'edu-trust',
    institution: 'Trust College, Uttara',
    title: 'Higher Secondary Certificate',
    period: '2015 — 2017'
  }
];

export const EXPERIENCE: TimelineItem[] = [
  {
    id: 'exp-tgit-dev',
    institution: 'TGIT Bangladesh',
    title: 'Software Developer',
    period: 'May 2022 — Present'
  },
  {
    id: 'exp-tgit-intern',
    institution: 'TGIT Bangladesh',
    title: 'Frontend Developer (Intern)',
    period: 'January 2022 — April 2022'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'smart-think',
    title: 'Smart Think',
    category: 'web development',
    url: 'https://smartthinksbd.com/',
    image: 'https://sakibpatwary.github.io/assets/images/smartthink.jpg'
  },
  {
    id: 'tgit-bangladesh',
    title: 'TGIT Bangladesh',
    category: 'web development',
    url: 'https://tgitbangladesh.com/',
    image: 'https://sakibpatwary.github.io/assets/images/tgit.jpg'
  },
  {
    id: 'youwin-education',
    title: 'Youwin Education',
    category: 'web development',
    url: 'https://www.youwineducation.org/',
    image: 'https://sakibpatwary.github.io/assets/images/youwin.jpg'
  },
  {
    id: 'asaduzzaman-portfolio',
    title: 'Asaduzzaman Portfolio',
    category: 'web development',
    url: 'https://asaduzzamanriyad.netlify.app/',
    image: 'https://sakibpatwary.github.io/assets/images/asaduzzaman.jpg'
  },
  {
    id: 'kamali-taxi',
    title: 'Kamali Taxi',
    category: 'web development',
    url: 'https://kamalitaxi.co.uk/',
    image: 'https://sakibpatwary.github.io/assets/images/kamali.png'
  },
  {
    id: 'consortium-bd',
    title: 'Consortium BD',
    category: 'web development',
    url: 'https://consortiumbd.com/',
    image: 'https://sakibpatwary.github.io/assets/images/consortium.jpg'
  },
  {
    id: 'unifly-travels',
    title: 'Unifly Travels',
    category: 'web development',
    url: 'https://unifly-travels.com/',
    image: 'https://sakibpatwary.github.io/assets/images/unifly.jpg'
  },
  {
    id: 'organic-spa-bd',
    title: 'Organic Spa BD',
    category: 'web development',
    url: 'https://organicspabd.com/',
    image: 'https://sakibpatwary.github.io/assets/images/organicspa.jpg'
  },
  {
    id: 'portfolio-template',
    title: 'Portfolio Template',
    category: 'web development',
    url: 'https://sakibpatwary.netlify.app/',
    image: 'https://sakibpatwary.github.io/assets/images/patwary.jpg'
  },
  {
    id: 'gaps-consultancy',
    title: 'GAPS Consultancy',
    category: 'web development',
    url: 'https://gapsinternational.co.uk/',
    image: 'https://sakibpatwary.github.io/assets/images/gaps.png'
  },
  {
    id: 'northeast-erp',
    title: 'Northeast ERP',
    category: 'web development',
    url: 'http://15.206.66.98/login',
    image: 'https://sakibpatwary.github.io/assets/images/northeast.png'
  },
  {
    id: 'nanango-star-motel',
    title: 'Nanango Star Motel',
    category: 'web development',
    url: 'https://nanangostarmotel.com.au/',
    image: 'https://sakibpatwary.github.io/assets/images/nanango.png'
  },
  {
    id: 'skytouch-education',
    title: 'Skytouch Education',
    category: 'web development',
    url: 'https://skytoucheducation.co.uk/',
    image: 'https://sakibpatwary.github.io/assets/images/skytouch.png'
  },
  {
    id: 'rang-mein-bhang',
    title: 'Rang Mein Bhang',
    category: 'web development',
    url: 'https://rangmeinbhang.com/',
    image: 'https://sakibpatwary.github.io/assets/images/rangmeinbhang.png'
  },
  {
    id: 'country-roads-motor-inn',
    title: 'Country Roads Motor Inn',
    category: 'web development',
    url: 'https://countryroadsnarrandera.com.au/',
    image: 'https://sakibpatwary.github.io/assets/images/countryroad.png'
  },
  {
    id: 'vape-4u-bd',
    title: 'Vape 4U BD',
    category: 'web development',
    url: 'https://vape4ubd.com/',
    image: 'https://sakibpatwary.github.io/assets/images/v4u.png'
  },
  {
    id: 'rinaldi-candle-co',
    title: 'Rinaldi Candle Co',
    category: 'web development',
    url: 'https://rinaldicandleco.uk/',
    image: 'https://sakibpatwary.github.io/assets/images/rinaldi.png'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Frontend & UI Engineering',
    skills: [
      { name: 'React.js & Next.js', level: 92, description: 'Component architecture, Hooks, State management' },
      { name: 'TypeScript & JavaScript (ES6+)', level: 90, description: 'Type safety, Async patterns, DOM APIs' },
      { name: 'Tailwind CSS & Modern CSS', level: 95, description: 'Responsive layouts, Grid/Flexbox, Animations' },
      { name: 'HTML5 & Semantic Web', level: 95, description: 'Accessibility (a11y), SEO optimization' },
    ]
  },
  {
    category: 'Backend, APIs & Architecture',
    skills: [
      { name: 'Node.js & Express', level: 85, description: 'RESTful API design, Middleware, Routing' },
      { name: 'Database & ORM (SQL/NoSQL)', level: 80, description: 'PostgreSQL, MongoDB, Schema design' },
      { name: 'Authentication & Security', level: 82, description: 'JWT, OAuth, CORS, Session handling' },
      { name: 'REST APIs & Integrations', level: 90, description: 'Payment gateways, 3rd-party services' },
    ]
  },
  {
    category: 'Design, Tools & Workflow',
    skills: [
      { name: 'Figma & UI/UX Prototyping', level: 88, description: 'Wireframing, Design systems, Mockups' },
      { name: 'Git, GitHub & Version Control', level: 92, description: 'Branching, PRs, Code review workflows' },
      { name: 'Vite, Webpack & Tooling', level: 86, description: 'Bundling, Optimization, Dev server setup' },
      { name: 'Graphic & Banner Design', level: 85, description: 'Brand assets, Marketing visual design' },
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Ahmed Rafiq',
    role: 'Managing Director',
    company: 'TGIT Bangladesh',
    feedback: 'Sakib is an exceptional developer who consistently delivers high-standard code and thoughtful user interfaces. His ability to translate complex business requirements into fast, intuitive web applications has been invaluable.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Sarah Jenkins',
    role: 'Operations Director',
    company: 'Kamali Taxi UK',
    feedback: 'Working with Sakib was a breeze. He delivered our fleet booking web portal ahead of schedule, with seamless responsiveness across mobile and desktop. Highly recommended for any custom web application project!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Tanvir Hasan',
    role: 'Founder & CEO',
    company: 'Smart Think BD',
    feedback: 'Sakib brought both technical precision and creative design taste to our platform. His attention to detail in UI aesthetics, page performance, and typography makes him a standout software engineer.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What types of projects do you typically take on?',
    answer: 'I specialize in full-stack web applications, business websites, eCommerce platforms, custom booking portals, and interactive dashboards. Whether you need a brand-new website built from scratch or an existing platform redesigned with modern tech, I handle end-to-end execution.'
  },
  {
    id: 'faq-2',
    question: 'What is your typical development process?',
    answer: 'My workflow begins with understanding your core requirements and target audience. Next, I draft wireframes and interactive UI prototypes in Figma. Once approved, I build the frontend and backend using modern technologies (React, TypeScript, Tailwind, Node.js), followed by thorough testing, optimization, and deployment.'
  },
  {
    id: 'faq-3',
    question: 'How do you handle project communication and timelines?',
    answer: 'Clear and frequent communication is my priority. I provide regular progress demos, milestone updates, and prompt replies via email, WhatsApp, or scheduled video calls. Deadlines are mutually agreed upon and rigorously respected.'
  },
  {
    id: 'faq-4',
    question: 'Are you available for full-time roles or freelance contracts?',
    answer: 'Yes! I am currently available for select freelance contracts, client consultations, and full-time software engineering opportunities. Feel free to send me a message through the contact form or directly via email.'
  }
];
