import React from 'react'
import HistoryItem from './HistoryItem'
import { useContext } from 'react'
import { ContextApp } from '../Context'

function History() {

    const {transactions} = useContext(ContextApp);

    return (
        <div>
            <h3>Historial de Transacciones</h3>
            <ul>
                {transactions && transactions.map((item, index) => (
                    <HistoryItem key={index} nombreGasto={item.texto} amount={item.amount} />
                ))}
            </ul>
        </div>

    )
}

export default History
