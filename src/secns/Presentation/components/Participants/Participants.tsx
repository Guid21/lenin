import { Card } from 'antd';
import React from 'react';

import styles from './Participants.module.scss';

const { Meta } = Card;

const Participants = () => {
  return (
    <div className={styles.Participants}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="/fed.jpg" />}
      >
        <Meta title="Федор" description="Jcorwin" />
        Алгоритмист
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="/tim.jpg" />}
      >
        <Meta title="Тимур" description="Gkoch " />
        Frontend developer & Devops
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="/jen.jpg" />}
      >
        <Meta title="Евгений" description="ahalmon" />
        Backend developer
      </Card>
    </div>
  );
};

export default Participants;
