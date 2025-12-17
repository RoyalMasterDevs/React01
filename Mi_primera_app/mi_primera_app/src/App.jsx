import './App.css'
import Header from "./components/Header"
import Card from './components/Card'
import Prueba from './components/Prueba'

function App() {


  return (
    <>
      <Header />
      <Prueba />
      <Card title="ESto es un titulo" description="Descripcion desde componente" />
      <Card title="esto es otro titulo" description="Descripcion desde componente" />
      <Card title="Mas titulos" description="Descripcion desde componente" />
      <Card title="Uno mas para terminar" description="Descripcion desde componente" />


      <h1>Hola Mundo</h1>


    </>
  )
}

export default App
