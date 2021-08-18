import React, { useState, useEffect } from 'react'
import { DoubleCheckComponent } from '../styles/components/DoubleCheck'

type DoubleCheckProps = {
  execOnConfirm?: () => void
}

const DoubleCheck: React.FC<DoubleCheckProps> = ({
  execOnConfirm,
  children
}) => {
  const [confirm, setConfirm] = useState(false)
  let timeoutRef = null

  const doConfirm = () => {
    if (confirm) {
      setConfirm(false)

      return execOnConfirm()
    }

    setConfirm(true)
    timeoutRef = setTimeout(() => setConfirm(false), 1500)

    console.log('referencia', timeoutRef)
  }

  useEffect(() => console.log(confirm), [confirm])
  useEffect(() => {
    return () => {
      console.log('cleaning up', timeoutRef)
      if (timeoutRef) {
        clearTimeout(timeoutRef)
      }
    }
  }, [])

  return (
    <DoubleCheckComponent
      className={confirm ? 'waiting' : ''}
      onClick={doConfirm}
    >
      {children}
    </DoubleCheckComponent>
  )
}

export default DoubleCheck
