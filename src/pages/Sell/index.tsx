import Meta from '../../components/Head/Meta'

import Link from '../../components/Head/Link'

import Title from '../../components/Head/Title'

import SellClient from '../../components/Sell'

import GlobalStyle from '../global'

export default function Home() {
  return (
    <>
      <Meta />
      <Link />
      <Title name="Venda" />
      <GlobalStyle />
      <SellClient />
    </>
  )
}
