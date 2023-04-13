import React from 'react'
import ControllerBudget from './ControllerBudget';
import NewBudget from './NewBudget';

const Header = ({
  budget, 
  setBudget, 
  isValidBudget, 
  setIsValidBudget,
  payments,
  setPayments
}) => {

  return (
    <header>
        <h1>Budget planner</h1>

        {isValidBudget ? (
            <ControllerBudget 
              budget={budget}
              setBudget={setBudget}
              payments={payments}
              setPayments={setPayments}
              setIsValidBudget={setIsValidBudget}
            />
          ) : (
            <NewBudget 
              budget={budget}
              setBudget={setBudget}
              setIsValidBudget={setIsValidBudget}
            />
          )
        }  
    </header>
  )
}

export default Header;