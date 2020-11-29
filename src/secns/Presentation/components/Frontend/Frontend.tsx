import { Card, Typography } from 'antd';
import React from 'react';

import styles from './Frontend.module.scss';

const { Title } = Typography;

const Frontend = () => {
  return (
    <Card className={styles.Frontend}>
      <Title level={2}>Frontend</Title>
      Стек технологий:
      <br /> - react - библиотека для удобной разработки ui
      <br /> - react-dom & react-router-dom
      <br /> - библиотека для настройки роутинга
      <br /> - ajax - библиотека для удобного общения с сервером
      <br /> - node-sass - css припроцессоры
      <br /> - typescript - используется для типизации
      <br /> - unstated-next - менеджер хранения стейта, хотелось попробовать
      что то другое, а не заезжанный редакс
    </Card>
  );
};

export default Frontend;
