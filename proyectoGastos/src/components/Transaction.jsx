import React from 'react'

function Transaction() {
  return (
    <>
        <h1>Add new transaction</h1>
        <form>
            <label htmlFor="">Texto</label>
            <input type="text" name="" id="" placeholder='Enter text'/>
            <label htmlFor="">Amount (negative - expense, positive - income)</label>
            <input type="number" placeholder='Enter Amount'/>
            <button type='button'>add transaction</button>
        </form>
    </>
  )
}

export default Transaction
