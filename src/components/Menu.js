import { Link } from 'react-router-dom'
import Logo from "../images/logo2.png"

function Menu() {
    
    const menu = {
        background: '#3b8d18',
        height: '10vh',
        display: 'flex',
        margin: '10px',
        borderRadius: '10px'
    }
    const link = {
        display: 'flex',
        textDecoration: 'none',
        padding: '18px',
        color: '#fff',
        fontSize: '1.3em'
    }
    return (
        <nav style={menu}>
            <a class="navbar-brand logo" href="#"><img src={Logo} alt="" style={{ height: '35px' }} /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <ul style={{ display: 'flex', listStyle: 'none' }}>
                <li><Link style={link} to='/home'>Home</Link></li>
                <li><Link style={link} to='/comunidade'>Comunidade</Link></li>
                <li><Link style={link} to='/trocas_inteligentes'>Trocas Inteligentes</Link></li>
                <li><Link style={link} to='/desafios'>Desafio do Mês</Link></li>
                <li><Link style={link} to='/calendario'>Calendário  Ambiental</Link></li>
                <li><Link style={link} to='/sobre'>Sobre o Projeto</Link></li>
                <li><Link style={link} to='/'>Sair</Link></li>
            </ul>
        </nav>
    )
}
export default Menu
