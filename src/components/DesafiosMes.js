import { useState } from 'react'
import { DivEtiquetas } from '../styled'

function Desafios() {
  const [cliente, setCliente] = useState({
    nome: '',
    email: '',
    comentario: ''
  })

  function cadCliente(e) {
    setCliente({ ...cliente, [e.target.name]: e.target.value })
  }

  const [listaCliente, setListaCliente] = useState([])

  function inserirCliente(e) {
    e.preventDefault()
    setListaCliente([...listaCliente, cliente])
  }

  return (
    <div class='row'>
      <h1>Desafio do Mês: Gota a Gota</h1>
      <p>A água é um recurso vital para a vida na Terra, e cada um de nós desempenha um papel importante na preservação desse recurso precioso. Ao adotar práticas conscientes de economia de água em nosso dia a dia, podemos contribuir significativamente para a sustentabilidade do planeta. Durante 30 dias se comprometa a realizar 5 ações que vão mudar a forma como você lida com a água e a sustentabilidade no dia a dia.</p>

      <p>Registre seu progresso na planilha e no formuálio abaixo.</p>
      <a href='https://www.canva.com/design/DAFlTOq0DCs/view' target="_blank"> Baixe o Desafio aqui</a>
      <div style={{
        position: 'relative', width: '100%', height: '0', paddingTop: '141.4286%',
        paddingBottom: '0', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden',
        borderRadius: '8px', willChange: 'transform'
      }}>
        <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', border: 'none', padding: '0', margin: '0' }}
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFlTOq0DCs&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
        </iframe>
      </div>

      <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFlTOq0DCs&#x2F;view?utm_content=DAFlTOq0DCs&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener"></a>

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
                Participando do desafio de redução de consumo de água! Tomei banhos mais rápidos e desliguei a torneira ao escovar os dentes. Vamos economizar água e preservar o planeta! #DesafioÁguaSustentável 💧
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
            Iniciando o desafio de economia de água! Fechei a torneira enquanto ensaboava as mãos e tomei banhos mais curtos. #DesafioÁguaEconomica 💧"
          </p>
        </div>

        <div class="d-flex text-body-secondary pt-3">
          <svg class="bd-placeholder-img me-2  rounded" width="32" height="32">
            <rect width="100%" height="100%" fill="#e83e8c"></rect>
          </svg>
          <p class="pb-3 mb-0 small lh-sm border-bottom">
            <strong class="d-block text-gray-dark">@ayla.carolina
            </strong>
            Participando do desafio de redução de consumo de água! Desliguei a torneira ao escovar os dentes e consertei um vazamento. Vamos economizar água juntos! #DesafioEconomia 💧
          </p>
        </div>

        <div class="d-flex text-body-secondary pt-3">
          <svg class="bd-placeholder-img me-2  rounded" width="32" height="32">
            <rect width="100%" height="100%" fill="#0000ff"></rect>
          </svg>
          <p class="pb-3 mb-0 small lh-sm border-bottom">
            <strong class="d-block text-gray-dark">@gabriel.clemente
            </strong>
            Hoje comecei o desafio de economia de água! Reduzi o tempo no chuveiro e consertei torneiras com vazamento. Pequenas ações fazem a diferença! #DesafioÁguaPoupa 💧
          </p>
        </div>

        <div class="d-flex text-body-secondary pt-3">
          <svg class="bd-placeholder-img me-2  rounded" width="32" height="32">
            <rect width="100%" height="100%" fill="#0000ff"></rect>
          </svg>
          <p class="pb-3 mb-0 small lh-sm border-bottom">
            <strong class="d-block text-gray-dark">@thiago.motta
            </strong>
            Iniciei o desafio de economizar água hoje. Desliguei a torneira enquanto ensaboava as mãos e reutilizei a água da cozinha para regar as plantas. #DesafioConsciênciaHídrica 💧
          </p>
        </div>

        <div class="d-flex text-body-secondary pt-3">
          <svg class="bd-placeholder-img me-2  rounded" width="32" height="32">
            <rect width="100%" height="100%" fill="#0000ff"></rect>
          </svg>
          <p class="pb-3 mb-0 small lh-sm border-bottom">
            <strong class="d-block text-gray-dark">@mariana.nunes
            </strong>
            Participando do desafio de redução de consumo de água! Tomei banhos mais rápidos e desliguei a torneira ao escovar os dentes. Vamos economizar água e preservar o planeta! #DesafioÁguaSustentável 💧
          </p>
        </div>
        <div class="d-flex text-body-secondary pt-3">
          <svg class="bd-placeholder-img me-2  rounded" width="32" height="32">
            <rect width="100%" height="100%" fill="#0000ff"></rect>
          </svg>
          <p class="pb-3 mb-0 small lh-sm border-bottom">
            <strong class="d-block text-gray-dark">@guilherme.quirino
            </strong>
            Segundo dia do desafio concluído! Reaproveitei água da chuva para regar as plantas e lavei roupas apenas quando necessário. Juntos, podemos preservar a água! #PreservaçãoHídrica 💦</p>
        </div>
        <div class="d-flex text-body-secondary pt-3">
          <svg class="bd-placeholder-img me-2  rounded" width="32" height="32">
            <rect width="100%" height="100%" fill="#0000ff"></rect>
          </svg>
          <p class="pb-3 mb-0 small lh-sm border-bottom">
            <strong class="d-block text-gray-dark">@ayla.carolina
            </strong>
            Finalizei o segundo dia do desafio com sucesso! Adotei chuveiros mais rápidos e coletei água da chuva para limpezas. Vamos preservar esse recurso precioso! #ConsciênciaHídrica 💦
          </p>
        </div>
        <div class="d-flex text-body-secondary pt-3">
          <svg class="bd-placeholder-img me-2  rounded" width="32" height="32">
            <rect width="100%" height="100%" fill="#0000ff"></rect>
          </svg>
          <p class="pb-3 mb-0 small lh-sm border-bottom">
            <strong class="d-block text-gray-dark">@gabriel.clemente
            </strong>
            Seguindo firme no desafio! Optei por lavar roupas na máquina apenas com carga completa e reguei as plantas com água reaproveitada. Juntos, podemos preservar a água! #PreservaçãoHídrica 💦
          </p>
        </div>
        <div class="d-flex text-body-secondary pt-3">
          <svg class="bd-placeholder-img me-2  rounded" width="32" height="32">
            <rect width="100%" height="100%" fill="#0000ff"></rect>
          </svg>
          <p class="pb-3 mb-0 small lh-sm border-bottom">
            <strong class="d-block text-gray-dark">@thiago.motta
            </strong>
            Concluí o segundo dia do desafio! Adotei banhos mais curtos e consertei um vazamento no banheiro. Juntos, podemos fazer a diferença na preservação da água! #EconomiaDeÁgua 💦
          </p>
        </div>


        {listaCliente.map((cli, index) =>
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
      </div>

      <DivEtiquetas>
        <form onSubmit={inserirCliente}>
          <fieldset>
            <legend> Deixe o seu comentário, faça parte da nossa comunidade.</legend>
            <label> Nome
              <input type='text' name='nome' value={cliente.nome}
                onChange={cadCliente} />
            </label>
            <label> E-mail
              <input type='email' name='email' value={cliente.email}
                onChange={cadCliente} />
            </label>
            <label> Comentário
              <input type='text' name='comentario' value={cliente.comentario}
                onChange={cadCliente} />
            </label>
            <button class="button" type="submit">Postar</button>
          </fieldset>
        </form>
      </DivEtiquetas>
    </div>
  )
}

export default Desafios;
