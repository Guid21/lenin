import React, { FC } from 'react';
import { Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const Layout: FC<any> = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div style={{ margin: '0 5px' }}>
      <header>
        <img
          src="https://rusneb.ru/local/templates/neb/assets/image/logo.svg"
          alt="logo"
        />
        {pathname === '/' && (
          <Link to="/presentation">
            <Button type="primary">Презентация</Button>
          </Link>
        )}
        {pathname === '/presentation' && (
          <Link to="/">
            <Button type="primary">Решение</Button>
          </Link>
        )}
      </header>
      {children}
    </div>
  );
};

export default Layout;
