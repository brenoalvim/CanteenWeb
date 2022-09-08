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
          <a href="#">
            <button>
              <strong>Vender</strong>
            </button>
          </a>
        </div>
        <div className="button pattern">
          <a href="#">
            <button>
              <strong>Caixa</strong>
            </button>
          </a>
        </div>
        <div className="button pattern">
          <a href="#">
            <button>
              <strong>Relatório</strong>
            </button>
          </a>
        </div>
        <div className="button pattern">
          <a href="#">
            <button>
              <strong>Cardápio</strong>
            </button>
          </a>
        </div>
        <div className="button pattern">
          <a href="#">
            <button>
              <strong>Configuração</strong>
            </button>
          </a>
        </div>
      </div>
    </Div>
  )
}
