import { useState } from 'react'
import Header from './components/Header'
import ListPayment from './components/ListPayment';
import Modal from './components/Modal';
import IconPayment from './img/new-payment.svg'

function App() {

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [formModal, setFormModal] = useState(false);
  const [payments, setPayments] = useState([]);

  const handlePayment = () => {
    setModal(true);

    setTimeout(()=> {
      setFormModal(true);
    }, 800)
  }

  const savePayment = payment => {
    setPayments([...payments, payment]);
  }


  return (
      <div className={modal ? 'fix' : undefined} >
        <Header 
          budget={budget}
          setBudget={setBudget}
          isValidBudget={isValidBudget}
          setIsValidBudget={setIsValidBudget}
          payments={payments}
        />

        {isValidBudget && (
          <>
            <main>
              <ListPayment 
                payments={payments}
              />
            </main>
            <div className='new-expense'>
              <img 
                src={IconPayment} 
                alt="New payment's Icon" 
                onClick={handlePayment}
              />
            </div>
          </>
        )}

        {modal && <Modal 
                    setModal={setModal}
                    formModal={formModal}
                    setFormModal={setFormModal}
                    savePayment={savePayment}
                  />}

      </div>
  )
}

export default App
