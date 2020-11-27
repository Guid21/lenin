import React from 'react';

import ListPapers from './components/ListPapers';
import SearchPapers from './components/SearchPapers';

const Papers = () => {
  return (
    <div>
      <SearchPapers />
      <ListPapers />
    </div>
  );
};

export default Papers;
