import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {AuthContextProvider} from './context/authContext';
import {PostsContextProvider} from './context/postsContext';
import {Provider} from 'react-redux';
import {store} from './store';

export const App = () => (
  <Provider store={store}>
    <AuthContextProvider>
      <Header />
      <PostsContextProvider>
        <Main />
      </PostsContextProvider>
    </AuthContextProvider>
  </Provider>

);
