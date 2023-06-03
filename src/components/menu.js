import { Link } from 'react-router-dom'
import Logo from "../components/img/logo2.png"

function Menu() {
    const menu = {
        background: 'rgba(35,196,83)',
        height: '15vh',
        display: 'flex',
    }
    const link = {
        display: 'inlineBlock',
        textDecoration: 'none',
        padding: '20px',
        color: '#fff',
        fontSize: '1.5em'
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
                <li><Link style={link} to='/'>Login</Link></li>

            </ul>
        </nav>
    )
}
export default Menu
