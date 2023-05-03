import React from 'react'

function HistoryItem(props) {

  const signo = props.costoGasto < 0 ? "Gastaste -" : "Ganaste +"

  return (
    <div>
      en: {props.nombreGasto} <span>{signo} ${Math.abs(props.costoGasto)}</span>
    </div>
  )
}

export default HistoryItem
