import React, { useState } from 'react'

function Transaction(props) {

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  function pushArray(){
    const newTransaction = {texto: text, amount: amount};
    console.log(newTransaction)  
    props.addTransaction(newTransaction);

  }



  return (
    <>

        <h1>Add new transaction</h1>
        <form>
            <label htmlFor="">Texto</label>
            <input type="text" name="" placeholder='Enter text' value={text} onChange={(e) => setText(e.target.value)}/>
            <label htmlFor="">Amount (negative - expense, positive - income)</label>
            <input type="number" placeholder='Enter Amount' value={amount} onChange={(e)=> setAmount(e.target.value)}/>
            <button type='button' onClick={pushArray}>add transaction</button>
        </form>
    </>
  )
}

export default Transaction
