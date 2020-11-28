import React, { useMemo } from 'react';
import { Card, Typography } from 'antd';

import ListPaperContainer from '../../../../containers/ListPaperContainer';

import styles from './ListPapers.module.scss';

const { Title } = Typography;

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

  const empty = <Title level={3}>Нет данных</Title>;

  return (
    <div className={styles.ListSearch}>{list.length > 0 ? list : empty}</div>
  );
};

export default ListSearch;
