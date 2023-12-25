import style from './List.module.css';
import {Post} from './Post/Post';

export const List = () => {
  const postsData = [
    {
      id: 123,
      thumbnail: '',
      title: 'Title111',
      author: 'Nickname1',
      ups: 55,
      date: '2023-12-25T20:04:00.000Z'
    },
    {
      id: 456,
      thumbnail: '',
      title: 'Title222',
      author: 'Nickname2',
      ups: 66,
      date: '2023-12-25T20:04:00.000Z'
    },
    {
      id: 789,
      thumbnail: '',
      title: 'Title333',
      author: 'Nickname3',
      ups: 77,
      date: '2023-12-25T20:04:00.000Z'
    },
    {
      id: 1011,
      thumbnail: '',
      title: 'Title444',
      author: 'Nickname4',
      ups: 88,
      date: '2023-12-25T20:04:00.000Z'
    },
    {
      id: 1213,
      thumbnail: '',
      title: 'Title555',
      author: 'Nickname5',
      ups: 99,
      date: '2023-12-25T20:04:00.000Z'
    }
  ];

  return (
    <ul className={style.list}>
      {postsData.map(postData =>
        <Post key={postData.id} postData={postData} />
      )}

    </ul>
  );
};
