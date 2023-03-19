import {useState} from 'react';
import Message from './Message'
import IconClose from '../img/close.svg'


const Modal = ({setModal, formModal, setFormModal, savePayment}) => {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [message, setMessage] = useState("");
    
    const handleModal = () => {
        setTimeout(() => {
            setModal(false);
        }, 400)
    }
    
    const generateId = () => {
        const random = Math.random().toString(36).substr(2);
        const date = Date.now().toString(36);
        return random + date;
    }
    const handleSubmit = e => {
        e.preventDefault();
        if([name, amount,category].includes("")){
            setMessage("All fields are needed");
            setTimeout(() => {
                setMessage("");
            }, 2500);
            return;
        }
        let id = generateId();
        const date = Date.now();
        savePayment({id, name, amount, category, date});
        setFormModal(false);
        handleModal();
    }

    return (
        <div className="modal">
            <div className="close-modal">
                <img 
                    src={IconClose} 
                    alt="Icon to close modal" 
                    onClick={handleModal}
                />
            </div>
            <form 
                onSubmit={handleSubmit}
                className={`form ${formModal ? "animate" : "close"}`}
            >
                <legend>New payment</legend>
                {message && <Message
                    type="error"
                >{message}</Message>}
                <div className='field'>
                    <label htmlFor="name">Payment name</label>

                    <input 
                        id="name"
                        type="text"
                        placeholder='e.g. Supermarket'
                        value={name}
                        onChange={ e => setName(e.target.value)}
                    />
                </div>
                
                <div className='field'>
                    <label htmlFor="amount">Amount</label>

                    <input 
                        id="amount"
                        type="number"
                        placeholder='e.g. 300'
                        value={amount}
                        onChange={ e => setAmount(Number(e.target.value))}
                    />
                </div>

                <div className='field'>
                    <label htmlFor="category">Category</label>

                    <select 
                        id='category'
                        value={category}
                        onChange={ e => setCategory(e.target.value)}
                    >
                        <option value="">--  SELECT  --</option>
                        <option value="food">Food</option>
                        <option value="hobbies">Hobbies</option>
                        <option value="house">House</option>
                        <option value="medicine">Medicine</option>
                        <option value="others">Others</option>
                        <option value="savings">Savings</option>
                        <option value="subscriptions">Subscriptions</option>
                    </select>
                </div>
                <input type="submit" value="Add payment"/>
            </form>
        </div>
    )
}

export default Modal