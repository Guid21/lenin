import { Card, Typography } from 'antd';
import React from 'react';

import styles from './CICD.module.scss';

const { Title } = Typography;

const CICD = () => {
  return (
    <Card className={styles.CICD}>
      <Title level={2}>CI/CD</Title>
      Для развертки фронтенда используется свзяка Github + Vercel <br />
      Для развертки бекенда используется связка Digitalocean + Dokku
    </Card>
  );
};

export default CICD;
