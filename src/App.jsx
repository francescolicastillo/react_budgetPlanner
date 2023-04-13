import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import Header from './components/Header'
import ListPayment from './components/ListPayment';
import Modal from './components/Modal';
import IconPayment from './img/new-payment.svg'

function App() {

  const [budget, setBudget] = useState(Number(localStorage.getItem('budget')) ?? 0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [formModal, setFormModal] = useState(false);
  const [payments, setPayments] = useState(JSON.parse(localStorage.getItem('payments')) ?? []);

  const [statePayment, setStatePayment] = useState({});

  const [filter, setFilter] = useState('');
  const [filteredSpends, setFilteredSpends] = useState([]);

  useEffect(() => {
    localStorage.setItem('budget', budget);
  }, [budget]);

  useEffect(()=> {
    if (budget > 0) {
      setIsValidBudget(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('payments', JSON.stringify(payments));
  }, [payments]);

  useEffect( () => {
    if(Object.keys(statePayment).length > 0){
      handlePayment();
    }
  }, [statePayment]);

  useEffect(() => {
    if(filter) {
      const filteredSpends = payments.filter( spend =>spend.category === filter);
      setFilteredSpends(filteredSpends);
    }
  }, [filter])

  const handlePayment = () => {
    setModal(true);

    setTimeout(()=> {
      setFormModal(true);
    }, 800)
  }

  const savePayment = payment => {
    if(statePayment.id){
      const updatedPayments = payments.map( p => p.id === statePayment.id ? payment : p);
      setPayments(updatedPayments);
    }
    else {
      setPayments([...payments, payment]);
    }
  }

  const deletePayment = payment => {
    const newPayments = payments.filter(p => p.id !== payment.id);
    setPayments(newPayments);
  }

  return (
      <div className={modal ? 'fix' : undefined} >
        <Header 
          budget={budget}
          setBudget={setBudget}
          isValidBudget={isValidBudget}
          setIsValidBudget={setIsValidBudget}
          payments={payments}
          setPayments={setPayments}
        />

        {isValidBudget && (
          <>
            <main>
              <Filter 
                filter={filter}
                setFilter={setFilter}
              />

              <ListPayment 
                payments={payments}
                setStatePayment={setStatePayment}
                deletePayment={deletePayment}
                filter={filter}
                filteredSpends={filteredSpends}
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
                    statePayment={statePayment}
                    setStatePayment={setStatePayment}
                  />}

      </div>
  )
}

export default App
