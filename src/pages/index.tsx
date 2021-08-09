import React, { useEffect } from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import { ToggleTheme } from '../components/ToggleTheme'
import BarChart from '../components/charts/BarChart'
import { useState } from 'react'
import { format, toDate } from 'date-fns'

const Home: React.FC<any> = (props) => {
  const [items, setItems] = useState([{ store: '', date: null, price: 0 }])

  useEffect(() => {
    // getData({
    //   path: '/product',
    //   params: {
    //     "products": [
    //       {
    //         "store": "kabum",
    //         "ids": [
    //           129451,
    //           180539,
    //           135871,
    //           110397,
    //           134253,
    //           108085,
    //           99799,
    //           165712
    //         ]
    //       },
    //       {
    //         "store": "pichau",
    //         "ids": [
    //           "100-000000065"
    //         ]
    //       }
    //     ]
    //   }
    // }).then(({ data: items }) =>
    //   setItems(items.map(item => ({ ...item, date: format(toDate(item.date), 'MM/dd/yyyy') })))
    // )
  }, [])




  return (
    <Container>
      <Head>
        <title>NextJS Template with Typescript</title>
      </Head>

      <main>
        <ToggleTheme />

        {/* <BarChart chartData={items} /> */}
      </main>
    </Container>
  )
}

export default Home
