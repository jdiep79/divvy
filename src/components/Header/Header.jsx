import React from 'react'
import Link from 'gatsby-link'

import styles from './Header.module.css';

const Header = () => (
  <div>
    <div className={styles.navigationContainer}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="https://s3.amazonaws.com/divvy-images/Divvy_Logo_White.png" alt="logo"/>
      </div>
      <div className={styles.linkContainer}>
        <div className={styles.link}>
          <Link to="/" style={{ color: '#00779B', textDecoration: 'none'}}>Dashboard</Link>
        </div>
        <div className={styles.link}>
          <Link to="/projects" style={{ color: '#00779B', textDecoration: 'none'}}>Projects</Link>
        </div>
        <div className={styles.link}>
          <Link to="/" style={{ color: '#00779B', textDecoration: 'none'}}>Directory</Link>
        </div>
      </div>
    </div>
    <div className={styles.userSearchContainer}>
      <img className={styles.find} src="https://s3.amazonaws.com/divvy-images/find.png" alt="Search" />
      <img className={styles.user} src="https://s3.amazonaws.com/divvy-images/user.png" alt="User" />
    </div>     
  </div>
);

export default Header
