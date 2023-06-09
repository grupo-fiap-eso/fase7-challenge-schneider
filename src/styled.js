import styled from 'styled-components'

export const DivEtiquetas = styled.div`
  *{
    background-color: #174105;
    padding: 1px 20px; 
    border-radius: 5px;
    width: 100%;
    float: center;
  }
  form{
    width: 50%; padding: 1px; margin: 0 auto;
  }
  fieldset{
    padding: 20px;
  }
  legend{
    color: white;
    font-size: 20px; text-align: center; padding: 0px; 
  }
  label{
    color: white;
    display: flex; flex-direction: column; margin-bottom: 10px
  }
  input{
    background-color: white;
    padding: 5px 20px; border-radius: 5px; border: 100px;
  }
  button{
    background: white;
    border-radius: 2px; width: 12%; 
    margin: 0px 45%;
    text-align: center;
  }
`

export const PostStyle = styled.div`
  *{
    margin: 55px 0px 8px;
    text-align: center;
    .titulo{
        margin: 50px auto 8px;
        text-align: center;
        max-width: 1300px;
    }
    .subtitulo{
      margin: 0px auto 10px;
      text-align: center;
      max-width: 60%;
    }
    .img-container{
      max-width: 900px;
      margin: 40px auto;
      img {
        width: inherit;
      }
    }
  }
  .post-content{
    text-align: justify !important;
    max-width: 900px;
    margin: 40px auto;
    p, ol, li{
      text-indent: 3em;
      text-align: justify;
      margin: 15px auto 0px;
    }
  }
  .troca-inteligente-row {
    display: flex;
    margin: auto;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .troca-inteligente-row img.arrow{
    width: 250px;
    height: 185px;
    margin: auto;
  }
  .troca-inteligente-row .card-title {
    margin-top: 0 !important;
    height: 100%;
    max-height: 95px;
    padding: 5px;
  }

  .troca-inteligente-row .card-title h2 {
    margin: 0px  !important;
  }

  .troca-inteligente-row img.troca{
    margin:auto;
    width: 100%;
  }
  iframe.video-trocas {
    height: 480px;
  }
`
export const LoginStyle = styled.div`
  .login{
    weight: 70px;
    height: 320px;
    width: 600px;
    position: relative;
    text-align: center;
    color: white;
    background-color: rgba(35,196,83, 0.8);
    justify-content: right;
    padding-right: 20px;
    padding-bottom: 7px;
    margin-right: 20px;
    margin-top: 50vh;
    display: flex;
    margin-left: 100vh;
    border: solid 2px white;
  }
  .logo-scheneider{
    position: relative;
    width: 350px;
    height: 180px;
    padding-right: 80px;
    padding-top: 110px;
  }
  .bottom{
    backround: #21c650;
    border-color: white;
    border-width: 3px;
    padding-bottom: 3px;
  }
  .videos{
    position: fixed;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
  }
`

export const CadastroStyle = styled.div`
  .geral{
    background: rgba(35,196,83);
    color: white;
  }
  .logo-scheneider{
    width: 350px;
    height: 80px;
    float: right !important;
  }
`

export const CalendarioStyle = styled.div`
  .geral{
    font-size: 5px;
    display: inline-block;
  }

  .geral-semana{
    font-size: 5px;
    display: inline-block;
    background-color: #8FBC8F;
    color: white;
  }
`

export const CarouselStyle = styled.div`
  div .sobreNos{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slide-content{
    margin: 0 40px;
  }

  .card{
    width: 320px;
    border-radius: 25px;
    padding: 1px;
    background-color: #fff;
  }

  .image-content, 
  .card-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 14px;
  }

  .image-content{
    position: relative;
    row-gap: 5px;
    ppadding: 25px 0;
  }

  .overlay{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #606C38;
    border-radius: 25px 25px 0 25px;

  }

  .overlay::before,
  .overlay::after{
    content: '';
    position: absolute;
    right: 0;
    bottom: -40px;
    height: 40px;
    width: 40px;
    background-color: #606C38;

  }

  .overlay::after{
    border-radius: 0 25px 0 0;
    background-color: #fff;
  }

  .card-image{
    position: relative;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    background: #FEFAE0;
    padding: 3px;

  }
  .card-image .card-img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid #606C38;
  }

  .nome{
    font-size: 14px;
    font-weight: 500;
    color: #57532A;
  }

  .descricao{
    font-size: 14px;
    color: #57532A;
    text-align: center;

  }


  .slider{
    width: 995px;
    height: 400px;
    overflow: hidden;
    height: 450px;
  }

  .slider h4{
    padding-top: 25px;
    font-size: 20px;
    color: #57532A;
  }

  .proposta{
    padding-left: 20vh;
  }

  .proposta,
  .links{
    padding-top: 20vh;
  }

  .links a{
    text-decoration: none;
    color: #57532A;
  }

  .slides{
    width: 900%;
    height: 400px;
    display: flex;
  }

  .slides input{
    display: none;
  }

  .card.slide.first{
    margin-left: 0;
  }

  .card.slide{
    margin: 10px;
  }

  .slide{
    width 37vh;
    position: relative;
    justify-content: space-between;
  }

  .manual-navigation{
    display: flex;
    justify-content: center;
  }

  .manual-btn{
    border: 2px solid #57532A;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s;
  }

  .manual-btn:not(:last-child){
    margin-right: 10px;
  }

  .manual-btn:hover{
    background-color: #57532A;
  }

  #radio1:checked ~.first{
    margin-left: 0;
  }

  #radio2:checked ~.first{
    margin-left: -25%;
  }

  #radio3:checked ~.first{
    margin-left: -65%;
  }

  #radio4:checked ~.first{
    margin-left: -97%;
  }

  .card-wrapper{
    align-items: stretch;
  }
`
