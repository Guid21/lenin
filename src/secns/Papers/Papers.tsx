import React from 'react';

import Layout from '../../shared/hoks/Layout';
import ListPapers from './components/ListPapers';
import SearchPapers from './components/SearchPapers';
import UploadPapers from './components/UploadPapers';

import styles from './Papers.module.scss';

const Papers = () => {
  return (
    <Layout>
      <div className={styles.ControlPanel}>
        <SearchPapers />
        <UploadPapers />
      </div>
      <ListPapers />
    </Layout>
  );
};

export default Papers;
