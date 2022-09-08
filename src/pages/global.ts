import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    scroll-behavior: smooth;
  }
   body{
    margin: 0;
    padding: 0;
    background-color: var(--dark-color); 
  }
  .pattern {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .hr{
    width: 100%;
    height: 1px;
    background-color: #00000000;
  }
  .border{
    border: 1px solid red;
  }
  :root {
    --brand-color: #0EA5E9;
    --dark-color: #0F172A;
    --mid-color: #CBD5E1;
    --light-color: #F8FAFC;
    --black-color: #121212;
  }

`
