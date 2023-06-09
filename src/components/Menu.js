import { Link } from 'react-router-dom'
import Logo from "../images/logo2.png"

function Menu() {

  const menu = {
    background: '#3b8d18',
  }

  return (
    <nav style={menu}>
      <a class="navbar-brand logo" href="#"><img src={Logo} alt="" style={{ height: '35px' }} /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul>
        <li><Link className='link' to='/home'>Home</Link></li>
        <li><Link className='link' to='/comunidade'>Comunidade</Link></li>
        <li><Link className='link' to='/trocas_inteligentes'>Trocas Inteligentes</Link></li>
        <li><Link className='link' to='/desafios'>Desafio do Mês</Link></li>
        <li><Link className='link' to='/calendario'>Calendário  Ambiental</Link></li>
        <li><Link className='link' to='/sobre'>Sobre o Projeto</Link></li>
      </ul>
      <Link className='link-sair' to='/'>Sair</Link>
    </nav>
  )
}

export default Menu;
