import React from 'react'
import Payment from './Payment'

const ListPayment = ({payments}) => {
  return (
    <div className='list-expenses container'>
        <h2>{payments.length ? "Gastos" : "Don't exist payments"}</h2>

        {payments.map( payment => (
            <Payment 
            key={payment.id}
            payment={payment}/>
        ))}
    </div>
  )
}

export default ListPayment