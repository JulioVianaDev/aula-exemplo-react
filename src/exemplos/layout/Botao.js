function Botao(props) {
  return (
    <button >
      {/* para poder aparecer o texto é necessário habilitar o props.children */}
      {props.children}
    </button>
  )
}

export default Botao
