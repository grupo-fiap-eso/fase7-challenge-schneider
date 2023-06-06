import PostsResumo from "./posts/PostsResumo";
import Logo from "../images/logo2.png"

function Home() {
    return (
        <div>
        <div class=" p-md-5 mb-4 rounded primeira-secao">
            <div class="col-md-6 px-5">
                <h1 class="display-4 fst-italic">
                    <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>Título</font>
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
                        <font style={{ verticalAlign: 'inherit' }}>Continue lendo...</font>
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
                                <font style={{ verticalAlign: 'inherit' }}>Economia</font>
                            </font>
                        </strong>
                        <h3 class="mb-0">
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>Postagem em destaque</font>
                            </font>
                        </h3>
                        <div class="mb-1 text-body-secondary">
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>25 de Maio</font>
                            </font>
                        </div>
                        <p class="card-text mb-auto">
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>Este é um cartão mais amplo com texto de apoio abaixo como uma
                                    entrada natural para conteúdo adicional.</font>
                            </font>
                        </p>
                        <a href="#" class="stretched-link">
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>Continue lendo</font>
                            </font>
                        </a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"
                            aria-label="Espaço reservado: Miniatura" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
                                dy=".3em">Thumbnail</text>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-success">
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>Projeto</font>
                            </font>
                        </strong>
                        <h3 class="mb-0">
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>Título da postagem</font>
                            </font>
                        </h3>
                        <div class="mb-1 text-body-secondary">
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>11 de novembro</font>
                            </font>
                        </div>
                        <p class="mb-auto">
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>Este é um cartão mais amplo com texto de apoio abaixo como uma
                                    entrada natural para conteúdo adicional.</font>
                            </font>
                        </p>
                        <a href="#" class="stretched-link">
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>continue lendo</font>
                            </font>
                        </a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"
                            aria-label="Espaço reservado: Miniatura" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
                                dy=".3em">Thumbnail</text>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <PostsResumo />

        <div class="row">
            <hr></hr>
            <div class=" p-md-5 home-sobre-nos">
                <div class="col-md-6 px-5">
                    <h1 class="display-4 fst-italic">
                        <font style={{ verticalAlign: 'inherit' }}>
                            <font style={{ verticalAlign: 'inherit' }}>Sobre o projeto</font>
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
                            <font style={{ verticalAlign: 'inherit' }}>Continue lendo...</font>
                        </font>
                    </a></p>
                </div>
            </div>



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
                    <h4>Home</h4>
                    <ul>
                        <li><a href="">Forum</a></li>
                        <li><a href="">Comunidade</a></li>
                    </ul>

                </div>
                <div class="col">
                    <h4>Home</h4>
                    <ul>
                        <li><a href="">Forum</a></li>
                        <li><a href="">Comunidade</a></li>
                    </ul>

                </div>

            </div>
        </footer>
    
</div>
    )
  }
  
  export default Home;
  