import { Card, Typography } from 'antd';
import React from 'react';

import styles from './Algorithms.module.scss';

const { Title } = Typography;

const Algorithms = () => {
  return (
    <Card className={styles.Algorithms}>
      <Title level={2}>Algorithms</Title>
      Движок распознавания дат, основанный на собственном алгоритме токенизации
      текста и работающем поверх него движке регулярных выражений по выделенным
      нами токенам
    </Card>
  );
};

export default Algorithms;
