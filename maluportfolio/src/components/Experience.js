import React from 'react'
import Timeline from '@mui/lab/Timeline'
import { TimelineDot, TimelineOppositeContent, TimelineSeparator, TimelineItem, TimelineConnector, TimelineContent } from '@mui/lab'

const Experience = () => {
  return (
    <section id='experience' className='px-8 md:pr-36 md:pl-56 pl-20'>
      <h2 className='font-bold text-3xl py-8 md:pb-4 md:text-left'>Experience</h2>
      <Timeline position='alternate'>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <span className='text-xs md:text-sm'>Sep 2022 - Currently</span>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent><span className='text-xs md:text-sm'>Software Developer Intern @ Vetta</span></TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <span className='text-xs md:text-sm'>Jun 2022 - Sep 2022</span>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent><span className='text-xs md:text-sm'>Software Developer @ UFRPE | University Extension Program</span></TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  )
}

export default Experience