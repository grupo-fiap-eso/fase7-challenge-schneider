import styled from 'styled-components'

export const HeaderStyle = styled.div`
  header {
    width: 100%;
    color: white;
    min-height: 50px;
    background-color: #f3f2f2;
  }
  .logo-container{
    float: left;
    padding: 5px;
  }
  .logo-container img {
    height: 35px;
  }

  .flags-container {
    float: right;
    margin-right: 15px;
  }

  .flag {
    width: 30px;
    height: 30px;
    margin: 10px 3px;
  }
`

export const DivEtiquetas = styled.div`
  *{
    background-color: #174105;gith
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
