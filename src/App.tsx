import React from 'react';
import { Input } from 'antd';

import styles from './App.module.scss';

import ListPaperContainer from './containers/ListPaperContainer';
import Papers from './secns/Papers';

const { Search } = Input;

function App() {
  return (
    <ListPaperContainer.Provider>
      <div className={styles.App}>
        <div className={styles.Container}>
          <Papers />
        </div>
      </div>
    </ListPaperContainer.Provider>
  );
}

export default App;
