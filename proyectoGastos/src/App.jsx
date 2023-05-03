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


  const addTransaction = (transaction) =>{
    setTransactions([...transactions, transaction])
  }

  return (
    <>
    <Header/>
    <Balance/>
    <BalanceDetail incomes={incomes} expenses={expenses}/>
    <History transactions = {transactions}/>
    <Transaction addTransaction={addTransaction}/>
    </>
  )
}

export default App
