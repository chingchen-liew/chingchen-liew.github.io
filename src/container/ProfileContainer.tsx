import React from 'react';
import ProfileCard from '../component/ProfileCard';
import { ChingChenProfileData } from '../data/chingchen-profile'; 
import { ProfileCardProps } from '../props/ProfileCardProps';
import './ProfileContainer.css'

const ProfileContainer = () => { 
  const myProfile: ProfileCardProps = {
    User: ChingChenProfileData.Info,
    Detail: {
      BackgroundStories: ChingChenProfileData.Background,
      CareerJourney: ChingChenProfileData.Career,
      Skillsets: ChingChenProfileData.Skillsets
    }
  };

  return (
    <section id="profileContainer">
      <ProfileCard {...myProfile} />
    </section>
  );
}

export default ProfileContainer;