import React, { useState, useContext, useEffect } from 'react'
import { ContextApp } from '../Context';


//Aqui se usa props para despues llamar a la funcion addTransaction
function Transaction() {

  const {addTransaction, totalBalance} = useContext(ContextApp);
  const [text, setText] = useState(""); //Estado para el texto de las transacciones
  const [amount, setAmount] = useState(''); //Estado para el monto de las transacciones
  const [isEmpty, setIsEmpty] = useState(true); // isEmpty indica si los campos text y amount estan vacios
  const [inputClear, setInputClear] = useState(false) //Estado para limpiar los inputs, se declara false cuando esta limpio


  //El useEffect se activa cuando los valores de text o cost cambian y actualizan el estado de isEmpty segun si los campos estan vacios
  useEffect(()=>{
    setIsEmpty(text === '' || amount === '')
  },[text, amount]);


  //Funcion para agregar una transaccion
  // Se crea la funcion pushArray que cre un objeto newTransaction y luego llama a la la funcion addTransaction para agregarlo a la lista de transacciones
  function pushArray(){
    const newTransaction = {texto: text, amount: amount};
    if (amount < 0 && Math.abs(amount) > totalBalance){
      alert("¡No tienes dinero suficiente para realizar este gasto!. Vuelve a intentarlo luego de inregar dinero.")
    }else{
      addTransaction(newTransaction);
      setInputClear(true); //Una vez llenado los inputs el estado de este cambia a true
    }

  }

  //Usamos un useEffect para verificar si inputClear es true, si es asi limpia los input de text y amount, y establece inputClear en false para indicar que se realizo la limpieza
  useEffect(()=>{
    if(inputClear){
      setText('');
      setAmount('');
      setInputClear(false);
    }
  }, [inputClear])

  return (
    <>

        <h1>Add new transaction</h1>
        <form>
            <label htmlFor="">Texto</label>
            <input type="text" name="" placeholder='Enter text' value={text} onChange={(e) => setText(e.target.value)}/>
            <label htmlFor="">Amount (negative - expense, positive - income)</label>
            <input type="number" placeholder='Enter Amount' value={amount} onChange={(e)=> setAmount(e.target.value)}/>
            <button type='button' onClick={pushArray} disabled={isEmpty} >Add Transaction</button>
        </form>
    </>
  )
}

export default Transaction


