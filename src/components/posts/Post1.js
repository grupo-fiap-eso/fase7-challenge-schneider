import React from "react";
import PostCard from "./PostCard";
import { PostStyle } from "../../styled";
import PostImg from "../../images/post1-img.jpeg"

const titulo = "Conservação de energia: cuidando do planeta para as futuras gerações!"
const resumo = "Pequenas mudanças no nosso dia a dia, como manter aparelhos em bom estado, ajustar o uso de aquecimento e resfriamento, sensibilizar a família, gerenciar a iluminação e utilizar eletrodomésticos eficientes, contribuem para a conservação de energia e um futuro sustentável."
const img = PostImg

class Post1Card extends React.Component {
  render() {
    return (
      <div style={{"display": "flex", "justify-content": "space-between"}}>
        {
          (
            this.props.categoriaSelecionada === 'sustentabilidade' ||
            this.props.categoriaSelecionada === 'todas'
          ) && (
            <PostCard
              titulo={titulo}
              src={img}
              resumo={resumo}
              id={1}
            />
          )
        }
      </div>
    )
  }
}

function Post1(){
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
          Você sabia que podemos desempenhar um papel fundamental na conservação de energia e garantir um futuro sustentável? Com a crescente preocupação com as mudanças climáticas e o esgotamento dos recursos naturais, é essencial adotar práticas mais conscientes em relação ao consumo de energia.
        </p>
        <p>
          Neste contexto, gostaríamos de compartilhar valiosas dicas sobre como contribuir para a conservação de energia no nosso dia a dia. Ao implementar essas medidas, não só reduzimos o impacto ambiental, mas também economizamos dinheiro e promovemos um estilo de vida mais sustentável.
        </p>
        <ol>
          <li>
            <p>
              Manutenção dos aparelhos: Uma manutenção regular dos aparelhos elétricos é crucial. Além de garantir o bom funcionamento, ajuda a reduzir o consumo de energia e a prolongar a vida útil desses equipamentos. Pequenas ações, como limpar filtros de ar-condicionado e garantir uma boa vedação das geladeiras, fazem toda a diferença.
            </p>
          </li>
          <li>
            <p>
              Uso consciente do aquecimento e resfriamento: Ajuste a temperatura do ar-condicionado e do aquecedor de acordo com a necessidade real. Evite temperaturas extremas e utilize recursos como cortinas e isolamento térmico para reter o calor ou o frescor nos ambientes. Essas medidas simples ajudam a economizar energia sem comprometer o conforto.
            </p>
          </li>
          <li>
            <p>
              Sensibilização familiar: Compartilhar conhecimento sobre conservação de energia com seus familiares e amigos é uma maneira poderosa de multiplicar o impacto positivo. Incentive-os a adotar práticas mais sustentáveis no dia a dia, como desligar os aparelhos quando não estão em uso, aproveitar a luz natural e utilizar eletrodomésticos eficientes em termos de energia. Juntos, podemos criar uma cultura de conscientização e responsabilidade ambiental.
            </p>
          </li>
          <li>
            <p>
              Gerenciamento da iluminação: Opte por lâmpadas LED de baixo consumo energético. Lembre-se de desligar as luzes quando não estiverem em uso e aproveite ao máximo a luz natural durante o dia. Considere o uso de sensores de movimento ou temporizadores para controlar a iluminação em áreas menos frequentadas. Essas medidas simples não só economizam energia, mas também criam ambientes mais confortáveis e acolhedores.
            </p>
          </li>
          <li>
            <p>
              Uso eficiente dos eletrodomésticos: Utilize eletrodomésticos eficientes em termos de energia, como geladeiras, máquinas de lavar roupa e lava-louças com classificação energética. Além disso, evite abrir a geladeira desnecessariamente e utilize ciclos de lavagem econômicos em suas máquinas. Essas práticas ajudam a reduzir o consumo de energia sem comprometer a funcionalidade e o conforto proporcionados por esses aparelhos.
            </p>
          </li>
          <li>
            <p>
              Desligue os aparelhos em standby: Muitos aparelhos eletrônicos consomem energia mesmo quando estão em standby. Desligá-los completamente da tomada quando não estiverem em uso é uma medida simples, mas eficaz, para evitar o chamado "consumo vampiro" e reduzir o desperdício de energia.
            </p>
          </li>
        </ol>
        <p>
          Pequenas ações individuais podem fazer uma grande diferença quando se trata de conservação de energia. Ao adotar essas dicas e compartilhá-las com sua família e amigos, você estará contribuindo para um futuro mais sustentável, preservando nosso planeta para as gerações futuras. Vamos juntos construir um mundo mais eficiente, consciente e próspero!
        </p>
      </div>
    </PostStyle>
  )
}

export { Post1Card, Post1 };
