import Logo from "../images/logo.png"

const links = {
  textDecoration: 'none',
  color: '#fff'
}

function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <img src={Logo} alt="logo" className="logo-footer" />
          <div className="icons-footer">
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-solid fa-envelope"></i>
          </div>
        </div>
        <div className="col">
          <h4><a href="/home" style={links}>Home</a></h4>
          <ul>
            <li><a href="/comunidade">Comunidade</a></li>
            <li><a href="/trocas_inteligentes">Trocas Inteligentes</a></li>
            <li><a href="/desafios">Desafio do Mês</a></li>
            <li><a href="/calendario">Calendario Ambiental</a></li>
            <li><a href="/jogos">Jogos</a></li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li><h4><a href="/sobre">Sobre o Projeto</a></h4></li>
            <li><a href="/sair">Sair</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
