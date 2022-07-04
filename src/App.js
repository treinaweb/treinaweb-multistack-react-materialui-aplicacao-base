
import './App.css';
import Contador from './components/MeuComponente/MeuComponente'

function App() {
  const nome = 'Ariel'
  const idade = 29
  return (
    <div>
      Olá
      <Contador nome={nome} idade={idade}>

        meu nome é ariel

      </Contador>
    </div>
  );
}

export default App;
