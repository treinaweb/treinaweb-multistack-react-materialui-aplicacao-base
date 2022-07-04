
import './App.css';
import ListaCursos from './components/ListaCursos/ListaCursos';
import useOnlineStatus from './data/hooks/useOnlineStatus';

function App() {
  const isOnline = useOnlineStatus()


  return (
    <div>
      {isOnline ? 'Você está online' : 'Você está off-line'}
    </div>
  );
}

export default App;
