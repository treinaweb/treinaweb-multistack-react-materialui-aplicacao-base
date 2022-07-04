import { Button } from '@mui/material';
import useOnlineStatus from './data/hooks/useOnlineStatus';

import { ThemeProvider } from '@mui/material'
import theme from './UI/theme/theme';

function App() {
  const isOnline = useOnlineStatus()


  return (
    <div>
      <ThemeProvider theme={theme}>
        {isOnline ? 'Você está online' : 'Você está off-line'}
        <Button variant='contained'>Clique aqui!</Button>

      </ThemeProvider>
    </div>
  );
}

export default App;
