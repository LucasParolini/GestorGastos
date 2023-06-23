import Header from "./components/header"
import Balance from "./components/Balance"
import BalanceDetail from "./components/BalanceDetail"
import History from "./components/History"
import Transaction from "./components/Transaction"
import { useState } from "react"


function App() {

  const [transactions, setTransactions] = useState([]) //Estado para las transacciones
  const [incomes, setIncomes] = useState([]) //Estado para los ingresos
  const [expenses, setExpenses] = useState([]) //Estado para los gastos


  //Funcion para agregar una transaccion
  //transaction representa la nueva transaccion a agregar
  const addTransaction = (transaction) => {
    // se utiliza el setTransaction para actualizar el estado de transactions, tmb se utiliza el operador de progacion (...) para crear un array que contenga los elem actuales de transactions y agregue a la lista el nuevo objeto transaction 
    setTransactions([...transactions, transaction])
    // se verifica el monto de la transaccion para saber si es un ingreso o un egreso
    if (transaction.amount > 0) {
      //se utiliza setIncomes para actualizar el estado incomes. Se pasa una función de flecha como argumento a setIncomes, que recibe el estado anterior (prevIncomes) y devuelve una nueva matriz que contiene los elementos actuales de prevIncomes y agrega el monto de la transacción al final.
      setIncomes((prevIncomes) => [...prevIncomes, transaction.amount])
    } else{
      // aqui tambien se usa el .abs para obtener el valor absoluto del monto, eliminaria el singo - 
      setExpenses((prevExpenses) => [...prevExpenses, Math.abs(transaction.amount)])
    }
  }

  
  // Cálculo de totales

  // Esta línea de código calcula el total de ingresos sumando todos los elementos del array incomes. 
  //Primero, se utiliza map(Number) para convertir cada elemento del array incomes en un número, ya que inicialmente podría contener strings. 
  //Luego, se utiliza reduce() para sumar todos los elementos del array. 
  //El parámetro (acc, curr) => acc + curr es una función de reducción que suma el acumulador (acc) con el elemento actual (curr). 
  //El segundo argumento de reduce() es el valor inicial del acumulador, en este caso, 0.
  const totalIncomes = incomes.map(Number).reduce((acc, curr) => acc + curr, 0)
  //Calculo similar al anterior pero de egresos
  const totalExpenses = expenses.map(Number).reduce((acc, curr) => acc + curr, 0)  
  //Aqui se calcula el saldo restante de ingresos y egresos, se usa el parseFloat para convertir el numero en un numero flotante y el toFixed(2) para redondear el numero a dos decimales
  const totalBalance = parseFloat(totalIncomes - totalExpenses).toFixed(2);


  return (
    <>
      <Header />
      <Balance totalBalance={totalBalance} />
      <BalanceDetail totalIncomes={totalIncomes} totalExpenses={totalExpenses} />
      <History transactions={transactions} />
      <Transaction addTransaction={addTransaction} />
    </>
  )
}

export default App
