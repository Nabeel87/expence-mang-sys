import React, { useState } from 'react'

export const AddTransation = () => {

  const [description, setDescription] = useState('');
  const [transactionAmount, setTransactionAmount] = useState(0);
  return (
    <div>
      <h3>Add New Transation</h3>
      <form>
        <div className="form-control">
          <label htmlFor="description">

          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Details of Transaction" />
        </div>
        <div className="form-control">
          <label htmlFor="transactionamount">

          </label>
          <input
            type="number"
            id="transactionamount"
            value={transactionAmount}
            onChange={(e)=> setTransactionAmount(e.target.value)}
            placeholder="Amount of transaction" />
        </div>
        <button className="btn"> Add Transaction</button>
      </form>
    </div>
  )
}
