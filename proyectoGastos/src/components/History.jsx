import React from 'react'
import HistoryItem from './HistoryItem'

function History({transactions}) {


    return (
        <div>
            <h3>Historial de Transacciones</h3>
            <ul>
                {transactions && transactions.map((item, index) => (
                    <HistoryItem key={index} nombreGasto={item.texto} costoGasto={item.costo} />
                ))}
            </ul>
        </div>

    )
}

export default History
