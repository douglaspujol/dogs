import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }
  *:focus{
    outline:0;
  }
  html, body , #hoot{
    height:100%;
  }
  body{
    -webkit-font-smoothing: antialiased;
    padding-top:4rem;
  }
  body, input, button{
    --type-first:Helvetica, Arial, sans-serif;
    --type-second:'Spectral', Georgia;
    font-family:var(--type-first);
    color:#393d40;
  }
  a{
    text-decoration:none;
  }
  ul{
    list-style:none;
  }
  button, input{
    font-size:1rem;
    cursor:pointer;
  }
  img{
    display:block;
    max-width:100%;
  }
  .container{
    max-width:50rem;
    padding: 0 1rem;
    margin:0 auto;
  }

`;
