import React from 'react';

import Participants from './components/Participants';
import Algorithms from './components/Algorithms';
import Layout from '../../shared/hoks/Layout';
import Frontend from './components/Frontend';
import Backend from './components/Backend';
import CICD from './components/CICD';

import styles from './Presentation.module.scss';

const Presentation = () => {
  return (
    <div className={styles.Presentation}>
      <Layout>
        <Participants />
        <Frontend />
        <CICD />
        <Backend />
        <Algorithms />
      </Layout>
    </div>
  );
};

export default Presentation;
