import './App.css';
import FunctionSimples from './exemplos/components/FunctionSimples';
import FunctionDupla from './exemplos/components/FunctionDupla';
import Botao from './exemplos/layout/Botao';
import { useState } from 'react';
function App() {
  // o useState tem como parametro 3 coisas
  // a primeira é uma variavel aonde será armazenada o estado
  // o segundo é a função que vai mudar o valor da variavel
  // e dentro do useState você pode por o valor inicial, seja booleano,string,objeto,array,lista,etc
  // lembre-se, só se pode mudar o valor da variavel pela função
  const [variavel,functionParaMudarValorDaVariavel]=useState("valor inicial")
  
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
