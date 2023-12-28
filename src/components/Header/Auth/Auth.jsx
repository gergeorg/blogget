import PropTypes from 'prop-types';

import style from './Auth.module.css';

import {ReactComponent as AuthIcon} from './img/auth.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text/Text';
import {useEffect, useState} from 'react';
import {URL_API} from '../../../api/const';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [isLogout, setIsLogout] = useState(false);

  const handleAvatarClick = () => {
    setIsLogout(!isLogout);
  };

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
      .then(response => {
        if (response.status === 401) {
          delToken();
          throw new Error('Unauthorized');
        }
        return response.json();
      })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch((error) => {
        console.error(error);
        setAuth({});
      });
  }, [token]);

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
            <button className={style.logout} onClick={delToken}>Выйти</button>
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
