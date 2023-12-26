import PropTypes from 'prop-types';

import style from './Heading.module.css';
import {Text} from '../../../UI/Text/Text';

export const Heading = ({text}) =>
  <Text
    As={'h1'}
    size={22}
    tsize={26}
    center
    className={style.heading}
  >
    {text}
  </Text>;

Heading.propTypes = {
  text: PropTypes.string,
};
