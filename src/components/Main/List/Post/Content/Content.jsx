import PropTypes from 'prop-types';

import style from './Content.module.css';
import {Text} from '../../../../../UI/Text/Text';

export const Content = ({title, author}) =>

  <div className={style.content}>
    <Text As='h2' className={style.title}>
      <Text
        As='a'
        className={style.linkPost}
        href='#post'
        size={18}
        tsize={24}
        bold
      >
        {title}
      </Text>
    </Text>

    <Text
      As='a'
      color='orange'
      size={12}
      tsize={14}
      className={style.linkAuthor}
      href="#author"
    >
      {author}
    </Text>
  </div>;


Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};