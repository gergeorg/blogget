import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {AuthContextProvider} from './context/authContext';
import {PostsContextProvider} from './context/postsContext';
import {TokenContextProvider} from './context/tokenContext';

export const App = () => (
  <TokenContextProvider >
    <AuthContextProvider>
      <Header />
      <PostsContextProvider>
        <Main />
      </PostsContextProvider>
    </AuthContextProvider>
  </TokenContextProvider>
);
