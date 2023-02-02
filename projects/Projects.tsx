

interface Project {
    name: string;
    url: string;
    external: string;
    github: string;
    company: string;
    tech: string;
    role: string;
    featured: string;
    gallery: string[];
    login?: [string, string];
    concept?: string;
    technical?: string;
    challenges?: string;
    conclussion?: string;
    testimonial?: any;
}



////////////////////////// PROJECTS ///////////////////////////////

const MeekoCareers: Project = {
    name: "Meeko Careers",
    url: "meekocareers", 
    external: "//fuzzy-careers.firebaseapp.com/",
    github: "//github.com/fuzzy-creations/meeko-careers",
    company: "Meeko Teams",
    tech: "ReactJS, Firebase", 
    role: "Product Design, Architecture, Development", 
    concept: "The Meeko Careers website was intended to be used as a seamless recruitment and management CRM system. Meeko Teams is a company that offers remote Ukrainian recruitment to businesses worldwide and then manages them within their co-working space based in Kyiv, Ukraine. They needed a system that would help showcase the benefits of working within the Meeko Ecosystem and Co-working space to potential Employees, a recruitment system to post job ads and go through the recruitment process, and a management system to: Allow Employees to send invoices, add themselves to the office rota, view their employee information such as probation information, amongst other features. Allow Meeko Teams management to. Allow Meekos clients to view and track the recruitment process and analytics, see the relevant data and analytics on their employees and approve annual leave. In addition to viewing their own contract with Meeko and track their finances.",
    technical: "The project is built in ReactJS with Firebase as the backend. The application is extremely minimual, it uses custom styles and very few libraries. Despite the considerable views in the Recruitment and Management process, they all go through a single component. For applicants, it's the Application. For managers, the Position (aka Job). Whether you're viewing the Application, an upcoming Interview, or an Offer, they all bring you to the appropriate state of the Application. Similarly for managers with the Position, you are able to create the job listing, track its progress, interact with each applicant, create and view interviews and create and view offers. As a result of this, you have access to all relevent data regardless of where you are.",
    challenges: "While typically I prefer to fetch batch data as it's needed, as each view is simplified into one component and required multiple collections, I decided to seperate each data type into seperate collections within the schema and fetch them individually in real time and then connect them from the client as each data type was needed. The advantage of this was to allow for seamless transitions between data along with each individual piece having real-time updates regardless of location. Navigating data with multiple layers that got deeper and deeper while being able to quick and easily close and open another object, while there was a strong argument for pages that had a close button to allow an easy return, that argument mainly being design, it isn't an initiative and familiar way for users to navigate so instead I chose modals this also allowed for faster designs that helped keep the project within the scope of the original budget.",
    conclussion: "While unfortunately due to new tax laws implemented in 2022 which no longer allowed a recruitment business to handle any aspect of management without incurring a higher VAT charge, the project has been stalled awaiting legal advice. I still wanted to showcase the work that was done so far.",
    featured: "/images/MeekoCareers/Landing-Header.png",
    login: ["suzychey@advently.co.uk", "123456"],
    gallery: [
        "/images/MeekoCareers/Dashboard.png", 
        "/images/MeekoCareers/Portfolio.png", 
        "/images/MeekoCareers/Jobs.png", 
        "/images/MeekoCareers/Apply.png", 
        "/images/MeekoCareers/Application.png", 
        "/images/MeekoCareers/Positions.png", 
        "/images/MeekoCareers/Create_Interview.png", 
        "/images/MeekoCareers/Invoice.png", 
        "/images/MeekoCareers/Rota.png",  
    ]
};

const Advently: Project = {
    name: "Advently (Mobile)",
    url: "advently",  
    external: "//advently.co.uk",
    github: "//github.com/fuzzy-creations/advently",
    company: "Advently",
    tech: "React Native, Firebase, Figma", 
    role: "Mobile Design, Mobile Development", 
    concept: "Advently is an user driven events organisation platform to find local events and volunteering opportunities. It strives to connect and build communities as well as offers an easy way to organise groups of people to attend activities together.",
    technical: "It provides users with the ability to search their local areas for upcoming open Events and browse through public Communities of people who attend regular Events together. It also allows a User to create their own Community's or Events which are filled with all the relevant details from Images to Location and Geolocation data for a User to find, learn about and attend. Each Community and Event has variant privacy settings so you're able to control who can see what of what you've created. In addition, you can edit any details you want after creation including who's attending, recreate old Events and send out invites to friends and connections which will send Email and Push notifications to those who've been invited provided they haven't turned on the DND setting. As well as present them with the Invitation when they open the application and allow them to either join or decline. The app also features Friends, allowing you to connect with other users and provides a quick way to invite them to Community's and Events, Requests, Profile information and privacy settings, a messaging feature both in group chats and direct messaging and a notification system to alert uses of all the activity relevant to them. It's also fully responsive and works cross platform. The system design, project architecture, UI/UX designs, branding and text content and development were all done by myself.",
    featured: "/images/Advently/MyProfile.png",
    gallery: [
        "/images/Advently/MyProfile.png",
        "/images/Advently/MyEvents.png", 
        "/images/Advently/ExploreCommunities.png", 
        "/images/Advently/Group.png", 
        "/images/Advently/Group-Inside.png", 
        "/images/Advently/Activity.png"
    ]
};


const MeekoTeams: Project = {
    name: "Meeko Teams",
    url: "meeko-teams",
    external: "//meekoteams.com",
    github: "//github.com/fuzzy-creations/meeko",
    company: "Meeko Teams",
    tech: "WordPress",
    role: "Website Design, Website Development, Content Creation", 
    concept: "Meeko Teams is a company that offers remote Ukrainian recruitment to businesses worldwide and then manages them within their co-working space based in Kyiv, Ukraine. They needed a website that would better showcase their product as they were disappointed with almost every area of their existing WordPress site and struggling to attract new clients via the web.",
    technical: "I designed and built a custom WordPress theme along with safe and simply deploy solutions using Git, Github and DeployHQ so that I could quickly deploy future changes and allow them to do the same. I also setup dedicated server hosting at Upcloud, including security and mailing tools. Finally, I implemented and reported on best SEO practices and ran optimisiation and speed tests.",
    // challenges: "I worked alongside the business manager to understand the business so that I could get a good understanding aout their business, the way it operates and what their product was so that I could present them in an apprioriate way visually, provide accurate text content and navigate that flow of content in the best way.",
    // conclussion: "While the feedback has been positive, I'm not proud of the inconsistencies in the design and I would have liked to have made the code more reusable.",
    featured: "/images/Meeko/Header.png",
    gallery: [
        "/images/Meeko/Positions.png", 
        "/images/Meeko/Pricing.png", 
        "/images/Meeko/Process.png", 
        "/images/Meeko/Blogs.png", 
        "/images/Meeko/Footer.png",
        "/images/Meeko/Contact.png",
    ],
    testimonial: {
        person: "Claudia Defabio",
        position: "Business Manager, Meeko Teams",
        content: 
        `As an international and remote management company, having a solid online 
        presence is vital. Before working with Ed, our website was cluttered with text, stock images 
        and did not convey our purpose as a company. From content to UI/UX and functionality, Ed 
        has completley transformed the Meeko website that now showcases the business in a clear 
        and modern way. It used to take over 3 seconds for pages to load, whereas currently, 
        the website loads in under a second.
        Once the website infrastructure and design were complete, he oversaw data migration and plugins 
        for SEO optimisation. We are now receiving relevant leads organically and have refined our keywords 
        to attract desirable traffic to the website. Not only was Ed's expertise and knowledge essential during the process, but his attitude and 
        flexibility also made working together a pleasure. He responded to our requests near-immediately, 
        asked and accepted our feedback, and troubleshoot problems before we even realised there were 
        bugs to be fixed. We are very grateful for Ed's hard work on our website and look forward to using
            him again for any other web development projects.`
    }
};


const TalkieToaster: Project = {
    name: "Talkie Toaster",
    url: "talkie-toaster", 
    external: "//the-talkie-toaster.web.app",
    github: "//github.com/fuzzy-creations/talkie-toaster",
    company: "Lucidica",
    tech: "ReactJS, Google Dialogflow", 
    role: "Website Design, Website Development, Chatbot", 
    concept: "TalkieToaster was intended to be used as a marketing gimmick to celebrate the anniversary of Red Dwarf, a show which features its own talking toaster. The idea was that we would build a chatbot and then host the application on a server that runs inside an actual toaster from Lucidica's office.",
    challenges: "In the show, the toaster is insistent on offering toast even to people who don't want it, I wanted to capture the same spirit but turn it into a game and have the dialogue of the toaster always return to offering toast. And if the toaster can convince you to accept, it scores a point. Following that, to further increase engagement I created additional mini games that centre around toast. Lights out, Flappy Bird and a Quiz that is all about the history of toast. While the chatbot itself once coupled with Google Dialogue was simple enough, it was important to create a Toaster that was visually appealing with enough animation to give it life. The mini games themselves, while running only on ReactJS were a significant technical challenge. ",
    conclussion: "While there's several things I would change now if given the time, the project was popular around the office and the building and allowed me to delve deeply into the more niche effects of React that you wouldn't ordinarily touch on in most commercial projects.",
    featured: "/images/Toaster/talkie-toaster.png",
    gallery: [
        "/images/Toaster/toast-chat.png",
        "/images/Toaster/toast-chat2.png", 
        "/images/Toaster/toast-lightsout.png", 
        "/images/Toaster/toast-chat3.png",
        "/images/Toaster/toast-chat4.png", 
        "/images/Toaster/toast-flappybird.png"
    ],
    testimonial: {
        person: "Thomas Jeffs",
        position: "Founder, Lucidica",
        content: 
        "We have used Ed for many years, he has delivered outstanding results in all areas of development, design and marketing. In our first time working with him he had the foresight to see the value in an abandoned project which would go on to generate millions of views. His recent work breathed life into an old tech project delivering a quirky and functional take, incorporating new ideas and advanced code that borders on the fringes of what was possible in a basic React application."
    }
};


const AdventlyWeb: Project = {
    name: "Advently (Web)",
    url: "adventlyweb", 
    external: "//advently.co.uk",
    github: "//github.com/fuzzy-creations/advently-web",
    company: "Advently",
    tech: "ReactJS, Firebase", 
    role: "Website Design, Website Development", 
    concept: "Advently is an user driven events organisation platform to find local events and volunteering opportunities. It strives to connect and build communities as well as offers an easy way to organise groups of people to attend activities together.",
    technical: "It provides users with the ability to search their local areas for upcoming open Events and browse through public Communities of people who attend regular Events together. It also allows a User to create their own Community's or Events which are filled with all the relevant details from Images to Location and Geolocation data for a User to find, learn about and attend. Each Community and Event has variant privacy settings so you're able to control who can see what of what you've created. In addition, you can edit any details you want after creation including who's attending, recreate old Events and send out invites to friends and connections which will send Email and Push notifications to those who've been invited provided they haven't turned on the DND setting. As well as present them with the Invitation when they open the application and allow them to either join or decline. The app also features Friends, allowing you to connect with other users and provides a quick way to invite them to Community's and Events, Requests, Profile information and privacy settings, a messaging feature both in group chats and direct messaging and a notification system to alert uses of all the activity relevant to them. It's also fully responsive and works cross platform. The system design, project architecture, UI/UX designs, branding and text content and development were all done by myself.", 
    challenges: "",
    conclussion: "",
    featured:  "/images/Forage/Landing.png",
    login: ["test@advently.co.uk", "testaccount"],
    gallery: [
        "/images/Forage/Landing.png",
        "/images/Forage/Events.png", 
        "/images/Forage/Search.png", 
        "/images/Forage/Group.png", 
        "/images/Forage/Notifications.png", 
        "/images/Forage/Chat.png", 
    ],
};


//////////////////////////// END PROJECTS ///////////////////////////////////////

const Projects = [AdventlyWeb, MeekoCareers, Advently, MeekoTeams, TalkieToaster];

export { Projects };    
export type { Project };

