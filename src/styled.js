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
