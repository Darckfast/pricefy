import React, { useEffect, useState } from 'react'
import {
  RecentContainer,
  RecentSpan,
  RecentStore
} from '../styles/components/PreviousItems'

type PreviousItemsType = {
  desc: string
  productId: string
  store: string
  addEvent?: (itemInfo) => void
}

const PreviousItems: React.FC<PreviousItemsType> = ({
  desc,
  productId,
  store,
  addEvent
}) => {
  const [itemInfo, setItemInfo] = useState(null)
  const [active, setAcivte] = useState(false)

  useEffect(() => setItemInfo({ desc, productId, store }), [])

  const changeState = () => {
    setAcivte(active => !active)

    addEvent(itemInfo)
  }

  return (
    <RecentContainer onClick={changeState} className={active ? 'active' : ''}>
      <RecentStore>{itemInfo?.store}</RecentStore>
      <RecentSpan>{itemInfo?.desc}</RecentSpan>
    </RecentContainer>
  )
}

export default PreviousItems
