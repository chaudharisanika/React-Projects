import { useState } from "react"

export default function ShoppingListForm({addItem}){
    const [formData, setFormData] = useState({product:"",quantity:""})
    const handleChange = (evt) =>{
        const changeField = evt.target.name;
        const newValue = evt.target.value;
        setFormData(currData => {
           return {
             ...currData,
             [changeField]: newValue,
           }
        })
     }

     const handleSubmit = (e) => {
        e.preventDefault()
        addItem(formData)
        setFormData({product:"",quantity:""})
     }
    return(
        <form onSubmit={handleSubmit}>
        <h1>Product is:{formData.product} and quantity is:{formData.quantity}</h1>

        <label htmlFor="product">Product name: </label>
        <input type="text" 
        placeholder="product name" 
        name="product"
        id="product"
        value={formData.product}
        onChange={handleChange}></input>

        <label htmlFor="quantity">Quantity: </label>
        <input type="number" 
        placeholder="quantity" 
        name="quantity"
        id="quantity"
        value={formData.quantity}
        onChange={handleChange}></input>

        <button>Add item</button>
        </form>
    )
}