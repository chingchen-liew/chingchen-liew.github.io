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
    Subtitle: "A Passionate Techie",
    Description: "Hi, I am ChingChen, a Software Developer who based at Malaysia. I love software development, process improvement & reduce toil with automation!",
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
      SectionTitle: "A Young & Innoncent Engineering Graduate",
      Content:
        `In Nov 2016, I graduated from an Engineering degree, major in Mechatronics Engineering (also known as Robotic to many others) 
          from Tunku Abdul Rahman University College at Kuala Lumpur, Malaysia. 
          During my Bachelor Degree studies, I was awarded to the merit scholarship. 
          Yes, I still feel sorry that I took a scholarship that it could be given to someone else who actually wanted to be a Mechatronics/Robotic Engineer, unlike me. :)`
    },
    {
      SectionTitle: "Starting a career in IT industry!",
      Content: `With the lessons learnt from my internship, I headed right into the IT industry (software development field) without a second thought. 
                  I gratefully secured a position as a Software Developer in a .Net software house. 
                  In Dec 2016, officially started my career in IT.`
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
        "Started as a junior software developer in a .Net software house.",
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
      Order: 1
    },
    {
      SectionTitle: "2019 - 2020",
      Description: [
        "Database query optimisation & data wrangling for reports & analysis.",
        "System planning & design (primarily backend).",
        "Technical planning & discussion with stakeholders."
      ],
      Order: 2
    },
    {
      SectionTitle: "2021",
      Description: [
        "CI/CD pipeline with on-prem & cloud technology.",        
        "Hospital Information System (HIS) ugrade implementation.",
        "Business Intelligence project in Healthcare industry.",
        "End-to-end pipeline from data ingestion to data visualisation.",
      ],
      Order: 3
    },
    {
      SectionTitle: "2022 - Present",
      Description: [
        "Software (Oil & Gas industry) development & maintenance, utilising cloud services.",
      ],
      Order: 4
    },
  ],
  Skillsets: [
    {
      Category: "Web Development",
      Skills: [
        {
          Skill: "",
          ReferenceLink: ""
        }
      ]
    }
  ]
};