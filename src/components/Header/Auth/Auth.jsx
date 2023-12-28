import PropTypes from 'prop-types';

import style from './Auth.module.css';

import {ReactComponent as AuthIcon} from './img/auth.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text/Text';
import {useState, useContext} from 'react';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';

export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const [isLogout, setIsLogout] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

  const handleAvatarClick = () => {
    setIsLogout(!isLogout);
  };

  const logOut = () => {
    delToken();
    clearAuth();
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button className={style.btn} onClick={handleAvatarClick}>
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={`Аватар ${auth.name}`}/>
          </button>

          {isLogout &&
            <button className={style.logout} onClick={logOut}>Выйти</button>
          }
        </>
      ) : (
        <Text
          As='a'
          className={style.authLink}
          href={urlAuth}
        >
          <AuthIcon className={style.svg}/>
        </Text>

        )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
