import React from 'react';

import styles from './projects.module.css';

const projectList = [
  {
    logo: 'https://s3.amazonaws.com/tribalscale-hackathon/logo-abc-news%403x.png',
    name: 'ABC News',
    platform: 'Mobile'
  },
  {
    logo: 'https://s3.amazonaws.com/tribalscale-hackathon/carnival-cruise-line%403x.png',
    name: 'Carnival',
    platform: 'Voice'
  },
  {
    logo: 'https://s3.amazonaws.com/tribalscale-hackathon/athos-horizonal-lockup-100-px-oqtx-7-n%403x.png',
    name: 'Athos',
    platform: 'Mobile'
  },
  {
    logo: 'https://s3.amazonaws.com/tribalscale-hackathon/2051631-0-logo%403x.png',
    name: 'Body Rock',
    platform: 'Web'
  }
]

const ProjectRow = ({ project }) => {
  const { logo, platform } = project;
  return (
    <div className={styles.projectRow}>
      <div className={styles.projectRowCell}>
        <img
          className={styles.projectLogo}
          src={logo}/>
        <p>{platform}</p>
      </div>
      <div className={styles.projectRowCellCurrent}>
        <div className={styles.projectCellContentCurrent}></div>
        <div className={styles.projectCellContentCurrent}></div>
        <div className={styles.projectCellContentCurrent}></div>
      </div>
      <div className={styles.projectRowCell}>
        <div className={styles.projectCellContent}></div>
        <div className={styles.projectCellContent}></div>
        <div className={styles.projectCellContent}></div>
      </div>
      <div className={styles.projectRowCell}>
        <div className={styles.projectCellContent}></div>
        <div className={styles.projectCellContent}></div>
        <div className={styles.projectCellContent}></div>
      </div>
      <div className={styles.projectRowCell}>
        <div className={styles.projectCellContent}></div>
        <div className={styles.projectCellContent}></div>
        <div className={styles.projectCellContent}></div>
      </div>
      <div className={styles.projectRowCell}>
        <div className={styles.projectCellContent}></div>
        <div className={styles.projectCellContent}></div>
        <div className={styles.projectCellContent}></div>
      </div>
      <div className={styles.projectRowCell}>
        <div className={styles.projectCellContent}></div>
        <div className={styles.projectCellContent}></div>
        <div className={styles.projectCellContent}></div>
      </div>
      
    </div>
  );
}

const ProjectsList = (props) => {
  return (
    <div>
     <div className={styles.projectRowHeaderContainer}>
        <div className={styles.projectRowHeader}>Client/ Project</div>
        <div className={styles.projectRowHeader}>Current Week</div>
        <div className={styles.projectRowHeader}>Feb 5th</div>
        <div className={styles.projectRowHeader}>Feb 12th</div>
        <div className={styles.projectRowHeader}>Feb 19th</div>
        <div className={styles.projectRowHeader}>Feb 26th</div>
        <div className={styles.projectRowHeader}>Mar 5th</div>
      </div>
      <div></div>
      {projectList.map(project => {
        return (
          <ProjectRow
            project={project}
            key={`project-row-${project.name}`}
          />
        )
      })}
    </div>
  );
}

export default ProjectsList;
