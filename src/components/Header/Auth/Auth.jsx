import PropTypes from 'prop-types';
import {useState, useContext} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import style from './Auth.module.css';

import {ReactComponent as AuthIcon} from './img/auth.svg';

import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text/Text';
import {authContext} from '../../../context/authContext';
import {deleteToken} from '../../../store';

export const Auth = () => {
  const [isLogout, setIsLogout] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

  const dispatch = useDispatch();
  const token = useSelector(state => state.token);

  const handleAvatarClick = () => {
    setIsLogout(!isLogout);
  };

  const logOut = () => {
    dispatch(deleteToken(token));
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
