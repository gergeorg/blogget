import PropTypes from 'prop-types';

import style from './Header.module.css';

import {Layout} from '../Layout/Layout';
import {Auth} from './Auth/Auth';
import {Heading} from './Heading/Heading';
import {Logo} from './Logo/Logo';
import {Search} from './Search/Search';

export const Header = ({token, delToken}) => <header className={style.header}>
  <Layout>
    <div className={style.gridContainer}>
      <Logo />
      <Heading text='Главная'/>
      <Search />
      <Auth token={token} delToken={delToken}/>
    </div>
  </Layout>
</header>;

Header.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
