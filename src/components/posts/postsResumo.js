
import React from "react";
import { Post1Card } from "./post1";
import { Post2Card } from "./post2";
import { Post3Card } from "./post3";

const buttonStyle = {
  margin: "0 5px",
  "font-size": "12px"
}

function PostsResumo(){
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
            <button class="btn-block rounded p-2" type="button" style={buttonStyle}>Economia</button>
            <button class="btn-block rounded p-2" type="button" style={buttonStyle}>Ambiente</button>
            <button class="btn-block rounded p-2" type="button" style={buttonStyle}>Sustentabilidade</button>
            <button class="btn-block rounded p-2" type="button" style={buttonStyle}>Sociedade</button>
            <button class="btn-block rounded p-2" type="button" style={buttonStyle}>Economia</button>
            <button class="btn-block rounded p-2" type="button" style={buttonStyle}>Meio Ambiente</button>
          </div>
      </div>
      <div style={{
        "display": "flex",
        "flex-wrap": "wrap",
        "flex-direction": "row",
        "justify-content": "center"
      }}>
        <Post1Card />
        <Post2Card />
        <Post3Card />
      </div>

    </div>
  );
};

export default PostsResumo;
