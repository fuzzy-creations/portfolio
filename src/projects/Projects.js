
const Project = function (name, url, full_project, content, company, software, job, images, testimonial) {
    this.name = name;
    this.url = url;
    this.full_project = full_project;
    this.content = content;
    this.company = company;
    this.software = software;
    this.job = job;
    this.all_images = images;
    this.testimonial = testimonial;
};

////////////////////////// PROJECTS ///////////////////////////////

// MEEKOTEAMS

const MeekoTeams = new Project(
    "Meeko Teams", 
    "meeko-teams",
    "//meekoteams.com",
    `This project involved A-Z creation and implimentation for their new wordpress website. 
    Meeko Teams is an offshore recruitment and office space startup that provides fully 
    managed on-site support for customers teams in Kiev, Ukraine. The job was to 
    create a fresh site with a new design and content operating in WordPress and hosted 
    on Upcloud.`,
    "Meeko Teams", 
    "WordPress", 
    "Website Design, Website Development, Content Creation", 
    {
        featured: "/images/Meeko/Header.png",
        sections: [
            {title: "", images: ["/images/Meeko/Contact.png", "/images/Meeko/Positions.png"]},
            {title: "", images: ["/images/Meeko/Pricing.png"]},
            {title: "", images: ["/images/Meeko/Blogs.png", "/images/Meeko/Process.png"]},
            {title: "", images: ["/images/Meeko/Footer.png"]}
            ],
    },
    {
        person: "Claudia Defabio",
        position: "Business Manager",
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
   
);

// TALKIETOASTER

const TalkieToaster = new Project(
    "Talkie Toaster",
    "talkie-toaster", 
    "//the-talkie-toaster.web.app",
    `Talkie Toaster was an interesting project to say the least. I was tasked with creating a 
    chatbot web app to host on a server inside an actual toaster to loosely emulate the talking toaster
    from Red Dwarf.`, 
    "Lucidica",
    "ReactJS, Google Dialogflow", 
    "Website Design, Website Development, Chatbot", 
    {
        featured: "/images/Toaster/talkie-toaster.png",
        sections: [
            {title: "Chat", images: ["/images/Toaster/toast-chat.png", "/images/Toaster/toast-chat2.png", "/images/Toaster/toast-chat3.png", "/images/Toaster/toast-chat4.png"]},
            {title: "Lights Out", images: ["/images/Toaster/toast-lightsout.png"]},
            {title: "Flappybird", images: ["/images/Toaster/toast-flappybird.png"]}
            ]
    }
)

// Forage

const Forage = new Project(
    "Forage",
    "forage", 
    "//forageapp.co.uk",
    `Forage is an events app and a personal project of mine. It was a massive project which helped me get a greater understanding
    of the interconnectivity of React components, the need for clean reuseable code and working with cloud backends.`, 
    "Forage",
    "ReactJS, Firebase", 
    "Website Design, Website Development", 
    {
        featured: "/images/Forage/OpenEvents.png",
        sections: [
            {title: "", images: ["/images/Forage/Communities.png", "/images/Forage/MyStuff.png"]},
            {title: "", images: ["/images/Forage/OpenEventsMobile.png", "/images/Forage/MyStuffMobile.png"]}
        ]
    }
)



//////////////////////////// END PROJECTS ///////////////////////////////////////

const Projects = [MeekoTeams, TalkieToaster, Forage];

export { Projects };
