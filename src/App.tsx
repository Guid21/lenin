import React from 'react';

import styles from './App.module.scss';

import ListPaperContainer from './containers/ListPaperContainer';
import isLoadingContainer from './containers/isLoadingContainer';
import Routing from './shared/hoks/Routing';

function App() {
  return (
    <isLoadingContainer.Provider>
      <ListPaperContainer.Provider>
        <div className={styles.App}>
          <div className={styles.Container}>
            <Routing />
          </div>
        </div>
      </ListPaperContainer.Provider>
    </isLoadingContainer.Provider>
  );
}

export default App;
