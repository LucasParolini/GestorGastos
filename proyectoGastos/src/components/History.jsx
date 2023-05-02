import React from 'react'
import HistoryItem from './HistoryItem'

function History(props) {
    const [detail, setDetail] = useState([])

    const addDetail = props =>{
        setDetail([...detail, {id: props.id, detalleGasto: props.detalleGasto, montoGasto: props.montoGasto}])
    }


    return (
        <>
            <HistoryItem addDetail={addDetail}/>
        </>

    )
}

export default History
