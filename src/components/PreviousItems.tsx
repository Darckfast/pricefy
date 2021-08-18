import React, { useEffect, useState } from 'react'
import { getItems, removeItemLocal } from '../services/utils/localstorage'
import {
  RecentContainer,
  RecentItem,
  RecentSpan,
  RecentStore
} from '../styles/components/PreviousItems'
import { RemoveIcon } from '../styles/icons/removeIcon'
import DoubleCheck from './DoubleCheck'

type PreviousItemsType = {
  desc: string
  productId: string
  store: string
  addEvent?: (itemInfo) => void
  onRemove?: () => void
}

const PreviousItems: React.FC<PreviousItemsType> = ({
  desc,
  productId,
  store,
  addEvent,
  onRemove
}) => {
  const [itemInfo, setItemInfo] = useState(null)
  const [active, setAcivte] = useState(true)

  useEffect(() => setItemInfo({ desc, productId, store }), [])

  const changeState = () => {
    setAcivte(active => !active)

    addEvent(itemInfo)
  }

  const removeItem = () => {
    console.log('removing', itemInfo)
    if (active) {
      addEvent(itemInfo)
    }

    removeItemLocal(itemInfo.productId, itemInfo.store)
    onRemove()
  }

  return (
    <RecentContainer className={active ? 'active' : ''}>
      <RecentItem onClick={changeState}>
        <RecentStore>{itemInfo?.store}</RecentStore>
        <RecentSpan>{itemInfo?.desc}</RecentSpan>
      </RecentItem>
      <DoubleCheck execOnConfirm={removeItem}>
        <RemoveIcon />
      </DoubleCheck>
    </RecentContainer>
  )
}

export default PreviousItems
