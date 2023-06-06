import React, { useState } from 'react';
import { Post1Card } from "./Post1";
import { Post2Card } from "./Post2";
import { Post3Card } from "./Post3";
import { Post4Card } from "./Post4";

const buttonStyle = {
  margin: "0 5px",
  "font-size": "12px"
}

function PostsResumo(){
  const [categoria, setCatogoria] = useState('todas');

  const selecionarCategoria = (categoria) => {
    setCatogoria(categoria);
  };

  return (
    <div class="row">
      <div class="row terceira-secao">
          <h2>Últimas atualizações</h2>
          <p>
            Descubra as últimas novidades ambientais e práticas sustentáveis
          </p>
          <div class="col botoes" style={{
            display: "flex",
            "align-items": "flex-start",
            "flex-direction": "row",
            "justify-content": "center",
            "align-content": "center"
          }}>
            <button class="btn-block rounded p-2" type="button" style={buttonStyle} onClick={() => selecionarCategoria('economia')}>Economia</button>
            <button class="btn-block rounded p-2" type="button" style={buttonStyle} onClick={() => selecionarCategoria('sustentabilidade')}>Sustentabilidade</button>
            <button class="btn-block rounded p-2" type="button" style={buttonStyle} onClick={() => selecionarCategoria('sociedade')}>Sociedade</button>
            <button class="btn-block rounded p-2" type="button" style={buttonStyle} onClick={() => selecionarCategoria('meio-ambiente')}>Meio Ambiente</button>
            <button class="btn-block rounded p-2" type="button" style={buttonStyle} onClick={() => selecionarCategoria('todas')}>Todas</button>
          </div>
      </div>
      <div style={{
        "display": "flex",
        "flex-wrap": "wrap",
        "flex-direction": "row",
        "justify-content": "center"
      }}>
        <Post1Card categoriaSelecionada={categoria}/>
        <Post2Card categoriaSelecionada={categoria}/>
        <Post3Card categoriaSelecionada={categoria}/>
        <Post4Card categoriaSelecionada={categoria}/>
      </div>

    </div>
  );
};

export default PostsResumo;
