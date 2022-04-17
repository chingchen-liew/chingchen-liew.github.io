import React from 'react';
import ProfileCard from '../component/ProfileCard';
import { ChingChenProfileData } from '../data/chingchen-profile';
import { ProfileCardProps } from '../props/ProfileCardProps';
import './ProfileContainer.css'
import ReactGA from "react-ga4";

const ProfileContainer = () => {
  const SendViewMoreDetailsEventToGA4 = () => {
    // Send a ViewDetail event to GA4.
    ReactGA.event({
      category: "view_detail",
      action: "click_more_detail"
    });
  }

  const myProfile: ProfileCardProps = {
    User: ChingChenProfileData.Info,
    Detail: {
      BackgroundStories: ChingChenProfileData.Background,
      CareerJourney: ChingChenProfileData.Career,
      Skillsets: ChingChenProfileData.Skillsets
    },
    SendAnalyticEventForViewMoreDetail: SendViewMoreDetailsEventToGA4
  };

  return (
    <section id="profileContainer">
      <ProfileCard {...myProfile} />
    </section>
  );
}

export default ProfileContainer;