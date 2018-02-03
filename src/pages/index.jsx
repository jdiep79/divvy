import React from 'react'
import Link from 'gatsby-link'

import styles from './index.module.css';

const user = {
  name: {
      first: 'Lily',
      last: 'Weaver'
  },
  title: 'Product Manager',
  location: 'Toronto',
  email: 'lily.weaver@example.com',
  picture: 'https://s3.amazonaws.com/tribalscale-hackathon/profile-img%403x.png',
  skills: [
    'UX', 'Agile', 'SCRUM', 'Consulting', 'Budgeting', 'Discovery', 'Sprint', 'Management'
  ],
  goals: [
    {
      text: 'Finish Reading “Multipliers”',
      daysLeft: '28 days',
      percentComplete: 65
    },
    {
      text: 'Write a Blog Post',
      daysLeft: '85 days',
      percentComplete: 0
    }
  ]
};

const SkillChip = (props) => {
  const { name } = props;
  return (
    <div className={styles.skillChip}>
      <p className={styles.skillChipText}>{name}</p>
    </div>
  )
}

const GoalLabel = (props) => {
  const { text, daysLeft, percentComplete } = props;
  const percentLeftLabelClass = percentComplete > 0 ?
  styles.userInfoGoalPercentLeftGreen :
  styles.userInfoGoalPercentLeftYellow

  return (
    <div className={styles.userInfoGoalLabel}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <p className={styles.userInfoGoalText}>{text}</p>
        <p className={styles.userInfoGoalDaysLeft}>{daysLeft}</p>
      </div>
      <div className={percentLeftLabelClass}>{percentComplete}%</div>
    </div>
  )
}

const LandingPage = () => (
  <div>
    <main className={styles.contentContainer}>
      <div className={styles.largeItem}>
          <div className={styles.userInfoContainer}>
            
            <div className={styles.userInfoImgContainer}>
              <img
                className={styles.userInfoPic}
                src={user.picture} />
            </div>
            
            <div className={styles.userInfoNameAndTitle}>
              <h1>{`${user.name.first} ${user.name.last}`}</h1>
              <h2>{user.title}</h2>
            </div>
            
            <div className={styles.userInfoBandwidthContainer}>
              <h3>Weekly Bandwidth</h3>
              <div className={styles.userInfoBandwidthGrey}>
                <div className={styles.userInfoBandwidthColor} />
              </div>
            </div>

            <div className={styles.userInfoCurrentProjectsContainer}>
              <h3>Current Projects</h3>
              <div className={styles.userInfoCurrentProjectName}>
                <img 
                  className={styles.userInfoCurrentProjectLogo}
                  src="https://s3.amazonaws.com/tribalscale-hackathon/4230-256x256x8.png" />
                <h4>Honda Innovations</h4>
                <img
                  className={styles.userInfoCurrentProjectIcon}
                  src="https://s3.amazonaws.com/tribalscale-hackathon/iconmonstr-arrow-25%403x.png" />
              </div>
              <div className={styles.userInfoCurrentProjectName}>
                <img 
                  className={styles.userInfoCurrentProjectLogo}
                  src="https://s3.amazonaws.com/tribalscale-hackathon/radiocom.png" />
                <h4>RADIO.COM</h4>
                <img
                  className={styles.userInfoCurrentProjectIcon}
                  src="https://s3.amazonaws.com/tribalscale-hackathon/iconmonstr-arrow-25%403x.png" />
              </div>

              <div className={styles.userInfoSkilletsetContainer}>
                <h3>Skillset</h3>
                {user.skills.map(skill => {
                  console.log('skill name', skill)
                  return (
                    <SkillChip
                      key={`skill-chip-${skill}`}
                      name={skill}
                    />)
                })}
              </div>

              <div className={styles.userInfoGoalsContainer}>
                <h3>Goals</h3>
                {user.goals.map(goal => {
                  return (
                    <GoalLabel
                      key={`goal-${goal.text}`}
                      text={goal.text}
                      daysLeft={goal.daysLeft}
                      percentComplete={goal.percentComplete}
                    />
                  )
                })}
              </div>
              
            </div>
          </div>
      </div>




      <div className={styles.small}>
        <img
          className={styles.dashboardContent}
          src="https://s3.amazonaws.com/tribalscale-hackathon/Screen+Shot+2018-02-03+at+3.37.06+PM.png" />
      </div>
    </main>
  </div>
)

export default LandingPage;
