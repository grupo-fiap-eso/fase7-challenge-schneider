
import React from 'react'
import { LoginStyle } from '../styled'
import logo from '../images/logo.png'
import video from '../videos/video.mp4'

function Login() {
    return (
        <LoginStyle>
            <video className='videos' autoplay='true' muted='true' loop>
                <source src={video} type='video/mp4'></source>
            </video>

            <div className='login'>
                <img src={logo} alt='Logo Schneider' className='logo-scheneider' />
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
                    <button type="submit" class="btn btn-primary" className='bottom'>Entrar</button>
                    <br></br>
                    <a href="./cadastro">Criar Conta</a>
                    
                </form>
            </div>

        </LoginStyle>

    )
}
export default Login
