import { CadastroStyle } from '../styled'
import logo from '../images/logo.png'

function Cadastro() {
    return(
    <CadastroStyle>
        <section className='geral'>
            <div class="d-flex align-items-center p-5">

                <div class="container ">
                    <div class="row ">

                        <div class="col">
                            <div class="col-body">
                                <h2>Criação de Login</h2>
                            </div>
                            <form action="./" class="was-validated">
                                <div class="mb-3 mt-3">
                                    <label for="user" class="form-label">Usuário:</label>
                                    <input type="text" class="form-control" id="user" required></input>
                                    <div class="valid-feedback">Informação Válida </div>
                                    <div class="invalid-feedback">Preencha o dado do Usuário</div>

                                </div>
                                <div class="mb-3 mt-3">
                                    <label for="password" class="form-label">Senha:</label>
                                    <input type="password" class="form-control" id="password" required></input>
                                    <div class="valid-feedback">Informação Válida </div>
                                    <div class="invalid-feedback">Informe a Senha</div>

                                </div>
                                <div class="mb-3 mt-3">
                                    <label for="pswd" class="form-label">Confirmação de Senha:</label>
                                    <input type="password" class="form-control" id="pswd" required></input>
                                    <div class="valid-feedback">Informação Válida </div>
                                    <div class="invalid-feedback">Confirme a Senha</div>

                                </div>
                                <div class="form-check mb-3">
                                    <input type="checkbox" class="form-check-input" id="check" required></input>
                                    <label for="check" class="form-check-label">Eu concordo com os termos de aceite</label>
                                    <div class="valid-feedback">
                                        Informação Válida
                                    </div>
                                    <div class="invalid-feedback">
                                        Clique em concordar para seguir

                                    </div>

                                </div>
                                <img src={logo} className='logo-scheneider'></img>
                                <button type="submit" class="btn btn-primary" >Entrar</button>
                                <br></br>
                                <br></br>
                                <button class="btn btn-primary" type="reset">Limpar formulário</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </CadastroStyle>
    )
}

export default Cadastro
