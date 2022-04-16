import React from 'react';
import { Typography } from 'antd';
import { UserBackgroundStoryProps } from '../props/UserBackgroundStoryProps';

const UserBackgroundStory = (props: UserBackgroundStoryProps) => {
  const { Title, Paragraph } = Typography;
  const { Stories } = props;

  return <>
    {
      Stories.map(s => {
        return <>
          <Title underline level={5}>{s.SectionTitle}</Title>
          <Paragraph>{s.Content}</Paragraph>
          <br></br>
        </>
      })
    }
  </>;
}

export default UserBackgroundStory;