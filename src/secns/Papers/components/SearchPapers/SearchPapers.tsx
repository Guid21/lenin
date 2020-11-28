import { Input } from 'antd';
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
      <Input placeholder="Введите дату" onChange={searchPeapers} />
    </div>
  );
};

export default memo(SearchPapers);
