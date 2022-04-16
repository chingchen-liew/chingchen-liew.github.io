import React from 'react';
import { Empty, Tabs } from 'antd';
import { ProfileDetailProps } from '../props/ProfileDetailProps';
import UserBackgroundStory from './UserBackgroundStory';
import UserCareerJourney from './UserCareerJourney';
import UserSkillsets from './UserSkillsets';

const ProfileDetail = (profileDetailProps: ProfileDetailProps) => {
  const { TabPane } = Tabs;
  const { BackgroundStories, Skillsets, CareerJourney } = profileDetailProps; 
  return <div className="card-container">
    <Tabs centered type="card">
      <TabPane tab="Background" key="1">
        {BackgroundStories ?
          <UserBackgroundStory Stories={BackgroundStories} />
          : <Empty />
        }
      </TabPane>
      <TabPane tab="Career" key="2">
        {CareerJourney ?
          <UserCareerJourney CareerEvents={CareerJourney} />
          : <Empty />
        }
      </TabPane>
      <TabPane tab="Skillsets" key="3">
        {Skillsets ?
          <UserSkillsets Skillsets={Skillsets} />
          : <Empty />
        }
      </TabPane>
    </Tabs>
  </div>;
}

export default ProfileDetail;