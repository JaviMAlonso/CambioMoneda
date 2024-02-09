import React from 'react'

export default function ExchangeList({ exchanges, currencies, setExchanges }) {
    // Calcular el resultado basado en los tipos de cambio
    // const convert = (amount * exchangeRates[destinyCurrency] / exchangeRates[originCurrency]).toFixed(2)
    //currencies.filter(currency => currency == exchange.originCurrency);
    const handleDelete = (id) => {
        const newExhanges = exchanges.filter(exchange => exchange.id !== id);
        setExchanges(newExhanges)
    }

    return (
        <div>
            <h2>Exchange List</h2>
            <ul>
                {exchanges.map((exchange) => (
                    <li key={exchange.id} className='d-flex'>
                        <strong> Origen:</strong> {exchange.codOrigen}
                        <img src={`/img/flags/${currencies[exchange.originCurrency]}`} alt={exchange.codOrigen} />,
                        <strong> Amount:</strong> {exchange.amount},
                        <img src="./img/flechas.png" alt="" />
                        <strong> Destino:</strong> {exchange.codDest}
                        <img src={`/img/flags/${currencies[exchange.destinyCurrency]}`} alt={exchange.codDest} />,
                        <strong> Result:</strong> {exchange.result}
                        <button onClick={() => handleDelete(exchange.id)} className="delete-button">Delete</button>
                    </li>
                ))}

            </ul>
        </div>
    )
}