import React from 'react';

import styles from './App.module.scss';

import ListPaperContainer from './containers/ListPaperContainer';
import isLoadingContainer from './containers/isLoadingContainer';
import Papers from './secns/Papers';

function App() {
  return (
    <isLoadingContainer.Provider>
      <ListPaperContainer.Provider>
        <div className={styles.App}>
          <div className={styles.Container}>
            <Papers />
          </div>
        </div>
      </ListPaperContainer.Provider>
    </isLoadingContainer.Provider>
  );
}

export default App;
