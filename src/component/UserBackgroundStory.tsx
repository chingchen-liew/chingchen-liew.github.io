import React from 'react';
import { Divider, Typography } from 'antd';
import { UserBackgroundStoryProps } from '../props/UserBackgroundStoryProps';

const UserBackgroundStory = (props: UserBackgroundStoryProps) => {
  const { Paragraph } = Typography;
  const { Stories } = props;

  let backgroundStories: any = [];

  Stories.forEach(s => {
    backgroundStories.push(
      <div key={Stories.indexOf(s)}> 
        <Divider orientation='left'>{s.SectionTitle}</Divider>
        <Paragraph>{s.Content}</Paragraph>
        <br></br>
      </div>);
  })

  return <>{backgroundStories}</>;
}

export default UserBackgroundStory;