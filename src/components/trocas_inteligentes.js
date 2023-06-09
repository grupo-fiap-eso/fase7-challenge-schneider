import { CadastroStyle } from '../styled'
import seta from "../images/seta.png"
import sacola_plastica from "../images/sacola_plastica.jpg"
import copo_descartavel from "../images/copo_descartavel.jpg"
import copo_reutilizavel from "../images/copo_reutilizavel.jpg"
import sacola_pano from "../images/sacola_pano.jpg"
import esponja from "../images/esponja.jpg"
import bucha from "../images/bucha.jpg"

function Trocas() {
    return (
        <CadastroStyle>
            <div class='row'>
                <h1>Trocas Inteligentes</h1>
                <p>A transição de produtos convencionais para alternativas mais sustentáveis é uma estratégia poderosa para promover a sustentabilidade em nosso dia a dia. Essas trocas inteligentes têm o potencial de reduzir significativamente nosso impacto ambiental e contribuir para a construção de um mundo mais ecologicamente equilibrado.</p>

                <div class='row'>
                    <div class="card green">
                        <div style={{ backgroundColor: 'red', borderRadius: '5px', paddingLeft: '10px' }}>
                            <h2>Sacola Plástica</h2>
                        </div>
                        <br></br>
                        <img src={sacola_plastica}></img>

                    </div>
                    <img style={{ width: '250px' }} src={seta}></img>

                    <div class="card green">
                        <div style={{ backgroundColor: 'green', borderRadius: '5px', paddingLeft: '10px' }}>
                            <h2>Sacola De Pano</h2>
                        </div>
                        <br></br>
                        <img src={sacola_pano}></img>
                    </div>
                </div>
                <div class='row'>
                    <div class="card green">
                        <div style={{ backgroundColor: 'red', borderRadius: '5px', paddingLeft: '10px' }}>
                            <h2>Copo Descartável</h2>
                        </div>
                        <br></br>
                        <img src={copo_descartavel}></img>

                    </div>
                    <img style={{ width: '250px' }} src={seta}></img>

                    <div class="card green">
                        <div style={{ backgroundColor: 'green', borderRadius: '5px', paddingLeft: '10px' }}>
                            <h2>Copo Reutilizável</h2>
                        </div>
                        <br></br>
                        <img src={copo_reutilizavel}></img>
                    </div>
                </div>
                <div class='row'>
                    <div class="card green">
                        <div style={{ backgroundColor: 'red', borderRadius: '5px', paddingLeft: '10px' }}>
                            <h2>Esponja</h2>
                        </div>
                        <br></br>
                        <img src={esponja}></img>

                    </div>
                    <img style={{ width: '250px' }} src={seta}></img>

                    <div class="card green">
                        <div style={{ backgroundColor: 'green', borderRadius: '5px', paddingLeft: '10px' }}>
                            <h2>Bucha Vegetal</h2>
                        </div>
                        <br></br>
                        <img src={bucha}></img>
                    </div>
                </div>
                <div class='row'>
                    <h2>Confira também algumas dicas de como produzir menos lixo.</h2>
                    <br></br>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/CSYHp24Uy08" title="YouTube video player" frameborder="0" allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture, web-share" allowfullscreen></iframe>
                </div>

                
            </div>
        </CadastroStyle>
    )
}

export default Trocas