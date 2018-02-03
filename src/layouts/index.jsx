import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import './base.css';
import styles from './index.module.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Divvy"
      meta={[
        { name: 'description', content: 'Divvy' },
        { name: 'keywords', content: 'divvy, allocations, tribalscale' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
    <Footer />
  </div>
)

export default TemplateWrapper;
