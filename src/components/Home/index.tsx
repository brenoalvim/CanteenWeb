import { Div } from './styles'

export default function Homepage() {
  return (
    <Div>
      <div className="icon pattern">
        <img src="icons/house-solid.svg" alt="" />
      </div>
      <div className="hr"></div>
      <div className="buttons pattern">
        <div className="button pattern main-button">
          <a href="/Sell">
            <button>
              <strong>Vender</strong>
            </button>
          </a>
        </div>
        <div className="button pattern">
          <a href="#">
            <button>Caixa</button>
          </a>
        </div>
        <div className="button pattern">
          <a href="#">
            <button>Relatório</button>
          </a>
        </div>
        <div className="button pattern">
          <a href="#">
            <button>Cardápio</button>
          </a>
        </div>
        <div className="button pattern">
          <a href="#">
            <button>Configuração</button>
          </a>
        </div>
      </div>
    </Div>
  )
}
