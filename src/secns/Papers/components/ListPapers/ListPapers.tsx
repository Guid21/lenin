import React, { useMemo } from 'react';
import { Card } from 'antd';

import ListPaperContainer from '../../../../containers/ListPaperContainer';

import styles from './ListPapers.module.scss';

const ListSearch = () => {
  const { listPaper } = ListPaperContainer?.useContainer();

  const list = useMemo(
    () =>
      listPaper.map(({ id, title, description }) => (
        <Card title={title} key={id} className={styles.Card}>
          {description}
        </Card>
      )),
    [listPaper]
  );

  return <div className={styles.ListSearch}>{list}</div>;
};

export default ListSearch;
