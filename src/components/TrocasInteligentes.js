import { PostStyle } from '../styled'
import seta from "../images/seta.png"
import sacola_plastica from "../images/sacola_plastica.jpg"
import copo_descartavel from "../images/copo_descartavel.jpg"
import copo_reutilizavel from "../images/copo_reutilizavel.jpg"
import sacola_pano from "../images/sacola_pano.jpg"
import esponja from "../images/esponja.jpg"
import bucha from "../images/bucha.jpg"

function TrocasInteligentes() {
  return (
    <PostStyle>
      <div className="row">
        <p className="titulo display-4">
          Trocas Inteligentes
        </p>
        <p className="subtitulo display-7">
        A transição de produtos convencionais para alternativas mais sustentáveis é uma estratégia poderosa para promover a sustentabilidade em nosso dia a dia. Essas trocas inteligentes têm o potencial de reduzir significativamente nosso impacto ambiental e contribuir para a construção de um mundo mais ecologicamente equilibrado.
        </p>
      </div>
      <div className="row post-content">
        <h1>Trocas Inteligentes</h1>
        <div className='troca-inteligente-row'>
          <div className="card red">
            <div className='card-title' style={{ color: 'rgb(201 33 33)' }}>
              <h2>Sacola Plástica</h2>
            </div>
            <img src={sacola_plastica}  className='troca'></img>
          </div>
          <img src={seta} className='arrow'></img>
          <div className="card green">
            <div className='card-title' style={{ color: 'green' }}>
              <h2>Sacola De Pano</h2>
            </div>
            <img src={sacola_pano} className='troca'></img>
          </div>
        </div>
        <div className='troca-inteligente-row'>
          <div className="card red">
            <div className='card-title' style={{ color: 'rgb(201 33 33)' }}>
              <h2>Copo Descartável</h2>
            </div>
            <img src={copo_descartavel} className='troca'></img>
          </div>
          <img src={seta} className='arrow'></img>

          <div className="card green">
            <div className='card-title' style={{ color: 'green'}}>
              <h2>Copo Reutilizável</h2>
            </div>
            <img src={copo_reutilizavel} className='troca'></img>
          </div>
        </div>
        <div className='troca-inteligente-row'>
          <div className="card red">
            <div className='card-title' style={{ color: 'rgb(201 33 33)'}}>
              <h2>Esponja</h2>
            </div>
            <img src={esponja} className='troca'></img>
          </div>
          <img src={seta} className='arrow'></img>

          <div className="card green">
            <div className='card-title' style={{ color: 'green'}}>
              <h2>Bucha Vegetal</h2>
            </div>
            <img src={bucha} className='troca'></img>
          </div>
        </div>
        <div className='row'>
          <h2>Confira também algumas dicas de como produzir menos lixo.</h2>
          <br></br>
          <iframe className='video-trocas' src="https://www.youtube.com/embed/CSYHp24Uy08" title="YouTube video player" frameborder="0" allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture, web-share" allowfullscreen></iframe>
        </div>
      </div>
    </PostStyle>
  )
}

export default TrocasInteligentes;
