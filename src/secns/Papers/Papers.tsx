import React from 'react';

import Layout from '../../shared/hoks/Layout';
import ListPapers from './components/ListPapers';
import SearchPapers from './components/SearchPapers';
import UploadPapers from './components/UploadPapers';

const Papers = () => {
  return (
    <Layout>
      <SearchPapers />
      <UploadPapers />
      <ListPapers />
    </Layout>
  );
};

export default Papers;
