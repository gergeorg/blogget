import PropTypes from 'prop-types';

import style from './Post.module.css';

import {Thumbnail} from './Thumbnail/Thumbnail';
import {Content} from './Content/Content';
import {Rating} from './Rating/Rating';
import {Date} from './Date/Date';
import {DeleteBtn} from './DeleteBtn/DeleteBtn';

export const Post = (postData) => {
  const {thumbnail, title, author, ups, date} = postData;

  return (
    <li className={style.post}>
      <Thumbnail thumbnail={thumbnail} title={title}/>
      <Content title={title} author={author} />
      <Rating ups={ups}/>
      <Date date={date}/>
      <DeleteBtn />
    </li>
  );
};

Post.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  ups: PropTypes.number,
  date: PropTypes.number
};
