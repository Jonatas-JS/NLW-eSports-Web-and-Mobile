// JSX: JavaScript + XML (HTML)
interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <div>
      <Button title="Enviar"/>
      <Button title="Excluir"/>
      <Button title="Cancelar"/>
    </div>
  )
}

export default App
