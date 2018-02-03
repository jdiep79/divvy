import React, { Component } from 'react';

import ProjectsList from '../components/Projects/ProjectsList';

import styles from './projects.module.css';

class ProjectsPage extends Component {
  render() {
    return (
      <div className={styles.projectPage}>
        <ProjectsList />
      </div>
    )
  }
}

export default ProjectsPage;
