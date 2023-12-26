import PropTypes from 'prop-types';

import style from './Post.module.css';

import {Thumbnail} from './Thumbnail/Thumbnail';
import {Content} from './Content/Content';
import {Rating} from './Rating/Rating';
import {Date} from './Date/Date';
import {DeleteBtn} from './DeleteBtn/DeleteBtn';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;

  return (
    <li className={style.post}>
      <Thumbnail title={title}/>
      <Content title={title} author={author}/>
      <Rating ups={ups}/>
      <Date date={date}/>
      <DeleteBtn />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object
};
