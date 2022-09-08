import { Div } from './styles'

import Header from '../../Header'

export default function SelectProduct() {
  return (
    <Div>
      <Header title="Selecionar Produto" />
      <div className="hr"></div>
      <div className="buttons pattern">
        <div className="button pattern main-button">
          <a href="/">
            <button>Próximo</button>
          </a>
        </div>
      </div>
    </Div>
  )
}
