import React from "react";

import './Expenses.css'

import  ExpenseItem from './ExpenseItem.js'

function Expenses(props){
    return (
        <div className='expenses'>

            {
               props.item.map(
                   expense => (
                    <ExpenseItem 
                            date={expense.date}
                            title={expense.title} 
                            amount={expense.amount}>
                    </ExpenseItem>
                   )
               ) 
            }
            
        
        </div>

    );

}
export default Expenses;