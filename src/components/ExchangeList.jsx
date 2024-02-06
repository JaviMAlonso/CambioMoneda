import React from 'react'

export default function ExchangeList({ exchanges }) {
    return (
        <div>
            <h2>Exchange List</h2>
            <ul>
                {exchanges.map((exchange) => (
                    <li key={exchange.id}>
                        <img src="../img/flags/${exchange.originCurrency.flag}" alt="" />,
                        <strong> Amount:</strong> {exchange.amount},
                        <img src="../img/flechas.png" alt="" />
                        <img src="../img/flags/${exchange.destinyCurrency.flag}" alt="" />,
                        <strong> Result:</strong> {exchange.result}
                    </li>
                ))}
            </ul>
        </div>
    )
}