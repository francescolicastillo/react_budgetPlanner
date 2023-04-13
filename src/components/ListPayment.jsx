import React from 'react'
import Payment from './Payment'

const ListPayment = ({
  payments, 
  setStatePayment, 
  deletePayment,
  filter,
  filteredSpends
}) => {
  return (
    <div className='list-expenses container'>
        

        { filter ? (
          <>
          <h2>{filteredSpends.length ? "Transactions" : "Don't exist transactions"}</h2>

          {filteredSpends.map( payment => (
            <Payment 
              key={payment.id}
              payment={payment}
              setStatePayment={setStatePayment}
              deletePayment={deletePayment}
            />))}
            </> 
        ) : (
          <>
            <h2>{payments.length ? "Transactions" : "Don't exist transactions"}</h2>

            {payments.map( payment => (
              <Payment 
                key={payment.id}
                payment={payment}
                setStatePayment={setStatePayment}
                deletePayment={deletePayment}
              />
            ))}
          </>
        )}
    </div>
  )
}

export default ListPayment