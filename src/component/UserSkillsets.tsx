import { LinkOutlined } from '@ant-design/icons';
import { List, Tooltip, Typography } from 'antd';
import React from 'react';
import { UserSkill } from '../model/UserSkill';
import { UserSkillsetsProps } from '../props/UserSkillsetsProps';
import './UserSkillsets.css'

const UserSkillsets = (props: UserSkillsetsProps) => {
  const { Skillsets } = props;
  const { Text, Link } = Typography;

  return <section id='skillsetContainer'>
    {
      Skillsets.map(s => {
        return ( 
          <List header={`- ${s.Category} -`}
            bordered className='skill-list'
            key={Skillsets.indexOf(s)}
            dataSource={s.Skills}
            renderItem={
              (item: UserSkill) => (
                <List.Item key={s.Skills.indexOf(item)}>
                  <Text>
                    {item.Skill}

                    {/*Only show link when it is available.*/}
                    {item.ReferenceLink &&
                      <Tooltip title='More Info'><Link href={item.ReferenceLink} target='_blank'> <LinkOutlined /></Link></Tooltip>
                    }
                  </Text>
                </List.Item>
              )
            } />
        )
      })
    }
  </section >
}
export default UserSkillsets;