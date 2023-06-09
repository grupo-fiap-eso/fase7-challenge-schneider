import { CarouselStyle, PostStyle } from "../styled"
import Logo2 from "../images/logo2.png"
import Img from "../images/Dia-mundial-da-meteorologia-scaled.jpg"
import ayla from "../images/ayla.jpeg"
import guilherme from "../images/Guilherme.jpg"
import thiago from "../images/thiago.jpeg"
import gabriel from "../images/gabriel.jpeg"
import mariana from "../images/mariana.jpeg"

const Links = {
  textDecoration: 'none',
  color: '#fff'
}

function SobreoProjeto() {

  return (
    <div>
      <CarouselStyle>
        <PostStyle>
          <div class="row">
            <p class="titulo display-4">
              Integrantes do grupo
            </p>
            <p class="subtitulo display-6">
              e suas funções
            </p>
          </div>
        </PostStyle>
        <div class="row sobreNos">

          <div class="slide-container slider">
            <h4></h4>

            <div class="slide-content slides">
              <div class="card-wrapper row ">
                <input type="radio" name="radio-btn" id="radio1" />
                <input type="radio" name="radio-btn" id="radio2" />
                <input type="radio" name="radio-btn" id="radio3" />
                <input type="radio" name="radio-btn" id="radio4" />

                <div class="card slide first">
                  <div class="image-content">
                    <span class="overlay"></span>

                    <div class="card-image">
                      <img src={ayla} class="card-img" />
                    </div>
                  </div>
                  <div class="card-content">
                    <h4 class="nome">Ayla Carolina Silva Machado - RM97299 </h4>
                    <p class="descricao">Home, Sobre o projeto, CSS...</p>
                  </div>
                </div>

                <div class="card slide">
                  <div class="image-content">
                    <span class="overlay"></span>
                    <div class="card-image">
                      <img src={mariana} class="card-img" />
                    </div>
                  </div>
                  <div class="card-content">
                    <h4 class="nome">Mariana de Moraes Nunes - RM96736 </h4>
                    <p class="descricao">Calendário, CSS, Trocas Inteligentes,, Pitch...</p>
                  </div>
                </div>

                <div class="card slide">
                  <div class="image-content">
                    <span class="overlay"></span>
                    <div class="card-image">
                      <img src={gabriel} class="card-img" />
                    </div>
                  </div>
                  <div class="card-content">
                    <h4 class="nome">Gabriel Clemente de Sousa - RM96652 </h4>
                    <p class="descricao">Desafio, CSS, Pitch...</p>
                  </div>
                </div>

                <div class="card slide">
                  <div class="image-content">
                    <span class="overlay"></span>
                    <div class="card-image">
                      <img src={guilherme} class="card-img" />
                    </div>
                  </div>
                  <div class="card-content">
                    <h4 class="nome"> Guilherme Quirino de Melo - RM97241 </h4>
                    <p class="descricao">CSS, Posts, Sobre o projeto...</p>
                  </div>
                </div>

                <div class="card slide">
                  <div class="image-content">
                    <span class="overlay"></span>
                    <div class="card-image">
                      <img src={thiago} class="card-img" />
                    </div>
                  </div>
                  <div class="card-content">
                    <h4 class="nome">Thiago de Morais Rodrigues Motta - RM96340 </h4>
                    <p class="descricao">Comunidade, Formularios, Sobre o projeto...</p>
                  </div>
                </div>

                <div class="navigation-auto">
                  <div class="auto-btn1"></div>
                  <div class="auto-btn2"></div>
                  <div class="auto-btn3"></div>
                  <div class="auto-btn4"></div>
                </div>
              </div>
            </div>
            <div class="manual-navigation">
              <label for="radio1" class="manual-btn"></label>
              <label for="radio2" class="manual-btn"></label>
              <label for="radio3" class="manual-btn"></label>
              <label for="radio4" class="manual-btn"></label>
            </div>
          </div>


          <div class="col-md-8 proposta center">

            <h4>Proposta</h4>
            <p>Para o desenvolvimento deste projeto, foram aplicados diversos recursos do curso até o momento atual do curso. Ao longo das disciplinas e conteúdos estudados, foram utilizados conhecimentos e habilidades específicas para a criação das diferentes partes do projeto.

              <p>Na disciplina de Front-end, aprendemos a desenvolver estilização CSS para recursos de nossa página. Essa habilidade foi fundamental para estabelecer a identidade visual e UX design de nosso projeto, além disso, utilizamos formulários para captar comentários de nossos usuários, com o envio de dados necessários para o funcionamento adequado do projeto.</p>

              <p>Além disso do CSS que criamos manualmente, utilizamos o Bootstrap com seus estilos pré-definidos, que facilitou a construção das páginas do projeto. Com o Bootstrap, foi possível criar layouts responsivos e aplicar estilos de forma ágil e eficiente.</p>

              <p>A disciplina de UX Writing foi crucial para aprimorar a experiência do usuário no projeto. Através do uso de técnicas de redação específicas para interfaces digitais, conseguimos transmitir informações de forma clara e objetiva, facilitando a compreensão dos usuários e tornando a navegação mais intuitiva.</p>

              <p>Além das disciplinas mencionadas, também aplicamos conceitos de sustentabilidade para criar soluções que pudessem contribuir para a melhoria do mundo em que vivemos. Consideramos a importância de práticas sustentáveis e a implementação de soluções que incentivem a preservação do meio ambiente.</p>

              <p>Quanto às tecnologias utilizadas, o projeto foi desenvolvido utilizando JavaScript, HTML, Bootstrap e React. Essa stack é comumente empregada no desenvolvimento de páginas web modernas e interativas, permitindo a criação de interfaces atrativas e funcionais.</p>

              Em relação às páginas do projeto, destacamos as seguintes:

              <li>Home: A página inicial do projeto, onde apresentamos informações relevantes sobre a proposta e os objetivos do projeto.</li>

              <li>Comunidade: Uma página dedicada à interação dos usuários, permitindo que eles compartilhem experiências, tirem dúvidas e promovam discussões sobre sustentabilidade.</li>

              <li>Trocas Inteligentes: Nesta página, os usuários recebem sugestões relacionado a troca de produtos, incentivando o consumo consciente e a redução do desperdício.</li>

              <li>Desafio do Mês: Uma seção especial com desafios mensais relacionados à sustentabilidade, estimulando a participação e o engajamento dos usuários.</li>

              <li>Calendário Ambiental: Uma página que apresenta datas importantes relacionadas ao meio ambiente, como datas comemorativas e eventos relevantes, visando conscientizar os usuários sobre a importância da preservação ambiental.</li>

              Dessa forma, o projeto integra diversos recursos aprendidos ao longo do curso, abrangendo desde a utilização de tecnologias específicas até a aplicação de conceitos de UX e sustentabilidade, com o objetivo de criar uma plataforma que promova a conscientização e ações em prol de um mundo mais sustentável.</p>
            <h4>Ferramentas utilizadas</h4>
            <p>testetestetestetestetestetestetestetesteteste
              testetestetestetestetestetestetestetestetesteteste
              testetestetestetestetestetestetestetestetestetesteteste </p>
          </div>


          <div class="col-md-4 links">
            <div class="position-sticky" s>
              <div class="p-4">
                <h4>Navegue pelas páginas</h4>
                <ol class="list-unstyled mb-0">
                  <li>
                    <a href="/">Login page</a>
                  </li>
                  <li>
                    <a href="/home">Home</a>
                  </li>
                  <li>
                    <a href="/comunidade">Comunidade</a>
                  </li>
                  <li>
                    <a href="/calendario">Calendario Ambiental</a>
                  </li>
                  <li>
                    <a href="/cadastro">Pagina de Cadastro</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </CarouselStyle>
    </div>

  )
}

export default SobreoProjeto
