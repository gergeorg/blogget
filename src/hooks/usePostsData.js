import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {useSelector} from 'react-redux';

export const usePostsData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = useSelector(state => state.token);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(`${URL_API}/best`, {
          headers: {
            Authorization: `bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }

        const data = await response.json();
        setPosts(data.data.children);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error.message);
        setLoading(false);
      }
    };

    !token ? setError(error) : getPosts();
  }, [token]);

  return [posts, loading, error];
};
