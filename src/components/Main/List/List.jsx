import style from './List.module.css';
import {Post} from './Post/Post';

export const List = () => {
  const postData = {
    thumbnail: '',
    title: 'Title',
    author: 'Nickname',
    ups: 50,
    date: '2023-12-25T20:04:00.000Z'
  };

  return (
    <ul className={style.list}>
      <Post postData={postData} />
    </ul>
  );
};
