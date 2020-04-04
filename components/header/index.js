import { Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React, { useState } from 'react';

import styles from './styles.module.scss';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleMenuClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavCloseClick = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <a>Hindsight2020</a>
        </Link>
        <Button icon={<MenuOutlined />} onClick={handleMenuClick} type="ghost" />
      </header>
      <Drawer onClose={handleNavCloseClick} visible={isNavOpen} />
    </>
  );
};

export default Header;
