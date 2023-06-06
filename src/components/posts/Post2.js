import React from "react";
import PostCard from "./PostCard";
import { PostStyle } from "../../styled";
import PostImg from "../../images/post2-img.jpeg"

const titulo = "Reciclagem: uma atitude sustentável para um mundo melhor!"
const resumo = "A reciclagem é uma poderosa ação de preservação dos recursos naturais. Ao separar corretamente os resíduos, adotar a compostagem e reduzir o desperdício, podemos contribuir para um futuro mais sustentável. Sejamos agentes de mudança e inspiremos outros a adotarem práticas de reciclagem em suas vidas."
const img = PostImg

class Post2Card extends React.Component {
  render() {
    return (
      <div style={{"display": "flex", "justify-content": "space-between"}}>
        {
          (
            this.props.categoriaSelecionada === 'sociedade' ||
            this.props.categoriaSelecionada === 'todas'
          ) && (
            <PostCard
              titulo={titulo}
              src={img}
              resumo={resumo}
              id={2}
            />
          )
        }
      </div>
    )
  }
}

function Post2(){
  return (
    <PostStyle>
      <div class="row">
        <p class="titulo display-4">
          {titulo}
        </p>
        <p class="subtitulo display-7">
          {resumo}
        </p>
        <div class="img-container">
          <img class="image" src={img} alt="postimg"/>
        </div>
      </div>

      <div class="row post-content">
        <p>
          Você sabia que a reciclagem é uma atitude simples, porém poderosa, que contribui de forma significativa para a preservação dos recursos naturais e a construção de um futuro mais sustentável? Em um mundo onde a preocupação com o meio ambiente está cada vez mais presente, a reciclagem desempenha um papel fundamental na redução do impacto ambiental e no aproveitamento máximo dos materiais que descartamos.
        </p>
        <p>
          Neste contexto, gostaríamos de compartilhar algumas dicas valiosas sobre como incorporar a reciclagem em sua rotina diária. Ao adotar essas práticas, você estará contribuindo para a conservação dos recursos naturais, a redução da quantidade de resíduos enviados para aterros sanitários e a diminuição da poluição ambiental.
        </p>
        <ol>
          <li>
            <p>
              Manutenção dos aparelhos: Uma manutenção regular dos aparelhos elétricos é crucial. Além de garantir o bom funcionamento, ajuda a reduzir o consumo de energia e a prolongar a vida útil desses equipamentos. Pequenas ações, como limpar filtros de ar-condicionado e garantir uma boa vedação das geladeiras, fazem toda a diferença.
            </p>
          </li>
          <li>
            <p>
              Separação correta: Faça a separação adequada dos resíduos recicláveis, como papel, plástico, vidro e metal. Ao separar corretamente, você facilita o processo de reciclagem e contribui para evitar a contaminação dos materiais, garantindo sua reutilização de forma eficiente.
            </p>
          </li>
          <li>
            <p>
              Compostagem: Aproveite os resíduos orgânicos, como restos de alimentos, cascas de frutas e legumes, para fazer compostagem. Essa prática simples e natural transforma esses resíduos em um rico adubo orgânico, que pode ser utilizado em jardins, hortas e vasos de plantas, enriquecendo o solo e reduzindo a necessidade de fertilizantes químicos.
            </p>
          </li>
          <li>
            <p>
              Redução do desperdício: Evite o desperdício de alimentos, água e energia. Planeje suas compras de forma consciente, comprando apenas o necessário e priorizando produtos com embalagens recicláveis. Utilize a água de forma responsável, consertando vazamentos e adotando práticas de reutilização, como a captação de água da chuva. Desligue os aparelhos eletrônicos quando não estiverem em uso e adote hábitos de economia de energia, como a utilização de lâmpadas de baixo consumo.
            </p>
          </li>
        </ol>
        <p>
          Ao incorporar essas práticas em sua vida cotidiana, você estará contribuindo diretamente para a preservação do meio ambiente e para a construção de um futuro mais sustentável. Seja um agente de mudança e inspire outras pessoas a adotarem a reciclagem como um estilo de vida. Juntos, podemos fazer a diferença e garantir um planeta mais saudável para as gerações futuras.
        </p>
      </div>
    </PostStyle>
  )
}

export { Post2Card, Post2 };
