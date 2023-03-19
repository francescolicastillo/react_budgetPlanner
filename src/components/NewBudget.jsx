import {useState} from 'react'
import Message from './Message';

const NewBudget = ({budget, setBudget, setIsValidBudget}) => {

  const [message, setMessage] = useState("");

  const handlerBudget = (e) => {
    e.preventDefault();

    if(budget > 0){
      setMessage("");
      setIsValidBudget(true);
      return
    }
    setMessage("Not valid input!");
  };

  return (
    <div className='container-budget container shadow'>
      <form onSubmit={handlerBudget} className='form'>
        <div className='field'>
          <label >New Budget</label>
          <input 
            className='new-budget'
            type="number" 
            placeholder='insert amount'
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </div>

        <input type="submit" value="add"/>
        {message && <Message type="error">{message}</Message>}

      </form>
    </div>
  )
}

export default NewBudget;