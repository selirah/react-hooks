import React, { useState, useEffect } from 'react'

//  useEffect Hook - incorrect dependency

function IntervalHookCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(tick, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const tick = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return <h1>{count}</h1>
}

export default IntervalHookCounter
