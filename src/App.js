import './App.css';
import FunctionSimples from './exemplos/components/FunctionSimples';
import FunctionDupla from './exemplos/components/FunctionDupla';
import Botao from './exemplos/layout/Botao';

function App() {
  return (
    <div className="App">
      {/* chamando um componente simples */}
      <FunctionSimples/>
      {/* chamando a função dupla */}
      <FunctionDupla/>
      {/* chamando o botao 2x e enviando os children como atributos  */}
      <Botao classe="botao purple">Entrar</Botao>
      <Botao classe="botao blue">Sair</Botao>
    </div>
  );
}

export default App;
