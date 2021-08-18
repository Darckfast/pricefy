import { format } from 'date-fns'
import { getItemHistory } from '../history/itemHistory'

const aggregateByDateAndPrice = async products => {
  const histories = await Promise.all(await getItemHistory(products))

  const labels = getAllLabels(histories)
  console.log(labels)
  const historyDataset = histories.map(
    ({ description, prices, productId, store }) => ({
      label: description,
      data: fillData(labels, prices),
      dataId: `${store}-${productId}`
    })
  )

  return {
    labels: Array.from(labels),
    datasets: historyDataset
  }
}

const getAllLabels = histories => {
  return new Set(
    histories
      .map(history =>
        history.prices.map(({ date }) =>
          format(new Date(date), 'MM/dd/yyyy HH:mm')
        )
      )
      .flat()
      .sort()
  )
}

const fillData = (labels, prices) => {
  if (!prices.length) {
    console.log('Nenhum registro encontrado')
    return []
  }

  const data = []
  let { price: currentPrice, date: currentDate } = prices.pop()

  labels.forEach(label => {
    console.log(label, currentPrice)
    data.push(currentPrice)

    if (format(new Date(currentDate), 'MM/dd/yyyy HH:mm') === label) {
      const next = prices.pop()

      if (next) {
        currentDate = next.date
        currentPrice = next.price
      }
    }
  })

  return data
}

export { aggregateByDateAndPrice }
