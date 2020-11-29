import { Card, Typography } from 'antd';
import React from 'react';

import styles from './Backend.module.scss';

const { Title } = Typography;

const Backend = () => {
  return (
    <Card className={styles.Backend}>
      <Title level={2}>Backend</Title>
      Стек технологий:
      <br /> - fastapi - фреймворк для создания API с автогенерацией
      документации
      <br /> - gunicorn - сервер приложения
      <br /> - pymorphy2 - морфологияеский анализатоп
      <br /> - dokku - автоматизированная оркестрация
    </Card>
  );
};

export default Backend;
