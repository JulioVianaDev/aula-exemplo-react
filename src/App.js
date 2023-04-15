import logo from './logo.svg';
import './App.css';
import FunctionSimples from './exemplos/components/FunctionSimples';
import FunctionDupla from './exemplos/components/FunctionDupla';

function App() {
  return (
    <div className="App">
      {/* chamando um componente simples */}
      <FunctionSimples/>
      {/* chamando a função dupla */}
      <FunctionDupla/>
    </div>
  );
}

export default App;
