import React, { useState, useContext } from 'react'
import { ContextApp } from '../Context'

function Balance() {

  const {totalBalance} = useContext(ContextApp);

  return (
    <div>
        <h3>Your Balance</h3>
        <h4>${totalBalance}</h4>
    </div>
  )
}

export default Balance
