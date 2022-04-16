import React, { useState } from 'react';
import { Image, Card, Divider, Avatar, Tooltip, Button, Drawer } from 'antd'
import { LinkedinFilled, GithubFilled, MailFilled, DownOutlined, ProfileOutlined } from '@ant-design/icons';
import { ProfileCardProps } from '../props/ProfileCardProps';
import { Typography } from 'antd';
import './ProfileCard.css'
import ProfileDetail from './ProfileDetail';

const ProfileCard = (props: ProfileCardProps) => {
  const { Title, Text, Link } = Typography;
  const { User } = props;
  const [isShowProfileDetail, setIsShowProfileDetail] = useState(false);

  return <Card className='profile-card'
    actions={[
      /* Show the action buttons at footer. */
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
    {/* Display avatar and name. */}
    <Avatar size={100} className='profile-avatar' src={<Image src={User.AvatarPath} />} />
    <Title level={4}>{User.Name}</Title>
    {User.Subtitle &&
      <Text italic>{User.Subtitle}</Text>
    }
    <Divider></Divider>

    {/* Show user description & more detail */}
    <Text>{User.Description}</Text>
    <br></br>
    <br></br>
    <Button type="dashed" onClick={() => setIsShowProfileDetail(true)}>
      <Text className='moreDetailsText' strong> <ProfileOutlined /> More details!</Text>
    </Button>

    {/* Draw for the user details 
    /// MUST HAVE: destroyOnClose 
    ///   -> In the case there are many profile cards, those opened drawers will still be in the DOM after closing it. 
    ///       Hence, gotta destroy it to reduce the DOM elements.
    */}
    <Drawer
      destroyOnClose
      placement="bottom"
      closable={false}
      onClose={() => setIsShowProfileDetail(false)}
      visible={isShowProfileDetail}
      height="100%"
      key="bottom"
    >
      <Button id="detailDrawerButton" onClick={() => setIsShowProfileDetail(false)}>
        <Text strong>Close <DownOutlined /></Text>
      </Button>
      <div style={{ height: "1em" }}></div>
      <ProfileDetail {...props.Detail} />
    </Drawer>
  </Card >;
}

export default ProfileCard;