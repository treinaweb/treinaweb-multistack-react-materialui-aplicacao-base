import { Button } from '@mui/material';
import useOnlineStatus from './data/hooks/useOnlineStatus';

function App() {
  const isOnline = useOnlineStatus()


  return (
    <div>
      {isOnline ? 'Você está online' : 'Você está off-line'}
      <Button variant='contained'>Clique aqui!</Button>
    </div>
  );
}

export default App;
