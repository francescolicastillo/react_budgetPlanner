import {useState, useEffect, } from 'react'

const ControllerBudget = ({budget, payments}) => {

  const [available, setAvailable] = useState(0);
  const [spend, setSpend] = useState(0);

  const budgetFormat = (budget) => {
    return budget.toLocaleString('en-DE', {
      style: 'currency',
      currency: 'EUR',
    })
  }
  
  useEffect(() => {
    let total = 0;
    payments.forEach((payment) => total += payment.amount); 

    setAvailable(budget - total);
    setSpend(total);
  }, [payments])

  return (
    <div className='container-budget container shadow two-columns'>
      <div>
        <p>Graphic here</p>
      </div>

      <div className='content-budget'>
        <p>
          <span>Budget: </span> {budgetFormat(budget)}
        </p>
        <p>
          <span>Available: </span> {budgetFormat(available)}
        </p>
        <p>
          <span>Spent: </span> {budgetFormat(spend)}
        </p>
      </div>

    </div>
  )
}

export default ControllerBudget