import React,{useState} from "react";

import  './ExpenseItem.css';
import './ExpenseDate.js'
import ExpenseDate from './ExpenseDate.js';


function ExpenseItem(props){
    const [newTitle,setNewTitle]=useState("avi");
     
    const [title,setTitle]=useState(props.title);

    const clickHandler =()=>{
        setTitle(newTitle);
    }
    const changeHandler=(event)=>{
        setNewTitle(event.target.value);
    }
    return (
        <div className='expense-item '>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );

}

export default ExpenseItem;