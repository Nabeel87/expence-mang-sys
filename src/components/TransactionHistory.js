import React, {useContext} from 'react'

import { GlobalContext } from '../context/GlobalState'

export const TransactionHistory = () => {

  const {transactions} = useContext(GlobalContext);
  console.log(transactions);
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
