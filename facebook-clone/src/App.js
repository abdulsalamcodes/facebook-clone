import './App.css';
import Header from './components/Header/Header';
import Main from './container/Main';
import { useStateValue } from './contexts/UserContext';
import Login from './pages/Login/Login';

function App() {
  const [{ user }] = useStateValue();
  const content = user ?
    <>
      <Header />
      <Main />
    </>
    : <Login />

  return (

    <div className="app">
      {content}
    </div>
  );
}

export default App;
