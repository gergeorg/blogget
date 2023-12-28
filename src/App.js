import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {useToken} from './hooks/useToken';

export const App = () => {
  const [token, delToken] = useToken('');

  return (
    <>
      <Header token={token} delToken={delToken} />
      <Main />
    </>
  );
};
