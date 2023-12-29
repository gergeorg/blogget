import PropTypes from 'prop-types';

import style from './Thumbnail.module.css';

import notphoto from './img/notphoto.jpg';
import {useState} from 'react';

export const Thumbnail = ({thumbnail, title}) => {
  const [error, setError] = useState(false);

  const handleImageError = () => {
    setError(true);
  };

  return (
    <img
      className={style.img}
      src={error ? notphoto : thumbnail}
      alt={title}
      onError={handleImageError}
    />
  );
};

Thumbnail.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
};
