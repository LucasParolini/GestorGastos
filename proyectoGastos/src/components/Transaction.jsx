import React, { useState } from 'react'
import HistoryItem from './HistoryItem';

function Transaction({}) {

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);





  return (
    <>

        <h1>Add new transaction</h1>
        <form>
            <label htmlFor="">Texto</label>
            <input type="text" name="" id="" placeholder='Enter text' value={text} onChange={(e) => setText(e.target.value)}/>
            <label htmlFor="">Amount (negative - expense, positive - income)</label>
            <input type="number" placeholder='Enter Amount' value={amount} onChange={(e)=>{setAmount (e.target.value)}}/>
            <button type='button' onClick={a}>add transaction</button>
        </form>
        <HistoryItem id={id} detalleGasto={text} montoGasto={amount}/>
    </>
  )
}

export default Transaction
