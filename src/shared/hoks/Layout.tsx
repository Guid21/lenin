import React, { FC } from 'react';
import { Button } from 'antd';

const Layout: FC<any> = ({ children }) => {
  return (
    <div style={{ margin: '0 5px' }}>
      <header>
        <img
          src="https://rusneb.ru/local/templates/neb/assets/image/logo.svg"
          alt="logo"
        />
        <Button type="primary">Презентация</Button>
      </header>
      {children}
    </div>
  );
};

export default Layout;
