import Header from "./components/header"
import Balance from "./components/Balance"
import BalanceDetail from "./components/BalanceDetail"
import History from "./components/History"
import Transaction from "./components/Transaction"
import { useState } from "react"


function App() {

  const [transactions, setTransactions] = useState([])
  const [incomes, setIncomes] = useState([])
  const [expenses, setExpenses] = useState([])


  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction])
    if (transaction.amount > 0) {
      setIncomes((prevIncomes) => [...prevIncomes, transaction.amount])
    } else{
      setExpenses((prevExpenses) => [...prevExpenses, Math.abs(transaction.amount)])
    }
  }

  const totalIncomes = incomes.map(Number).reduce((acc, curr) => acc + curr, 0)
  const totalExpenses = expenses.map(Number).reduce((acc, curr) => acc + curr, 0)  
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
