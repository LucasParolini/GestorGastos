import React from 'react';

function HistoryItem(props) {
  const { nombreGasto, amount } = props;
  const signo = amount < 0 ? "Gastaste -" : "Ganaste +";

  return (
    <div>
      En: {nombreGasto} <span>{signo} ${Math.abs(amount)}</span>
    </div>
  );
}

export default HistoryItem;