import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--dark-color); 
    padding: 0;
    margin: 0;
  }

  .pattern {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    display: flex;
  }

  .hr {
    background-color: #00000000;
    width: 100%;
    height: 1px;
  }

  .border {
    border: 1px solid red;
  }

  :root {
    --black-color: #121212;
    --brand-color: #0EA5E9;
    --light-color: #F8FAFC;
    --dark-color: #0F172A;
    --mid-color: #CBD5E1;
  }

`
