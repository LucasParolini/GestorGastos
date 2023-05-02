import React from 'react'

function HistoryItem(props) {
  console.log("detalle", props)
  return (
    <div>
      <h1>{props.detalleGasto}</h1>
      <p>{props.montoGasto}</p>
    </div>
  )
}

export default HistoryItem
