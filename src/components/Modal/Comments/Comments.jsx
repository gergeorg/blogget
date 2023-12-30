import PropTypes from 'prop-types';

import {Text} from '../../../UI/Text/Text';
import {Date} from '../../Main/List/Post/Date/Date';

import style from './Comments.module.css';

export const Comments = ({comments}) => (
  <ul className={style.list}>
    {comments[0].map(comment => (
      <li className={style.item} key={comment.id}>
        <Text As='h3' className={style.author} size={18} tsize={22}>
          {comment.author}
        </Text>
        <Text As='p' className={style.comment} size={14} tsize={18}>
          {comment.body}
        </Text>
        <Date date={comment.created} />
      </li>
    )
    )}
  </ul>
);

Comments.propTypes = {
  comments: PropTypes.array,
};


