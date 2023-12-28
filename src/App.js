import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {AuthContextProvider} from './context/authContext';
import {TokenContextProvider} from './context/tokenContext';

export const App = () => (
  <TokenContextProvider >
    <AuthContextProvider>
      <Header />
      <Main />
    </AuthContextProvider>
  </TokenContextProvider>
);
