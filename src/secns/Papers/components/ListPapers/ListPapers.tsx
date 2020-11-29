import React, { useMemo } from 'react';
import { List, Spin, Tag, Typography } from 'antd';

import ListPaperContainer from '../../../../containers/ListPaperContainer';
import isLoadingContainer from '../../../../containers/isLoadingContainer';

import styles from './ListPapers.module.scss';

const { Title } = Typography;

const ListSearch = () => {
  const { listPaper } = ListPaperContainer?.useContainer();
  const { isLoading } = isLoadingContainer.useContainer();

  const empty = <Title level={3}>Нет данных</Title>;

  return (
    <div className={styles.ListSearch}>
      {listPaper?.length > 0 && !isLoading && (
        <List
          size="small"
          bordered
          dataSource={listPaper}
          renderItem={([source, result]) => (
            <List.Item className={styles.Item}>
              <div>
                <Title level={5}>Исходный вариант</Title>
                <Tag color="geekblue">{source}</Tag>
              </div>
              <div>
                <Title level={5}>Рузультат</Title>
                <Tag color={result ? 'green' : 'red'}>
                  {result || 'К сожалению мы не смогли распарсить'}
                </Tag>
              </div>
            </List.Item>
          )}
        />
      )}
      {listPaper?.length === 0 && !isLoading && empty}
      {isLoading && <Spin />}
    </div>
  );
};

export default ListSearch;
