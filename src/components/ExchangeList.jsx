import React from 'react'
import '../App.css'

export default function ExchangeList({ exchanges, currencies, setExchanges }) {
    exchanges.forEach(exchange => {
        console.log(" Origen " + exchange.codOrigen)
        console.log(" Destino " + exchange.codDest)
    });
    // Calcular el resultado basado en los tipos de cambio
    // const convert = (amount * currencies[exchange.codDest].exchangeRate / currencies[exchange.codOrigen].exchangeRate).toFixed(2)
    //{(exchange.amount * currencies[exchange.codDest].exchangeRate / currencies[exchange.codOrigen].exchangeRate).toFixed(2)}
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
                        <img className="banderas" src={`./img/flags/${currencies[exchange.codOrigen].flag}`} alt={exchange.codOrigen} />
                        <strong>{exchange.amount}</strong>
                        <img src="../img/flechas.png" alt="" />
                        <img className="banderas" src={`./img/flags/${currencies[exchange.codDest].flag}`} alt={exchange.codDest} />
                        <strong>{(exchange.amount * currencies[exchange.codDest].exchangeRate / currencies[exchange.codOrigen].exchangeRate).toFixed(2)}</strong>
                        <button onClick={() => handleDelete(exchange.id)} className="delete-button">Delete</button>
                    </li>
                ))}

            </ul>
        </div>
    )
}