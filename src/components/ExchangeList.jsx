import React from 'react'
import '../App.css'

// Al crear la funcion gorda de exchangeList se le pasan los 3 parametros que le escibimos en el return de App.jsx 
export default function ExchangeList({ exchanges, currencies, setExchanges }) {
    // esto lo usé a modo de Debug para comprobar qué fallaba 
    // exchanges.forEach(exchange => {
    //     console.log(" Origen " + exchange.codOrigen)
    //     console.log(" Destino " + exchange.codDest)
    // });

    // handle que se encarga de borrar por id
    const handleDelete = (id) => {
        // se declara una variable con nombre cualquiera y lo de filter no se como va al 100%
        // creo que es como un forEach pero lo que le pongas detrás de la flecha actua como un if y si coincide, 
        // lo quita del array
        const newExhanges = exchanges.filter(exchange => exchange.id !== id)
        // se le dice a newExchanges que ahora ha perdido un hijo porq si y q lo cambie o se le parten las piernas
        setExchanges(newExhanges)
    }
    // return con puro CSS para que se vea parecido a Figma
    // el exchange map funciona similar a un forEach
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