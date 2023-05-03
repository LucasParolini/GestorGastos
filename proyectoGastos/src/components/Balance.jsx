import React, { useState } from 'react'


function Balance({totalBalance}) {

  return (
    <div>
        <h3>Your Balance</h3>
        <h4>${totalBalance}</h4>
    </div>
  )
}

export default Balance
