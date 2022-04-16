import React from 'react';
import { Image, Card, Divider, Avatar, Tooltip, Button } from 'antd'
import { LinkedinFilled, GithubFilled, MailFilled } from '@ant-design/icons';
import { ProfileCardProps } from '../props/ProfileCardProps';
import { Typography } from 'antd';
import './ProfileCard.css'

const ProfileCard = (profileCardProps: ProfileCardProps) => {
  const { Title, Text, Link } = Typography;
  const { User } = profileCardProps;

  return <Card className='profile-card'
    actions={[
      <Tooltip title="Let's connect">
        <Link href={User.LinkedInURL} target="_blank">
          <LinkedinFilled />
        </Link>
      </Tooltip>,
      <Tooltip title="My GitHub profile">
        <Link href={User.GitHubURL} target="_blank">
          <GithubFilled />
        </Link>
      </Tooltip>,
      <Tooltip title={`Contact me at ${User.EmailAddress}`}>
        <Link href={`mailto:${User.EmailAddress}`}>
          <MailFilled />
        </Link>
      </Tooltip>
    ]}
  >
    <Avatar size={100} className='profile-avatar' src={<Image src={User.AvatarPath} />} />
    <Title level={4}>{User.Name}</Title>
    {User.SubTitle &&
      <Text italic>{User.SubTitle}</Text>
    }
    <Divider></Divider>
    <Text>{User.Description}</Text>
    <br></br>
    <br></br>
    <Button type="dashed"><Text strong>More detail here!</Text></Button>
  </Card >;
}

export default ProfileCard;