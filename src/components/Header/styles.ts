import styled from 'styled-components'

export const Div = styled.div`
  border-bottom: 1px solid var(--light-color);
  justify-content: space-around;
  color: var(--light-color);
  align-items: center;
  font-weight: bold;
  padding-top: 5px;
  display: flex;
  height: 10vh;
  width: 100%;

  button {
    background: var(--light-color);
    border-radius: 50%;
    outline: none;
    height: 42px;
    border: none;
    width: 42px;
  }

  button img {
    width: 25px;
  }
`
