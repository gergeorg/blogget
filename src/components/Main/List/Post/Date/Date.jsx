import PropTypes from 'prop-types';

import {formatDate} from '../../../../../utils/formatDate';

import style from './Date.module.css';

export const Date = ({date}) => <time className={style.date} dateTime={date}>
  {formatDate(date)}
</time>;


Date.propTypes = {
  date: PropTypes.number,
};
