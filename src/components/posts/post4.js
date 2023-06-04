import React from "react";
import PostCard from "./PostCard";
import { PostStyle } from "../../styled";
import PostImg from "../../images/post4-img.jpeg"

const titulo = "Energia limpa: um futuro sustentável está em nossas mãos!"
const resumo = "Descubra como utilizar a eletricidade de forma consciente e sustentável. Adote fontes de energia renovável, desligue os aparelhos quando não estiverem em uso, troque as lâmpadas por versões mais eficientes e aproveite a luz natural. Contribua para um futuro energético e ambientalmente responsável."
const img = PostImg

class Post4Card extends React.Component {
  render() {
    return (
      <div style={{"display": "flex", "justify-content": "space-between"}}>
        {
          (
            this.props.categoriaSelecionada === 'economia' ||
            this.props.categoriaSelecionada === 'todas'
          ) && (
            <PostCard
              titulo={titulo}
              src={img}
              resumo={resumo}
              id={4}
            />
          )
        }
      </div>
    )
  }
}

function Post4(){
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
        Vivemos em uma era em que a eletricidade é uma parte essencial de nossas vidas, alimentando nossos dispositivos, iluminando nossos espaços e impulsionando nosso progresso. No entanto, é crucial reconhecer que o consumo de eletricidade tem um impacto significativo no meio ambiente. Nessa perspectiva, é fundamental adotar uma abordagem consciente e responsável em relação ao uso da eletricidade.
        </p>
        <p>
        Neste contexto, compartilhamos algumas dicas valiosas para que possamos aproveitar os benefícios da eletricidade de forma sustentável, minimizando seu impacto negativo e contribuindo para a preservação do meio ambiente. Vamos juntos explorar maneiras de utilizar a eletricidade de forma inteligente e sustentável, garantindo um futuro energético e ambientalmente consciente para as gerações futuras.
        </p>
        <ol>
          <li>
            <p>
              Adote a energia renovável: Opte por fontes de energia limpa, como a solar ou a eólica. Investir em painéis solares ou em programas de energia compartilhada são ótimas maneiras de contribuir para a redução da emissão de gases de efeito estufa.
            </p>
          </li>
          <li>
            <p>
              Desligue os aparelhos: Quando não estiver utilizando eletrônicos, lembre-se de desligá-los da tomada. O standby consome energia desnecessariamente, e você pode economizar na sua conta de luz.
            </p>
          </li>
          <li>
            <p>
              Troque as lâmpadas: Substitua as lâmpadas incandescentes por lâmpadas LED. Elas são mais eficientes e duram muito mais tempo, além de consumirem menos energia.
            </p>
          </li>
          <li>
            <p>
              Aproveite a luz natural: Abra cortinas e persianas para aproveitar a luz do sol durante o dia e reduzir a necessidade de iluminação artificial.
            </p>
          </li>
          <li>
            <p>
              Utilize eletrodomésticos eficientes: Ao comprar novos eletrodomésticos, verifique sua classificação energética e opte por modelos mais eficientes, que consomem menos energia.
            </p>
          </li>
        </ol>
        <p>
          Vocês, jovens, são a geração do futuro. Vamos usar a eletricidade de forma inteligente e sustentável, preservando o meio ambiente para as próximas gerações! Juntos, podemos fazer a diferença e construir um futuro energético e ambientalmente sustentável.
        </p>
      </div>
    </PostStyle>
  )
}

export { Post4Card, Post4 };
