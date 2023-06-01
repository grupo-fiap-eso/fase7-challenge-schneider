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

  form{
    width: 50%; padding: 1px; margin 0 auto;
  }
  fieldset{
    padding: 20px;
  }
  legend{
    font-size: 20px; text-align: left; padding: 0px;
  }
  label{
    display: flex; flex-direction: column; margin-bottom: 10px
  }
  input{
    padding: 5px 20px; border-radius: 5px; border: 100x;
  }
`
