import { Button, Drawer } from 'antd';
import { connect } from 'react-redux';
import { MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

import { HOME } from '../../constants/urls';
import { toggleMenu as toggleMenuCreator } from '../../state/ui';
import styles from './styles.module.scss';

const Header = ({ isMenuOpen, toggleMenu }) => {
  const handleMenuButtonClick = () => {
    toggleMenu();
  };

  const handleMenuCloseClick = () => {
    toggleMenu({
      isOpen: false,
    });
  };

  return (
    <>
      <header className={styles.header}>
        <Link href={HOME}>
          <a>Hindsight2020</a>
        </Link>
        <Button icon={<MenuOutlined />} onClick={handleMenuButtonClick} type="ghost" />
      </header>
      <Drawer onClose={handleMenuCloseClick} visible={isMenuOpen} />
    </>
  );
};

const mapState = (state) => ({
  isMenuOpen: state.ui.isMenuOpen,
});

const mapDispatch = {
  toggleMenu: toggleMenuCreator,
};

Header.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(Header);
