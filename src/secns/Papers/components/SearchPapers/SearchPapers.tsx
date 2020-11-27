import Search from 'antd/lib/input/Search';
import React, { memo, useCallback, useEffect, useState } from 'react';

import ListPaperContainer from '../../../../containers/ListPaperContainer';

import styles from './SearchPapers.module.scss';

const SearchPapers = () => {
  const [search, setSearch] = useState('');
  const { update } = ListPaperContainer.useContainer();

  const searchPeapers = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
    []
  );

  useEffect(() => {
    update({ q: search });
  }, [search, update]);

  return (
    <div className={styles.SearchPapers}>
      <Search
        placeholder="input search text"
        enterButton
        onChange={searchPeapers}
      />
    </div>
  );
};

export default memo(SearchPapers);
