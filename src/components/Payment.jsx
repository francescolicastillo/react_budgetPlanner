import React from 'react'

import IconFood from '../img/icon_food.svg'
import IconHobbies from '../img/icon_hobbies.svg'
import IconHome from '../img/icon_home.svg'
import IconMedicine from '../img/icon_medicine.svg'
import IconOthers from '../img/icon_others.svg'
import IconSavings from '../img/icon_savings.svg'
import IconSubscriptions from '../img/icon_subscriptions.svg'

const enumIcons = {
    food : IconFood,
    hobbies : IconHobbies,
    house : IconHome,
    medicine : IconMedicine,
    others : IconOthers,
    savings : IconSavings,
    subscriptions : IconSubscriptions
}

const Payment = ({payment}) => {

    const dateFormat = date => {
        const format = {
            year: 'numeric',
            month: 'long',
            day: "2-digit"
        };
        const newDate = new Date(date);
        return newDate.toLocaleDateString('en-US',format);
    };

    return (
        <div className='expense shadow'>
            <div className='content-expense'>
                <img 
                    src={enumIcons[payment.category]}
                    alt="Payment's Icon"
                />
                <div className='description-expense'>
                    <p className='category'>
                        {payment.category}
                    </p>
                    <p className='name-expense'>
                        {payment.name}
                    </p>                
                    <p className='date-expense'>
                        Added: {' '}
                        {dateFormat(payment.date)}
                    </p>
                </div>
            </div>
            <p className='amount-expense'>€{payment.amount}</p>
        </div>
    )
}

export default Payment