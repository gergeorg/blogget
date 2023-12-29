import React from 'react';
import PropTypes from 'prop-types';
import {usePostsData} from '../hooks/usePostsData';

export const postsContext = React.createContext({});

export const PostsContextProvider = ({children}) => {
  const [posts, loading, error] = usePostsData();

  return (
    <postsContext.Provider value={{posts, loading, error}}>
      {children}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};
