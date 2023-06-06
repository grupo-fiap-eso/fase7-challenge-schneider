import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lora', serif;
  }

  body{
    background-color: #3b8d1814;
  }
  nav{
    min-height: 65px;
    align-items: center;
    padding: 15px 100px;
    font-size: 12px;
  }

  .navbar{
    background-color: #3b8d18 
  }

  nav .busca{
    position: relative;
    width: 200px;
    height: 30px;
  }

  nav .busca input{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: #1717173e;
    outline: none;
    border: 1px solid #ffffffbb;
    border-radius: 5px;
    padding: 0 10px 0 35px;
  }

  nav .busca input::placeholder{
    color: #fff;
    padding: 6px;

  }

  nav .busca .fa-sharp{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    color: #fff;
    border-right: 1px solid #fff;
    padding-right: 10px;
  }

  .nav-item .icone{
    color: #ffffffc5;
  }

  .primeira-secao{
    margin-top: 11%;
    margin-inline: 4em;
    background-color: #3b8d184d;
    box-sizing: border-box;
    display: block;
  }

  .p-md-5{
    padding: 3rem;
  }

  .rounded{
    border-radius: 20px;
  }

  .p-4{
    padding: 1.5rem;
  }
  .mb-4{
    margin-bottom: 1.5rem;
  }

  .link1{
    text-decoration: none;
    color: #183909;
    font-weight:400;
  }

  .segunda-secao{
    margin-top: 100px;
    margin-inline: 3em;
    box-sizing: border-box;
  }

  .terceira-secao{
    margin-top: 90px;
    margin-inline: 3em;
  }

  button {
    padding: 7px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .home-artigos{
    padding: 0;
    position: relative;
  }

  .row {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card {
    border-radius: 5px;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
    padding: 30px;
    margin: 20px;
    width: 300px;
    transition: all 0.3s ease-out;
  }

  .card:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
   
  .card p {
    color: #a3a5ae;
    font-size: 16px;
  }
   
  .image {
    float: right;
    max-width: 100%;
    max-height: 100%;
  }

  .green {
    border-left: 3px solid #3bb54a;
  }

  .home-sobre-nos{
    margin-top: 8%;
    margin-inline: 4em;
    box-sizing: border-box;
    display: block;
  }

  div .comunidade{
    margin-top: 5%;
    background-color: #dfecf84d;
    border-radius: 20px;
    padding-bottom: 60px;
  }


  div .comentarios{
    width: 70%;
    padding: 20px;
    background-color: #fffffff9;
    border: 2px solid #aaabab57;
    margin-left: 16%;
  }
  .titulo-comunidade{
    margin: 5%;
    color: #2d2c2cef;
  }

  footer{
    width: 100%;
    bottom: 0;
    position: relative;
    background: linear-gradient(to right, #1d5207, #091b01);
    color: #fff;
    padding: 100px 0 30px;
    font-size: 13px;
    line-height: 20px;
  }

  footer .row{
    width: 80%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  }

  footer .col{
    flex-basis: 25%;
    padding: 10px;
  }

  footer .logo-footer{
    width: 40%;
    margin-bottom: 30px;
  }

  footer .col h4{
    width: fit-content;
    margin-bottom: 40px;
    position: relative;
  }

  footer ul li{
    list-style: none;
    margin-bottom: 12px;
  }

  footer ul li a{
    text-decoration: none;
    color: #fff;
  }

  .icons-footer i{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    font-size: 10px;
    color: #a3a5ae;
    background: #fff;
    margin-left: 10px;
  }
`
export default globalStyle
