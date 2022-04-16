import React from 'react';
import { Typography } from 'antd';
import { UserBackgroundStoryProps } from '../props/UserBackgroundStoryProps';

const UserBackgroundStory = (props: UserBackgroundStoryProps) => {
  const { Title, Text } = Typography;
  const { Stories } = props;

  return <>
    {
      Stories.map(s => {
        return <>
          <Title underline level={5}>{s.SectionTitle}</Title>
          <Text>{s.Content}</Text>
        </>
      })
    }
  </>;
}

export default UserBackgroundStory;