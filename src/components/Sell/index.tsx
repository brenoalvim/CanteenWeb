import { Div } from './styles'

import Header from '../Header'

export default function SellClient() {
  return (
    <Div>
      <Header title="Selecionar Cliente" />
      <div className="icon pattern">
        <img src="icons/user-solid.svg" alt="" />
      </div>
      <div className="hr"></div>
      <div className="inputUser pattern">
        <input
          list="userList"
          type="text"
          placeholder="Nome do cliente"
          autoComplete="off"
        />
        <datalist id="userList">
          <option value="Breno Alvim">Breno Alvim</option>
        </datalist>
      </div>
      <div className="hr"></div>
      <div className="buttons pattern">
        <div className="button pattern main-button">
          <a href="/SelectProduct">
            <button>Próximo</button>
          </a>
        </div>
      </div>
    </Div>
  )
}
