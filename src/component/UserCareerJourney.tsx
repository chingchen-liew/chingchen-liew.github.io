import React from 'react';
import { List, Timeline, Typography } from 'antd';
import { UserCareerJourneyProps } from '../props/UserCareerJourneyProps';

const UserCareerJourney = (props: UserCareerJourneyProps) => {
  const { Text } = Typography;
  const { CareerEvents } = props;

  // To temporarily ignore the TS compiler at Ant Design's Timeline component.
  const ADTimeline = Timeline as any;
  const ADTimelineItem = Timeline.Item as any;

  return <>
    <ADTimeline reverse mode="alternate">
      {
        CareerEvents.map(ev => {
          return <ADTimelineItem>
            <Text keyboard>{ev.SectionTitle}</Text>
            <List
              size='small'
              dataSource={ev.Description}
              renderItem={
                item => (
                  <List.Item>
                    <Text>{item}</Text>
                  </List.Item>
                )}
            />
          </ADTimelineItem>;
        })
      }
    </ADTimeline>
  </>;
}


export default UserCareerJourney;