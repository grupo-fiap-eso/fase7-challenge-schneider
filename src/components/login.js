
import logo from './img/logo.png'
import video from './video/video.mp4'

function Login() {

    const titulo = {
        color: 'white',
        textAlign: 'center',
        fontSize: '20px'
    }
    const login = {
        weight: '70px',
        height: '300px',
        position: 'relative',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(35,196,83, 0.8)',
        justifyContent: 'right',
        paddingRight: '20px',
        paddingBottom: '7px',
        marginRight: '20px',
        marginTop: '50vh',
        display: 'flex',
        marginLeft: '100vh',
        border: 'solid 2px white',
        
        

    }
    const logo_scheneider = {
        position: 'relative',
        width: '350px',
        height: '180px',
        paddingRight: '80px',
        paddingTop: '110px'
    }

    const bottom = {
        backround: '#21c650',
        borderColor: 'white',
        borderWidth: '3px',
        paddingBottom: '3px'
    }

    const videos = {
        position: 'fixed',
        top: '0',
        left: '0',
        objectFit: 'cover',
        width: '100%',

    }


    return (
        <div>

            <video style={videos} autoplay='true' muted='true' loop>
                <source src={video} type='video/mp4'></source>
            </video>

            <div style={login}>
                <img src={logo} alt='Logo Schneider' style={logo_scheneider} />
                <form action="/home">

                    <div class="mb-3 mt-3">
                        <label for="email">Email: </label>
                        <input type="email" class="form-control" id="email" placeholder="Digite o email" name="email"></input>
                    </div>
                    <div>
                        <label for="pwd">Senha:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Digite a senha: " name="pwd"></input>
                    </div>
                    <div class="form-check mb-3">
                        <label class="form-check-label">
                            <p></p>
                            <input class="form-check-input" type="checkbox" name="remember"></input>
                            <h5>Permanecer Logado</h5>
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary" style={bottom}>Entrar</button>
                    <br></br>
                    <a href="./cadastro">Criar Conta</a>
                    
                </form>
            </div>

        </div>

    )
}
export default Login