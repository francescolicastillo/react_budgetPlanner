import {useState, useEffect, } from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControllerBudget = ({
    budget, 
    setBudget,
    payments,
    setPayments,
    setIsValidBudget
  }) => {

  const [available, setAvailable] = useState(0);
  const [spend, setSpend] = useState(0);
  const [percent, setPercent] = useState(0);
  
  useEffect(() => {
    let totalSpend = 0;
    payments.forEach((payment) => totalSpend += payment.amount); 
    const totalAvailable = budget - totalSpend;
    const newPercent = (((budget - totalAvailable)/budget)*100).toFixed(2);

    setAvailable(totalAvailable);
    setSpend(totalSpend);
    setTimeout( () => {
      setPercent(newPercent);
    }, 1000);
  }, [payments])

  const budgetFormat = (budget) => {
    return budget.toLocaleString('en-DE', {
      style: 'currency',
      currency: 'EUR',
    })
  }

  const handleResetApp = () => {
    const reset = confirm("Do you want to reset the Budget and Transactions?");
    if(reset) {
      setBudget(0);
      setPayments([]);
      setIsValidBudget(false);
    }
  }

  return (
    <div className='container-budget container shadow two-columns'>
      <div>
        <CircularProgressbar  
          styles={buildStyles({
            pathColor: available < 0 ? 'red' : '#3B82F6',
            trailColor: '#F5F5F5',
            textColor: available < 0 ? 'red' : '#3B82F6',
          })}
          value={percent}
          text={`${percent}% Spend`}

        />
      </div>

      <div className='content-budget'>
        <button
          className='reset-app'
          type='button'
          onClick={handleResetApp}
        >
          Reset App
        </button>
        <p>
          <span>Budget: </span> {budgetFormat(budget)}
        </p>
        <p className={available < 0 ? 'negativ' : ''}>
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