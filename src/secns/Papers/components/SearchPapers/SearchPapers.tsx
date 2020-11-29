import { Input } from 'antd';
import React, { memo, useCallback, useEffect, useState } from 'react';

import ListPaperContainer from '../../../../containers/ListPaperContainer';

import styles from './SearchPapers.module.scss';

const SearchPapers = () => {
  const [search, setSearch] = useState('');
  const { getDate } = ListPaperContainer.useContainer();

  const searchPeapers = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
    []
  );

  useEffect(() => {
    if (search.trim().length > 3) getDate({ text: search });
  }, [search, getDate]);

  return (
    <div className={styles.SearchPapers}>
      <Input placeholder="Введите дату" onChange={searchPeapers} />
    </div>
  );
};

export default memo(SearchPapers);
