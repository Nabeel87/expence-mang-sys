import React from 'react'

export const AddTransation = () => {
  return (
    <div>
        <h3>Add New Transation</h3>
        <form>
          <div className="form-control">
            <label htmlFor="description">

            </label>
            <input type="text" placeholder="Details of Transaction" />
          </div>
          <div className="form-control">
            <label htmlFor="transactionamount">

            </label>
            <input type="text" placeholder="Amount of transaction" />
          </div>
          <button className="btn"> Add Transaction</button>
        </form>
    </div>
  )
}
