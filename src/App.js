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
import Footer from './components/Footer'

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/home" element={[<Menu/>, <Home/>, <Footer/>]}/>
        <Route path="/comunidade" element={[<Menu/>,<Comunidade/>, <Footer/>]}/>
        <Route path="/posts/:id" element={[<Menu/>, <PostPage/>, <Footer/>]}/>
        <Route path="/trocas_inteligentes" element={[<Menu/>, <TrocasInteligentes/>, <Footer/>]}/>
        <Route path="/desafios" element={[<Menu/>, <Desafios/>, <Footer/>]}/>
        <Route path="/calendario" element={[<Menu/>, <Calendario/>, <Footer/>]}/>
        <Route path="/sobre" element={[<Menu/>, <SobreoProjeto/>, <Footer/>]}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
