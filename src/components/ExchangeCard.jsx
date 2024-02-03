import React from 'react'

//funcion de borrar el card: "onEraseExchange"
//exchanges.map(exchange) => <ExchangeCard exchange={exchange} _ _ _ />

//////////////////////////////////////////////////////////////////////////////////////
// props:
// currencies, onEraseExchange,
// exchange( un card por cada exchange que exista)
/////////////////////////////////////////////////////////////////////////////////////
const ExchangeCard = ({ exchange, onDeleteExchange, exchangeRate }) => {
    const { originCurrency, destinyCurrency, amount } = exchange;

    const handleDeleteExchange = () => {
        // Llamar a la función proporcionada por el padre para eliminar el cambio
        onDeleteExchange(exchange);
    };

    const calculateConvertedAmount = () => {
        // Verificar que las monedas de origen y destino existan en el diccionario de conversiones
        if (originCurrency in exchangeRate && destinyCurrency in exchangeRate) {
            // Calcular la cantidad convertida
            const rate = exchangeRate[destinyCurrency] / exchangeRate[originCurrency];
            const convertedAmount = amount * rate;
            return convertedAmount.toFixed(2); // Redondear a dos decimales
        }
    };

    return (
        <div className="exchange-card">
            <p>Moneda de origen: {originCurrency} Cantidad: {amount}</p>
            <p>Moneda de destino: {destinyCurrency} Cantidad convertida: {calculateConvertedAmount()}</p>
            <button onClick={handleDeleteExchange}><i class="fa fa-remove" aria-hidden="true"></i></button>
        </div>
    );
};

export default ExchangeCard;