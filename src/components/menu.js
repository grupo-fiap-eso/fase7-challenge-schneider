import { Link } from 'react-router-dom'

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
            <ul style={{ display: 'flex', listStyle: 'none' }}>
                <li><Link style={link} to='/home'>Home</Link></li>
                <li><Link style={link} to='/'>Login</Link></li>

            </ul>
        </nav>
    )
}
export default Menu