import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import {
  Container,
  InputButton,
  InputUrl,
  MainSection,
  RecentSection,
  UrlInputLabel
} from '../styles/pages/Home'
import { ToggleTheme } from '../components/ToggleTheme'
import { Line } from 'react-chartjs-2'
import { LoadingIcon } from '../styles/icons/loadingIcon'
import { CheckIcon } from '../styles/icons/checkIcon'
import { ErrorIcon } from '../styles/icons/errorIcon'
import { useColors } from '../components/hooks/useColors'
import PreviousItems from '../components/PreviousItems'
import {
  formatDataset,
  addByUrl,
  getItemHistory
} from '../services/utils/datasets'
import {
  addItemLocal,
  getItems,
  removeItemLocal
} from '../services/utils/localstorage'
import DoubleCheck from '../components/DoubleCheck'
import { RemoveButton } from '../styles/components/RemoveButton'

const Home: React.FC<any> = () => {
  const [itemUrl, setItemUrl] = useState('')
  const [status, setStatus] = useState(null)
  const [previousItems, setPreviousItems] = useState([])

  const [nextColor] = useColors()
  const [items, setItems] = useState({
    labels: [],
    datasets: []
  })

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false
    },
    stacked: false,
    plugins: {
      legend: {
        position: 'bottom'
      },
      tooltip: {
        mode: 'point'
      }
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left'
      }
    }
  }

  useEffect(() => readLocalItens(), [])

  const addItem = () => {
    setStatus('sending')

    addByUrl(itemUrl)
      .then(async ({ productId, store, description }) => {
        setItems(
          formatDataset(await getItemHistory(productId, store), nextColor)
        )
        setStatus('done')
        const localItem = addItemLocal(productId, store, description)

        setPreviousItems(prev => [...prev, localItem])
        setItemUrl('')
      })
      .catch(err => {
        console.log(err)
        setStatus('error')
      })
  }

  const readLocalItens = () => {
    console.log('reading local itens')
    setPreviousItems(() => getItems())
  }

  const getStatus = () => {
    switch (status) {
      case 'done':
        return <CheckIcon />
      case 'sending':
        return <LoadingIcon />
      case 'error':
        return <ErrorIcon />
      default:
        return ''
    }
  }

  useEffect(() => console.log(items), [items])

  const addRecent = async ({ store, desc, productId }) => {
    const formattedDataset = formatDataset(
      await getItemHistory(productId, store),
      nextColor
    )

    setItems(currentItems => {
      const index = currentItems.datasets.findIndex(
        val => val.dataId === `${store}-${productId}`
      )

      if (index !== -1) {
        currentItems.datasets.splice(index, 1)

        return {
          labels: currentItems.labels,
          datasets: currentItems.datasets
        }
      }

      return {
        datasets: [...currentItems.datasets, ...formattedDataset.datasets],
        labels: Array.from(
          new Set([...currentItems.labels, ...formattedDataset.labels])
        )
      }
    })
  }

  return (
    <Container>
      <Head>
        <title>Pricefy</title>
      </Head>

      <main>
        <MainSection>
          <ToggleTheme />
          <Line data={items} options={options} />

          <UrlInputLabel>
            <InputUrl
              value={itemUrl}
              onChange={e => setItemUrl(e.target.value)}
            />

            <InputButton onClick={addItem}>Procurar</InputButton>

            {getStatus()}
          </UrlInputLabel>

          <RecentSection>
            {previousItems.map(({ desc, store, productId }, index) => (
              <PreviousItems
                key={index}
                desc={desc}
                productId={productId}
                store={store}
                addEvent={addRecent}
                onRemove={readLocalItens}
              />
            ))}
          </RecentSection>
        </MainSection>
      </main>
    </Container>
  )
}

export default Home
