

import Contador from './components/MeuComponente/MeuComponente'
import { ThemeProvider } from '@mui/material'
import theme from './UI/theme/theme';

function App() {



  return (
    <div>
      <ThemeProvider theme={theme}>
        <Contador />

      </ThemeProvider>
    </div>
  );
}

export default App;
