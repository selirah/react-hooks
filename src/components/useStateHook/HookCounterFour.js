import React, { useState } from 'react'

// useState Hook with arrays

function HookCounterFour() {
  const [items, setItems] = useState([])

  const addItem = () => {
    setItems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10) + 1 }
    ])
  }

  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <u>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </u>
    </div>
  )
}

export default HookCounterFour
