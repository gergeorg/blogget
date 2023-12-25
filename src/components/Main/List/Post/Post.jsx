import PropTypes from 'prop-types';

import {formatDate} from '../../../../utils/formatDate';

import style from './Post.module.css';

import notphoto from './img/notphoto.jpg';

import {Rating} from './Rating/Rating';
import {DeleteBtn} from './DeleteBtn/DeleteBtn';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;

  return (
    <li className={style.post}>
      <img className={style.img} src={notphoto} alt={title} />

      <div className={style.content}>
        <h2 className={style.title}>
          <a className={style.linkPost} href='#post'>{title}</a>
        </h2>

        <a className={style.linkAuthor} href="#author">{author}</a>
      </div>

      <Rating ups={ups}/>

      <time className={style.date} dateTime={date}>{formatDate(date)}</time>

      <DeleteBtn />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object
};
