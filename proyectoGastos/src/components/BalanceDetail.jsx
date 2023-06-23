import React from 'react'
import { useContext } from 'react'
import { ContextApp } from '../Context'

function BalanceDetail() {

    const { totalIncomes, totalExpenses } = useContext(ContextApp);

    return (
        <>
            <div>
                <h3>INCOME</h3>
                <p>${totalIncomes}</p>
            </div>
            <div>
                <h3>EXPENSE</h3>
                <p>${totalExpenses}</p>
            </div>
        </>
    )
}

export default BalanceDetail
