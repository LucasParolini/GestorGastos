import Header from "./components/header"
import Balance from "./components/Balance"
import BalanceDetail from "./components/BalanceDetail"
import History from "./components/History"
import Transaction from "./components/Transaction"
import { ContextApp } from "./Context"
import { useContext } from "react"
import ProviderApp from "./Context"


function App() {

  const {totalBalance, totalIncomes, totalExpenses, transactions, addTransaction}= useContext(ContextApp);

  return (
    <>
      <ProviderApp>
      <Header />
      <div className="container">
      <Balance totalBalance={totalBalance} />
      <BalanceDetail totalIncomes={totalIncomes} totalExpenses={totalExpenses} />
      <History transactions={transactions} />
      <Transaction addTransaction={addTransaction} />
      </div>

      </ProviderApp>
    </>
  )
}

export default App
