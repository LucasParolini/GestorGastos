import React, { useState, useContext } from 'react'
import { ContextApp } from '../Context';


//Aqui se usa props para despues llamar a la funcion addTransaction
function Transaction() {

  const {addTransaction, totalBalance} = useContext(ContextApp);
  const [text, setText] = useState(""); //Estado para el texto de las transacciones
  const [amount, setAmount] = useState(0); //Estado para el monto de las transacciones

  //Funcion para agregar una transaccion
  // Se crea la funcion pushArray que cre un objeto newTransaction y luego llama a la la funcion addTransaction para agregarlo a la lista de transacciones
  function pushArray(){
    const newTransaction = {texto: text, amount: amount};
    console.log(newTransaction)  
    addTransaction(newTransaction);

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
