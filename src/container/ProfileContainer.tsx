import React from 'react';
import ProfileCard from '../component/ProfileCard';
import { ProfileCardProps } from '../props/ProfileCardProps';
import './ProfileContainer.css'

const ProfileContainer = () => {
  const myProfile: ProfileCardProps = {
    User: {
      Name: "Liew Ching Chen",
      Subtitle: "A Passionate Techie",
      Description: "Hi, I am ChingChen, a Software Developer who based at Malaysia. I love software development, process improvement & reduce toil with automation!",
      LinkedInURL: "https://www.linkedin.com/in/liewchingchen/",
      GitHubURL: "https://github.com/chingchen-liew",
      EmailAddress: "liewchingchen@gmail.com",
      AvatarPath: "/images/chingchen-bitmoji.jpeg"
    }
  };

  return (
    <section id="profileContainer">
      <ProfileCard {...myProfile} />
    </section>
  );
}

export default ProfileContainer;