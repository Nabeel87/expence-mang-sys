import React from 'react'

export const TransactionHistory = () => {
  return (
    <div>
        <h3>TransactionHistory</h3>
        <ul className="list">
            <li className="plus">
                Salery
                <span>$500</span>
                <button className="delete-btn">X</button>
            </li>
            <li className="minus">
                House Rent
                <span>$100</span>
                <button className="delete-btn">X</button>
            </li>
        </ul>
    </div>
  )
}
