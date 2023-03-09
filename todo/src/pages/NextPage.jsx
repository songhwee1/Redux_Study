import React from 'react'
import { useSelector } from 'react-redux'

const NextPage = () => {
  const count = useSelector(state => state.counter.value)
  return (
    <div>
      <span>{count}</span>
    </div>
  )
}

export default NextPage