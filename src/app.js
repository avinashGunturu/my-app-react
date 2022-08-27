  import React,{useState} from "react";
 import Expenses from "./components/Expenses";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
import NewExpense from "./components/NewExpense/NewExpense";
let DUMMY_expenses=[
    {
       id:'e1',
       title:'school fee',
       amount:250,
       date:new Date(2021,5,12)
    },
    {
        id:'e2',
        title:'book fee',
        amount:50,
        date:new Date(2021,1,12)
     },
     {
        id:'e3',
        title:'bus fee',
        amount:70,
        date:new Date(2021,5,12)
     },
     {
        id:'e1',
        title:'exam fee',
        amount:100,
        date:new Date(2021,2,12)
     },

]
function App(){
    const [expenses,setExpenses]=useState(DUMMY_expenses)

    const addExpenseHandler =(expense)=>{
        const updatedExpense = [expense,...expenses]
        setExpenses(updatedExpense);
    }
    
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses item={expenses}/>
            
        
        </div>
    );
}

export default App;