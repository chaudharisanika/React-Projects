import { useState } from "react"
import ShoppingListForm from "./ShoppingListForm";
import {v4 as uuid} from "uuid";
import ValidateShoppingList from "./ValidateShoppingList";


export default function ShoppingList(){
    const[items,setitems] = useState([
    {id:uuid(), product:"egg", quantity:12},
    {id:uuid(), product:"milk", quantity:20}])
    const addItem = (item) => {
        setitems(curItems => {
            return[...curItems,{...item, id:uuid()}]
        })
    }
    return(
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map((i)=>(
                    <li key={i.id}>{i.product} - {i.quantity}</li>
                ))}
            </ul>
            <ValidateShoppingList addItem={addItem}/>
        </div>
    )
}