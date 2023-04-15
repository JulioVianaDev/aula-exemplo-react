import "./Botao.css"
function Botao(props) {
  return (
    <button className={props.classe}>
      {/* para poder aparecer o texto é necessário habilitar o props.children */}
      {props.children}
    </button>
  )
}

export default Botao
