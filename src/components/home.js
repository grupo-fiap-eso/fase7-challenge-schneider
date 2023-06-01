function Home() {
    return (
        <div>       
        <div class="container-fluid">
            <a class="navbar-brand logo" href="#"><img src="./imagens/logo2.png" alt="" style={{ height: '35px' }} /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Sobre nós</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Comunidade</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Desafios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="d-block icone text-decoration-none dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd"
                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Meu Perfil</a></li>
                            <hr class="dropdown-divider">
                            </hr>

                            <li><a class="dropdown-item" href="#"><img src="../src/assets/img/br-flag.png" alt="br"
                                style={{ width: '20px', height: '20px' }} />
                                <font style={{ padding: '4px' }}>Português</font>
                            </a></li>
                            <li><a class="dropdown-item" href="#"><img src="../src/assets/img/esp-flag.png" alt="usa"
                                style={{ width: '20px', height: '20px' }} />
                                <font style={{ padding: '4px' }}>Espanhol</font>
                            </a></li>
                            <li><a class="dropdown-item" href="#"><img src="../src/assets/img/usa-flag.png" alt="usa"
                                style={{ width: '20px', height: '20px' }} />
                                <font style={{ padding: '4px' }}>Inglês</font>
                            </a></li>

                        </ul>
                    </li>
                </ul>
                <div class="busca d-flex">

                    <input type="search" placeholder="Pesquisar..." aria-label="Search"></input>
                    <i class="fa-sharp fa-solid fa-magnifying-glass"></i>

                </div>
            </div>
        </div>

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

        <div class="row terceira-secao">
            <h2>Últimas atualizações</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, illo. Similique quas corrupti magnam quod,
                ea in! Laudantium, nemo nihil.</p>
            <div class=" col botoes">
                <button class="btn-block rounded p-2" type="button">Economia</button>
                <button class="btn-block rounded p-2" type="button">Ambiente</button>
                <button class="btn-block rounded p-2" type="button">Sustentabilidade</button>
                <button class="btn-block rounded p-2" type="button">Sociedade</button>
                <button class="btn-block rounded p-2" type="button">Economia</button>
                <button class="btn-block rounded p-2" type="button">Meio Ambiente</button>
            </div>
        </div>

        <div class="row">
            <div class="card green">
                <img class="image" src="./imagens/img-tecnologia-na-sustentabilidade.jpg" alt="money" />
                <h2>Meio Ambiente</h2>
                <p class="lead mb-0"><a href="#" class="link1">
                    <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>Continue lendo...</font>
                    </font>
                </a></p>
            </div>

            <div class="card green">
                <img class="image" src="./imagens/img-tecnologia-na-sustentabilidade.jpg" alt="money" />
                <h2>Meio Ambiente</h2>
                <p class="lead mb-0"><a href="#" class="link1">
                    <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>Continue lendo...</font>
                    </font>
                </a></p>
            </div>

            <div class="card green">
                <img class="image" src="./imagens/esg.jpg" alt="money" />
                <h2>Meio Ambiente</h2>
                <p class="lead mb-0"><a href="#" class="link1">
                    <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>Continue lendo...</font>
                    </font>
                </a></p>
            </div>

            <div class="card green">
                <img class="image" src="./imagens/img-tecnologia-na-sustentabilidade.jpg" alt="money" />
                <h2>Meio Ambiente</h2>
                <p class="lead mb-0"><a href="#" class="link1">
                    <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>Continue lendo...</font>
                    </font>
                </a></p>
            </div>

            <div class="card green">
                <img class="image" src="./imagens/img-tecnologia-na-sustentabilidade.jpg" alt="money" />
                <h2>Meio Ambiente</h2>
                <p class="lead mb-0"><a href="#" class="link1">
                    <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>Continue lendo...</font>
                    </font>
                </a></p>
            </div>

            <div class="card green">
                <img class="image" src="./imagens/img-tecnologia-na-sustentabilidade.jpg" alt="money" />
                <h2>Meio Ambiente</h2>
                <p class="lead mb-0"><a href="#" class="link1">
                    <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>Continue lendo...</font>
                    </font>
                </a></p>
            </div>

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
                            <rect width="100%" height="100%" fill="#e83e8c"></rect>
                        </svg>
                        <p class="pb-3 mb-0 small lh-sm border-bottom">
                            <strong class="d-block text-gray-dark">
                                @nome de usuário
                            </strong>

                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>
                                    Algum conteúdo de espaço reservado representativo, com algumas informações sobre este usuário.
                                    Imagine que isso seja algum tipo de atualização de status, talvez?
                                </font>
                            </font>
                        </p>
                    </div>

                    <div class="d-flex text-body-secondary pt-3">
                        <svg class="bd-placeholder-img me-2  rounded" width="32" height="32">
                            <rect width="100%" height="100%" fill="#e83e8c"></rect>
                        </svg>
                        <p class="pb-3 mb-0 small lh-sm border-bottom">
                            <strong class="d-block text-gray-dark">@nome de usuário
                            </strong>
                            Algum conteúdo de espaço reservado mais representativo, relacionado a esse outro usuário.
                            Outra atualização de status, talvez.
                        </p>
                    </div>
                    <div class="d-flex text-body-secondary pt-3">
                        <svg class="bd-placeholder-img me-2  rounded" width="32" height="32">
                            <rect width="100%" height="100%" fill="#e83e8c"></rect>
                        </svg>
                        <p class="pb-3 mb-0 small lh-sm border-bottom">
                            <strong class="d-block text-gray-dark">@nome de usuário
                            </strong>
                            Esse usuário também obtém algum conteúdo de espaço reservado representativo.
                            destacar isso nas atualizações recentes.
                            Talvez eles tenham feito algo interessante e você realmente queira
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
                    <img src="./imagens/logo2.png" alt="logo" class="logo-footer" />
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
  