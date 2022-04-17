import { UserBackground } from "../model/UserBackground";
import { UserCareerEvent } from "../model/UserCareerEvent";
import { UserProfile } from "../model/UserProfile";
import { UserSkillset } from "../model/UserSkillset";

interface ChingChenProfile {
  Info: UserProfile;
  Background: UserBackground[];
  Career: UserCareerEvent[];
  Skillsets: UserSkillset[];
}

export const ChingChenProfileData: ChingChenProfile = {
  Info: {
    Name: "Liew Ching Chen",    
    Subtitle: "A Passionate Techie 🧑🏻‍💻",
    Description: "Hi, I am ChingChen, a Software Developer (primarily a backend guy) who based at Malaysia. I love software development, process improvement & reduce toil with automation!",
    LinkedInURL: "https://www.linkedin.com/in/liewchingchen/",
    GitHubURL: "https://github.com/chingchen-liew",
    EmailAddress: "liewchingchen@gmail.com",
    AvatarPath: "/images/chingchen-bitmoji.jpeg"
  },
  Background: [
    {
      SectionTitle: "Manufacturing Technician Intern (Diploma)",
      Content: `In 2013, I had my internship as a manufacturing technician intern in a manufacturing company.
                  At the end of my internship, I realised that manufacturing industry may not be something I'd like to pursue after graduation.
                  Little did I know, my next internship is gonna be a life changer, for real.`
    },
    {
      SectionTitle: "Application Developer Intern (Bachelor Degree)",
      Content: `In 2015, moving forward to my 2nd internship, 
                  I was given an opportunity to have my internship in an IT Services company, as an application developer intern.
                  During my internship, I discovered my passion in software development, 
                  had adrenaline rush from the first day till the last day of my internship! Just please don't remind me how terrible my spaghetti code was.`
    },
    {
      SectionTitle: "A Young & Innocent Engineering Graduate",
      Content:
        `In Nov 2016, I graduated from an Engineering degree, major in Mechatronics Engineering (also known as Robotic to many others) 
          from Tunku Abdul Rahman University College at Kuala Lumpur, Malaysia. 
          During my Bachelor Degree studies, I was awarded to the merit scholarship. 
          Yes, I still feel sorry that I took a scholarship that it could be given to someone else who actually wanted to be a Mechatronics/Robotic Engineer, unlike me. :)`
    },
    {
      SectionTitle: "Dive Into the Software Development Industry as a Non-IT Graduate",
      Content:
        `Being a non-IT engineering graduate, 
          it may be or may be not difficult for us to secure a job in software development field depending on the university programme structure 
          (and/or self-studies during leisure time). Most of the non-IT engineering programme only introduce basic programming courses. 
          Fortunately, free/paid online learning materials are all over the internet. 
          One of the main challenges is, we don't know what we don't know at most of the times. 
          Gotta start to understand the industry by reading the job description in the job ads to find out the popular skillsets and industry requirement, 
          it is probably a good place to start and a great indicator too! As a starter, learn the programming language, 
          understand the general programming fundamental knowledge such as SOLID, DRY, YAGNI, OOP, version control etc.  
          Most importantly, be curious! :D       
        `
    },
    {
      SectionTitle: "Starting a Career in the Industry!",
      Content: `With the lessons learnt from my internship, I headed right into the IT industry (software development field) without a second thought. 
                  I gratefully secured a position as a Software Developer in a .Net software house. 
                  In Dec 2016, officially started my career in software development field.`
    },
    {
      SectionTitle: "Part-time Postgraduate Studies",
      Content:
        `In Jan 2019, it was 2 years after I started my career as a Software Developer in the industry. I decided to get a Master's Degree in computer science to further enhance my knowledge and competency. 
          To make it worse, I enrolled the part-time programme to see how far can I stretch myself.          
          At the end of 2020, with tons of sweat and enough swear words (to myself), I obtained my Master's Degree.`
    },
    {
      SectionTitle: "Finally, where am I today?",
      Content:
        `I would like to thank you for taking time to read this far, as you may have already noticed, 
          I am primarily a back-end software developer, judging from my shitty UI of this web app. 
          It has been more than half a decade working in the software development field, 
          I still find myself continuously gaining new knowledge and new challenges from my career.
          Today, I still constantly asking "how" and "why" in my job, fun!
      `
    }
  ],
  Career: [
    {
      SectionTitle: "2016",
      Description: [
        "Started in a .Net software house.",
        "Web application maintenance & development.",
      ],
      Order: 0
    },
    {
      SectionTitle: "2017 - 2018",
      Description: [
        "E-commerce platform web app development.",
        "Cross-platform mobile app development.",
        "Windows desktop application maintenance.",
        "Upgrade & rewrite a legacy accounting software."
      ],
      Order: 5
    },
    {
      SectionTitle: "2019 - 2020",
      Description: [
        "Database query optimisation & data wrangling for reports & analysis.",
        "System planning & design (primarily backend).",
        "Technical planning & discussion with stakeholders."
      ],
      Order: 10
    },
    {
      SectionTitle: "2021",
      Description: [
        "CI/CD pipeline with on-prem & cloud technology.",
        "Hospital Information System (HIS) upgrade implementation.",
        "Business Intelligence project in Healthcare industry.",
        "End-to-end pipeline from data ingestion to data visualisation.",
      ],
      Order: 15
    },
    {
      SectionTitle: "2022 - Present",
      Description: [
        "Software (Oil & Gas industry) development & maintenance, utilising cloud services.",
      ],
      Order: 20
    },
  ],
  Skillsets: [
    {
      Category: "Programming Language",
      Skills: [
        { Skill: "C#", ReferenceLink: "" },
        { Skill: "VB.Net", ReferenceLink: "" },
        { Skill: "Javascript", ReferenceLink: "" },
        { Skill: "Typescript", ReferenceLink: "" },
        { Skill: "Python 3+", ReferenceLink: "" },
        { Skill: "SQL", ReferenceLink: "" },
      ]
    },
    {
      Category: "Database",
      Skills: [
        { Skill: "Microsoft SQL Server", ReferenceLink: "" },
        { Skill: "MySQL", ReferenceLink: "" },
        { Skill: "Oracle SQL", ReferenceLink: "" },
        { Skill: "Snowflake", ReferenceLink: "https://www.snowflake.com/cloud-data-platform/" },
        { Skill: "Azure SQL Database", ReferenceLink: "" },
        { Skill: "SQLite", ReferenceLink: "" },
        { Skill: "ETL", ReferenceLink: "https://www.ibm.com/cloud/learn/etl" },
        { Skill: "ELT", ReferenceLink: "https://www.ibm.com/cloud/learn/elt" },
        { Skill: "Data Warehouse", ReferenceLink: "" },
        { Skill: "Relational DB", ReferenceLink: "" },
        { Skill: "NoSQL", ReferenceLink: "" },
      ]
    },
    {
      Category: "Software Development",
      Skills: [
        { Skill: ".Net Framework", ReferenceLink: "" },
        { Skill: ".Net Core / .Net 5+", ReferenceLink: "" },
        { Skill: ".Net Standard", ReferenceLink: "https://docs.microsoft.com/en-us/dotnet/standard/net-standard" },
        { Skill: "WinForms", ReferenceLink: "https://docs.microsoft.com/en-us/dotnet/desktop/winforms/overview" },
        { Skill: "Xamarin", ReferenceLink: "https://dotnet.microsoft.com/en-us/apps/xamarin" },
      ]
    },
    {
      Category: "Web Development",
      Skills: [
        { Skill: "ASP.Net", ReferenceLink: "" },
        { Skill: "ASP.Net Core", ReferenceLink: "" },
        { Skill: "Responsive Web Design", ReferenceLink: "https://www.w3schools.com/css/css_rwd_intro.asp" },
        { Skill: "Bootstrap", ReferenceLink: "https://getbootstrap.com/" },
        { Skill: "jQuery", ReferenceLink: "https://jquery.com/" },
        { Skill: "ReactJS", ReferenceLink: "https://reactjs.org/" },
        { Skill: "REST API", ReferenceLink: "" },
      ]
    },
    {
      Category: "Cloud & Others",
      Skills: [
        { Skill: "AWS", ReferenceLink: "https://aws.amazon.com/" },
        { Skill: "Azure", ReferenceLink: "https://azure.microsoft.com/en-us/" },
        { Skill: "Docker", ReferenceLink: "https://www.docker.com/" },
        { Skill: "PowerBI", ReferenceLink: "" },
        { Skill: "Version Control", ReferenceLink: "" },
      ]
    }
  ]
};