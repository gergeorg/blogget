import PropTypes from 'prop-types';

import style from './Auth.module.css';

import {ReactComponent as AuthIcon} from './img/auth.svg';

export const Auth = ({auth}) => (
  <button className={style.button} aria-label='Авторизация'>
    {auth ? auth : <AuthIcon className={style.svg}/>}
  </button>
);

Auth.propTypes = {
  auth: PropTypes.bool,
};
