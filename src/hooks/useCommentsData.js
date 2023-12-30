import {useContext, useEffect, useState} from 'react';
import {tokenContext} from '../context/tokenContext';
import {URL_API} from '../api/const';

export const useCommentsData = (id) => {
  const {token} = useContext(tokenContext);
  const [commentsData, setCommentsData] = useState([]);
  const [postData, setPostData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(
        ([
          {
            data: {
              children: [{data: post}],
            },
          },
          {
            data: {
              children,
            },
          },
        ]) => {
          const comments = children.map(item => item.data);
          setCommentsData([comments]);
          setPostData([post]);
          setLoading(false);
        },
      )
      .catch((err) => {
        console.error(err);
        setError(error.message);
        setLoading(false);
      });
  }, [token]);

  return [postData, commentsData, loading, error];
};
