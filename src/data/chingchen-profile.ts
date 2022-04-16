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
      SectionTitle: "Internship (Diploma)",
      Content: `I had my internship as a manufacturing technician intern in one of the largest OEMs in Malaysia. 
                  They are the OEM for several huge automobile and motorcycle corporations 
                  such as Honda Malaysia, Perodua, Hicom Honda, Hicom Yamaha, Hicom Suzuki, and Modenas.
                  At the end of my internship, I realised that manufacturing industry may not be something I'd like to pursue.`
    },
    {
      SectionTitle: "Internship (Degree)",
      Content: `Moving forward to the 2nd internship I had during my degree studies, 
                  I was given an opportunity to have my internship in an IT Services company, as an application developer intern.
                  During my internship, I discovered my passion in software development.`
    },
    {
      SectionTitle: "Engineering Graduate",
      Content:
        `In Dec 2016, I graduated from an Engineering degree, major in Mechatronics Engineering (also known as Robotic to many others) 
          from Tunku Abdul Rahman University College at Kuala Lumpur, Malaysia. I was also awarded to the merit scholarship during my Bachelor Degree studies.`
    },
    {
      SectionTitle: "Master's in Computer Science",
      Content:
        `In Jan 2019, I decided to start my part-time Master's Degree in computer science to further enhance my knowledge and competency. 
          It was 2 years after I started my career as a Software Developer in the industry.
          At the end of 2020, I obtained my Master's Degree.`
    },
    {
      SectionTitle: "Starting my career in IT industry",
      Content: `With the lessons learnt from my internship, I headed right into the IT industry (software development field) without a second thought. 
                  I gratefully secured a position as a Software Developer in a .Net software house, and started my career in Dec 2016.`
    },
  ],
  Career: [

  ],
  Skillsets: [

  ]
};