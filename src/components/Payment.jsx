import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"

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

const Payment = ({payment, setStatePayment, deletePayment}) => {

    const dateFormat = date => {
        const format = {
            year: 'numeric',
            month: 'long',
            day: "2-digit"
        };
        const newDate = new Date(date);
        return newDate.toLocaleDateString('en-US',format);
    };
    
    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction 
                onClick={() => setStatePayment(payment)} >
                Edit
            </SwipeAction>
        </LeadingActions>
    )
    
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
                onClick={() => deletePayment(payment)}
                destructive={true}
            >
                Delete
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
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
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Payment