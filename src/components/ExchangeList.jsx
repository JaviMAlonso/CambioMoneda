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
        <div className='row col-2 card-container'>

            {exchanges.map((exchange) => (
                <div key={exchange.id} className='d-flex card'>
                    <div className='col-3'>
                        <img className="banderas" src={`./img/flags/${currencies[exchange.codOrigen].flag}`} alt={exchange.codOrigen} />
                        <p>{exchange.amount} {exchange.codOrigen}</p>
                    </div>
                    <div className='col-3'>
                        <img src="../img/flechas.png" alt="" />
                    </div>
                    <div className='col-3'>
                        <img className="banderas" src={`./img/flags/${currencies[exchange.codDest].flag}`} alt={exchange.codDest} />
                        <p>{(exchange.amount * currencies[exchange.codDest].exchangeRate / currencies[exchange.codOrigen].exchangeRate).toFixed(2)} {exchange.codDest}</p>
                    </div>
                    <button onClick={() => handleDelete(exchange.id)} className="delete-button">⌧</button>
                </div>
            ))}
        </div>
    )
}