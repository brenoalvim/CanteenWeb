import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw;
  height: 70vh;
  color: var(--light-color);
  list-style: none;

  * a {
    text-decoration: none;
  }

  .icon {
    width: 100px;
    height: 100px;
    margin-top: 15px;
    background-color: var(--brand-color);
    border-radius: 50%;
  }

  .icon img {
    width: 80px;
  }

  .buttons {
    width: 100%;
    height: 100%;
    gap: 10px;
  }

  .buttons .button a button {
    width: 200px;
    height: 50px;
    font-size: 30px;
    border: none;
    outline: none;
    border-radius: 10px;
  }

  .main-button a button {
    background-color: var(--brand-color);
    color: var(--light-color);
  }
`
