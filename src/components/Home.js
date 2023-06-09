import PostsResumo from "./posts/PostsResumo";
import ImgCalendario from "../images/imgHome.jpg"
import SemanaMB from "../images/semanaMB.png"
import Logo from "../images/logo2.png"

const links = {
    textDecoration: 'none',
    color: '#fff'
}

function Home() {
    return (
        <div>
        <div class="mt-4 p-md-5 rounded primeira-secao">
            <div class="col-md-6 p-5">
                <h1 class="display-4 fst-italic">
                    <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>Vídeo Pitch</font>
                    </font>
                </h1>
                <p class="lead my-3">
                    <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                            eveniet velit, delectus fuga molestiae provident eius inventore explicabo? Ex, ullam.</font>
                    </font>
                </p>
                <p class="lead mb-0"><a href="#" class="link1">
                    <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>Assista ao vídeo!</font>
                    </font>
                </a></p>
            </div>
        </div>

        <div class="row mb-2 segunda-secao">
            <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>Destaque do mês</font>
                            </font>
                        </strong>
                        <h3 class="mb-0">
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>Dia Mundial dos Oceanos</font>
                            </font>
                        </h3>
                        <div class="mb-1 text-body-secondary">
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>8 de Junho</font>
                            </font>
                        </div>
                        <p class="card-text mb-auto">
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>"Essa é uma data que incentiva a socieadade a refletir sobre a importância da conservação das águas marinhas do planeta."
                                    Saiba como você pode ajudar a salvar a vida no oceano.</font>
                            </font>
                        </p>
                        <a href="https://www.infraestruturameioambiente.sp.gov.br/educacaoambiental/2022/06/8-de-junho-dia-mundial-dos-oceanos/" class="stretched-link">
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>Clique aqui</font>
                            </font>
                        </a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                            <img class="bd-placeholder-img" width="350" height="300" role="img"
                                focusable="false" src={ImgCalendario}>
                            </img>
                        </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-success">
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>Destaque do semestre</font>
                            </font>
                        </strong>
                        <h3 class="mb-0">
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>Semana Nacional do Meio Ambiente</font>
                            </font>
                        </h3>
                        <div class="mb-1 text-body-secondary">
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>31 de Maio - 04 de Junho</font>
                            </font>
                        </div>
                        <p class="mb-auto">
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>Já pensou em fazer parte da restauração florestal no Brasil? 
                                    Saiba mais sobre, como colaborar com uma das soluções mais eficientes para minimizar as mudanças climáticas.</font>
                            </font>
                        </p>
                        <a href="https://www.tnc.org.br/o-que-fazemos/nossas-iniciativas/restaura-brasil/?gclid=CjwKCAjwyeujBhA5EiwA5WD7_R7H3B82LBuKTomO102fydLNnOVAmbOavxrRmNUAm4jZu3LpShiMMBoCWrEQAvD_BwE" class="stretched-link">
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>Saiba Mais</font>
                            </font>
                        </a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                            <img class="bd-placeholder-img" width="300" height="300" role="img" 
                            focusable="false" src={SemanaMB}>
                               
                            </img>
                        </div>
                </div>
            </div>
        </div>

        <PostsResumo />

        <div class="row">
            
            <div class="comunidade">

                <div class="text-center titulo-comunidade">
                    <div class="">
                        <h2><strong>Veja as melhores interações </strong> <br></br> da Comunidade</h2>
                    </div>
                </div>

                <div class="comentarios my-3  rounded shadow-sm"> <h6 class="border-bottom pb-2 mb-0"> Melhores comentários</h6>
                <div class="d-flex text-body-secondary pt-3">
                        <svg class="bd-placeholder-img me-2  rounded" width="32" height="32">
                            <rect width="100%" height="100%" fill="#0000ff"></rect>
                        </svg>
                        <p class="pb-3 mb-0 small lh-sm border-bottom">
                            <strong class="d-block text-gray-dark">@guilherme.quirino
                            </strong>
                            Pequenas mudanças no nosso dia a dia podem fazer uma grande diferença ambiental. 💚🌱 #Sustentabilidade #MudançaPositiva
                        </p>
                    </div>
                    
                    <div class="d-flex text-body-secondary pt-3">
                        <svg class="bd-placeholder-img me-2  rounded" width="32" height="32">
                            <rect width="100%" height="100%" fill="#e83e8c"></rect>
                        </svg>
                        <p class="pb-3 mb-0 small lh-sm border-bottom">
                            <strong class="d-block text-gray-dark">@ayla.carolina
                            </strong>
                            Recicle, reutilize, repense. Cuidar do meio ambiente é uma responsabilidade de todos nós! 🌎♻️ #Sustentabilidade #Preservação
                        </p>
                    </div>
                    
                    <div class="d-flex text-body-secondary pt-3">
                        <svg class="bd-placeholder-img me-2  rounded" width="32" height="32">
                            <rect width="100%" height="100%" fill="#0000ff"></rect>
                        </svg>
                        <p class="pb-3 mb-0 small lh-sm border-bottom">
                            <strong class="d-block text-gray-dark">@gabriel.clemente
                            </strong>
                            Economize energia, plante árvores, seja parte da solução. Juntos, podemos construir um mundo sustentável. 🌿💡 #Sustentabilidade #FuturoVerde
                        </p>
                    </div>
                    
                    <div class="d-flex text-body-secondary pt-3">
                        <svg class="bd-placeholder-img me-2  rounded" width="32" height="32">
                            <rect width="100%" height="100%" fill="#0000ff"></rect>
                        </svg>
                        <p class="pb-3 mb-0 small lh-sm border-bottom">
                            <strong class="d-block text-gray-dark">@thiago.motta
                            </strong>
                            A sustentabilidade não é uma opção, é uma necessidade. Vamos proteger o nosso lar! 🌍💚 #Sustentabilidade #PlanetaSaudável"
                        </p>
                    </div>
                    <small class="d-block text-end mt-3">
                        <a href="/Comunidade">
                            Entre na Comunidade
                        </a>
                    </small>
                </div>
            </div>
        </div>

        <footer>
            <div class="row">
                <div class="col">
                    <img src={Logo} alt="logo" class="logo-footer" />
                    <div class="icons-footer">
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-whatsapp"></i>
                        <i class="fa-solid fa-envelope"></i>

                    </div>

                </div>
                <div class="col">
                <h4><a href="/home" style={links}>Home</a></h4>
                        <ul>
                            <li><a href="/comunidade">Comunidade</a></li>
                            <li><a href="/calendario">Calendário Ambiental</a></li>
                        </ul>

                    </div>
                    <div class="col">
                        <h4><a>Cadastro</a></h4>
                        <ul>
                            <li><a href="/">Sair</a></li>
                            <li><a href="/cadastro">Cadastrar</a></li>
                        </ul>

                    </div>

            </div>
        </footer>
    
</div>
    )
  }
  
  export default Home;
  
