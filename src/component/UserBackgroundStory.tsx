import React from 'react';
import { Typography } from 'antd';
import { UserBackgroundStoryProps } from '../props/UserBackgroundStoryProps';

const UserBackgroundStory = (props: UserBackgroundStoryProps) => {
  const { Title, Paragraph } = Typography;
  const { Stories } = props;

  let backgroundStories: any = [];

  Stories.forEach(s => {
    backgroundStories.push(<div key={Stories.indexOf(s)} >
      <Title keyboard level={5}>{s.SectionTitle}</Title>
      <Paragraph>{s.Content}</Paragraph>
      <br></br>
    </div>);
  })

  return <>{backgroundStories}</>;
}

export default UserBackgroundStory;