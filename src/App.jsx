import HelloWorld from "./components/HelloWorld"          // importando o component HelloWorld
import Aluno from "./components/Aluno"
import Dados from "./components/Dados"
import Contador from "./components/Contador"

function App() {


  return (
    <>
    {/* chamando o componente HelloWorld */}
    <HelloWorld/>
    {/* chamando o componente Aluno */}
    <Aluno nome="Cidade" email="cidade@email.com"/>
    {/* chamandp o componente Dados */}
    <Dados nivel='Admin' nome='Huguinho' senha='123456'/>
    {/* chamando o componente Contador */}
    <Contador/>
    </>
  )
}

export default App
