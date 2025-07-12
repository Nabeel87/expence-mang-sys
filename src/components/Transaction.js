import React from "react";

export const Transaction = ({transaction}) =>{

    const sign = transaction.transactionAmount > 0 ?'+' : '-';
    const transactiontype = transaction.transactionAmount > 0 ? 'plus' : 'minus';

    return(
        <li className={transactiontype}>
                {transaction.description}
                <span>{sign}{Math.abs(transaction.transactionAmount)}</span>
                <button className="delete-btn">X</button>
            </li>
    )
}