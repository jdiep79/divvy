import React from 'react'
import Link from 'gatsby-link'

import styles from './Header.module.css';

const Header = () => (
  <div className={styles.container}>
      <div className={styles.linkContainer}>
        <div>
          <Link to="/" style={{ color: '#00779B', textDecoration: 'none'}}>Dashboard</Link>
        </div>
        <div>
          <Link to="/" style={{ color: '#00779B', textDecoration: 'none'}}>Projects</Link>
        </div>
        <div>
          <Link to="/" style={{ color: '#00779B', textDecoration: 'none'}}>Directory</Link>
        </div>
    </div>
  </div>
)

export default Header
