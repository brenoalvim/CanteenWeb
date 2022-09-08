import styled from 'styled-components'

export const Div = styled.div`
  border-bottom: 1px solid var(--light-color);
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  display: flex;
  padding: 5px;
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
