import React from "react";
import "./AddNewExpense.css";



function AddNewExpense (props){
    let buttonIsClicked=false;

    const onClickHandler= () =>{
        buttonIsClicked=true;
        console.log(buttonIsClicked)
        props.isClicked()
    }
    return (
        <div className='new-expense'>
            <button onClick={onClickHandler}>Add New Expense</button>
        </div>
    )

}
export default AddNewExpense;