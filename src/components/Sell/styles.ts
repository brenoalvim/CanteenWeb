import styled from 'styled-components'

export const Div = styled.div`
  color: var(--light-color);
  justify-content: center;
  align-items: center;
  list-style: none;
  flex-wrap: wrap;
  display: flex;
  width: 100vw;
  height: 70vh;

  * a {
    text-decoration: none;
  }

  .icon {
    background-color: var(--brand-color);
    border-radius: 50%;
    margin-top: 15px;
    height: 100px;
    width: 100px;
  }

  .icon img {
    width: 60px;
  }

  .buttons {
    width: 100%;
    height: 40%;
    gap: 10px;
  }

  .button {
    cursor: pointer;
  }

  .buttons .button a button {
    border-radius: 10px;
    font-size: 30px;
    cursor: pointer;
    outline: none;
    width: 200px;
    height: 50px;
    border: none;
  }

  .main-button a button {
    background-color: var(--brand-color);
    color: var(--light-color);
  }

  .inputUser {
    margin-top: 50px;
    width: 100%;
  }

  .inputUser input {
    border-radius: 8px;
    outline: none;
    width: 200px;
    height: 35px;
    border: none;
  }

  .inputUser button {
    border: none;
    outline: none;
    cursor: pointer;
    background-color: var(--brand-color);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-left: 5px;
  }

  .inputUser input::placeholder {
    color: var(--dark-color);
    padding-left: 10px;
  }
`
