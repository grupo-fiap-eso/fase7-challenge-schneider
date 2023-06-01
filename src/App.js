import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./components/login"
import Home from "./components/home"
import Menu from "./components/menu"
import Cadastro from './components/cadastro'
import Comunidade from './components/comunidade'

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/home" element={[<Menu/>, <Home/>]}/>
        <Route path="/comunidade" element={<Comunidade/>}/>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
