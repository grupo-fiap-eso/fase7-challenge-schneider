import { useState } from 'react'
import {DivEtiquetas} from '../assets/css/style'
function Comunidade() { 
    
    const [cliente, setCliente] = useState({
        nome:'',email:'',comentario:''
    })

    function cadCliente(e){
        setCliente({...cliente,[e.target.name]:e.target.value})
    }

    const [listaCliente, setListaCliente] = useState([])

    function inserirCliente(e){
        e.preventDefault()
        setListaCliente([...listaCliente, cliente])
    }

    return (
        <div>      
        <div class="text-center row terceira-secao">
            <h2> Confira nossas últimas atualizações</h2>
            <p>Bem-vindo à nossa comunidade sustentável! Aqui, compartilhamos informações, ideias e inspiração para promover um estilo de vida ecologicamente consciente. Junte-se a nós para construir um futuro mais sustentável juntos! 🌍♻️</p>
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
                <h2>Trocas inteligentes</h2>
                <p class="lead mb-0"><a href="#" class="link1">
                    <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>Maximizando o Valor dos Negócios com Responsabilidade Ambiental. Utilize tecnologias avançadas e práticas inovadoras para promover trocas comerciais sustentáveis, impulsionando o crescimento econômico e a preservação do meio ambiente. Descubra como as trocas inteligentes estão impulsionando um futuro mais sustentável para todos.</font>
                    </font>
                </a></p>
            </div>

            <div class="card green">
                <img class="image" src="./imagens/smartgrid.jpeg" alt="money" />
                <h2>Smart Grid</h2>
                <p class="lead mb-0"><a href="#" class="link1">
                    <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>A revolução da energia inteligente para um futuro sustentável. Integração de fontes renováveis, monitoramento em tempo real e eficiência energética para uma rede elétrica avançada e conectada. Descubra como a Smart Grid está transformando o setor energético e promovendo uma sociedade mais sustentável.</font>
                    </font>
                </a></p>
            </div>

            <div class="card green">
                <img class="image" src="./imagens/esg.jpg" alt="money" />
                <h2>Edge Control</h2>
                <p class="lead mb-0"><a href="#" class="link1">
                    <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>Potencializando a Eficiência Energética e a Preservação Ambiental. Utilize tecnologias avançadas de edge computing para otimizar o processamento de dados em tempo real, reduzindo o consumo energético e contribuindo para um futuro mais sustentável. Descubra como o Edge Control está impulsionando a transformação digital responsável.</font>
                    </font>
                </a></p>
            </div>

            <div class="comunidade">
                <div class="comentarios my-3  rounded shadow-sm"> <h6 class="text-center border-bottom pb-4 mb-0"> Melhores comentários</h6>
                    <div class="d-flex text-body-secondary pt-3">
                        <svg class="bd-placeholder-img me-2  rounded" width="32" height="32">
                            <rect width="100%" height="100%" fill="#e83e8c"></rect>
                        </svg>
                        <p class="pb-3 mb-0 small lh-sm border-bottom">
                            <strong class="d-block text-gray-dark">
                                @mariana.nunes
                            </strong>

                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>
                                O futuro do planeta está em nossas mãos. Vamos agir juntos pela sustentabilidade! 🌍♻️ #Sustentabilidade #AçãoGlobal
                                </font>
                            </font>
                        </p>
                    </div>

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


                    {listaCliente.map((cli,index)=>
                    <div class="d-flex text-body-secondary pt-3" key={index}>
                        <svg class="bd-placeholder-img me-2  rounded" width="32" height="32">
                            <rect width="100%" height="100%" fill="#0000ff"></rect>
                        </svg>
                        <p class="pb-3 mb-0 small lh-sm border-bottom">
                            <strong class="d-block text-gray-dark">@{cli.nome}
                            </strong>
                            {cli.comentario}
                        </p>
                    </div>
                    )}
                    
                    <small class="d-block text-end mt-3">
                        <a href="/comunidade">
                            Entre na Comunidade
                        </a>
                    </small>
                </div>
                <DivEtiquetas>
                    <form onSubmit={inserirCliente}>
                        <fieldset>
                            <legend> Deixe o seu comentário, faça parte da nossa comunidade.</legend>
                            <label> Nome
                                <input type='text' name='nome' value={cliente.nome} 
                                onChange={cadCliente}/>
                            </label>
                            <label> E-mail
                                <input type='email' name='email' value={cliente.email} 
                                onChange={cadCliente}/>
                            </label>
                            <label> Comentário
                                <input type='text' name='comentario' value={cliente.comentario} 
                                onChange={cadCliente}/>
                            </label>
                            <button class="button" type="submit">Postar</button>
                        </fieldset>
                    </form>
                </DivEtiquetas>
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

  export default Comunidade;