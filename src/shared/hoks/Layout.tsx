import React, { FC } from 'react';

const Layout: FC<any> = ({ children }) => {
  return (
    <div style={{ margin: '0 5px' }}>
      <header>
        <img
          src="https://rusneb.ru/local/templates/neb/assets/image/logo.svg"
          alt="logo"
        />
      </header>
      {children}
    </div>
  );
};

export default Layout;
