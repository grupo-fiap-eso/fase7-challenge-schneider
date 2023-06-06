import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./components/login"
import Home from "./components/home"
import Menu from "./components/menu"
import Cadastro from './components/cadastro'
import Comunidade from './components/comunidade'
import PostPage from './components/PostPage'
import Calendario from './components/calendario'

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/home" element={[<Menu/>, <Home/>]}/>
        <Route path="/comunidade" element={[<Menu/>,<Comunidade/>]}/>
        <Route path="/posts/:id" element={[<Menu/>, <PostPage/>]}/>
        <Route path="/calendario" element={[<Menu/>, <Calendario/>]}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
