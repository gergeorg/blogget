import {useContext} from 'react';
import style from './List.module.css';
import {Post} from './Post/Post';
import {postsContext} from '../../../context/postsContext';

export const List = () => {
  const {posts, loading, error} = useContext(postsContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul className={style.list}>
      {posts.map(post =>
        <Post
          key={post.data.id}
          thumbnail={post.data.thumbnail}
          title={post.data.title}
          author={post.data.author}
          ups={post.data.ups}
          date={post.data.created}
        />
      )}
    </ul>
  );
};
