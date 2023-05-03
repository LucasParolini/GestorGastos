import React from 'react'

function BalanceDetail({ totalIncomes, totalExpenses }) {

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
