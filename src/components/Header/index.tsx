import { Div } from './styles'

interface HeaderProps {
  title: string
}

export default function Header(props: HeaderProps) {
  function returnPage() {
    window.history.back()
  }

  return (
    <Div>
      <button onClick={returnPage}>
        <img src="icons/arrow-left-solid.svg" alt="" />
      </button>
      <span>{props.title}</span>
    </Div>
  )
}
