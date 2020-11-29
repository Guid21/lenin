import React from 'react';
import { Upload, Button, notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import ListPaperContainer from '../../../../containers/ListPaperContainer';
import isLoadingContainer from '../../../../containers/isLoadingContainer';

import styles from './UploadPapers.module.scss';

const openNotificationWithIcon = (
  type: 'error' | 'warning' | 'success',
  message: string
) => {
  notification[type]({
    message,
  });
};

const UploadPapers = () => {
  const { setDate } = ListPaperContainer.useContainer();
  const { setIsLoading } = isLoadingContainer.useContainer();

  const props = {
    name: 'file',
    action: 'https://api.ali-set.com/file',
    headers: {
      authorization: 'authorization-text',
    },
    onSuccess(resp: any) {
      setIsLoading(false);
      setDate(resp);
    },
  };

  return (
    <div className={styles.UploadPapers}>
      <Upload
        fileList={[]}
        beforeUpload={(file: File) => {
          setIsLoading(true);

          if (file.size > 10000000) {
            setIsLoading(false);
            openNotificationWithIcon(
              'warning',
              'Размер файла не должен превышать 10 мб'
            );
          } else if (file.name.includes('.csv')) {
            return true;
          }
          openNotificationWithIcon('warning', 'Формат файла должен быть .csv');
          setIsLoading(false);

          return false;
        }}
        {...props}
      >
        <Button icon={<UploadOutlined />}>Загрузить список дат</Button>
      </Upload>
    </div>
  );
};

export default UploadPapers;
