import React from 'react';

class PostCard extends React.Component {
  render() {
      return (
        <div class="card green">
          <img class="image" src={this.props.src} alt="postimg" />
          <p style={{
            fontSize: "23px",
            fontWeight: "900",
            color: "#424141"
          }}>{this.props.titulo}</p>
          <p>
            <font style={{ verticalAlign: 'inherit' }}>{this.props.resumo}</font>
          </p>
          <p class="lead mb-0" style={{"margin-top": "auto"}}>
            <a href={`posts/${this.props.id}`} class="link1">
              <font style={{ verticalAlign: 'inherit' }}>
                <font style={{ verticalAlign: 'inherit' }}>Continue lendo...</font>
              </font>
            </a>
          </p>
        </div>
      );
  }
}

export default PostCard;
