import Meta from '../../components/Head/Meta'

import Link from '../../components/Head/Link'

import Title from '../../components/Head/Title'

import SelectProduct from '../../components/Product/Select'

import GlobalStyle from '../global'

export default function Home() {
  return (
    <>
      <Meta />
      <Link />
      <Title name="Listar Usuários" />
      <GlobalStyle />
      <SelectProduct />
    </>
  )
}
