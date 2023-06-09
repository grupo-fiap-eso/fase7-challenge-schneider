import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./components/Login"
import Home from "./components/Home"
import Menu from "./components/Menu"
import Cadastro from './components/Cadastro'
import Comunidade from './components/Comunidade'
import PostPage from './components/PostPage'
import Calendario from './components/Calendario'
import TrocasInteligentes from './components/TrocasInteligentes'
import Desafios from './components/DesafiosMes'
import SobreoProjeto from './components/SobreoProjeto'

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/home" element={[<Menu/>, <Home/>]}/>
        <Route path="/comunidade" element={[<Menu/>,<Comunidade/>]}/>
        <Route path="/posts/:id" element={[<Menu/>, <PostPage/>]}/>
        <Route path="/trocas_inteligentes" element={[<Menu/>, <TrocasInteligentes/>]}/>
        <Route path="/desafios" element={[<Menu/>, <Desafios/>]}/>
        <Route path="/calendario" element={[<Menu/>, <Calendario/>]}/>    
        <Route path="/sobre" element={[<Menu/>, <SobreoProjeto/>]}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
