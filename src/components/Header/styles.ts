import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  padding: 5px;
  font-weight: bold;
  border-bottom: 1px solid var(--light-color);

  button {
    background: var(--light-color);
    border: none;
    border-radius: 50%;
    outline: none;
    width: 42px;
    height: 42px;
  }

  button img {
    width: 25px;
  }
`
