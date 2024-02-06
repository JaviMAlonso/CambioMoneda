//funcion de borrar el card: "onEraseExchange"
//exchanges.map(exchange) => <ExchangeCard exchange={exchange} _ _ _ />

//////////////////////////////////////////////////////////////////////////////////////
// props:
// currencies, onEraseExchange,
// exchange( un card por cada exchange que exista)
/////////////////////////////////////////////////////////////////////////////////////
import React from 'react'

export default function ExchangeCard({ exchange, onDeleteExchange, exchangeRates }) {
    const { id, originCurrency, destinyCurrency, amount } = exchange

    // Calcular el resultado basado en los tipos de cambio
    const result = (amount * exchangeRates[originCurrency][destinyCurrency]).toFixed(2)

    const handleDelete = () => {
        onDeleteExchange(id)
    }

    return (
        <div className="exchange-card">
            <div>
                <span>From: {originCurrency}</span>
                <span>To: {destinyCurrency}</span>
            </div>
            <div>
                <span>Amount: {amount}</span>
                <span>Result: {result}</span>
            </div>
            <button onClick={handleDelete} className="delete-button">Delete</button>
        </div>
    );
}