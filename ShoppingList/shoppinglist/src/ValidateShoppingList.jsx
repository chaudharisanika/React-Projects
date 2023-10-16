import { useState } from "react"

export default function ValidateShoppingList({addItem}){
    const [formData, setFormData] = useState({product:"",quantity:""})
    const[productisvalid,setproductisvalid] = useState(false);
    const validate = (product) => {
        if(product.length === 0){
            setproductisvalid(false)
        }else{
            setproductisvalid(true)
        }
    }
    const handleChange = (evt) =>{
        if(evt.target.name === "product"){
            validate(evt.target.value);
        }
       
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
        if(productisvalid){
            addItem(formData)
            setFormData({product:"",quantity:""})
        }
        
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
        {!productisvalid && 
        (<p style={{color:"red"}}>Not valid</p>)}

        <label htmlFor="quantity">Quantity: </label>
        <input type="number" 
        placeholder="quantity" 
        name="quantity"
        id="quantity"
        value={formData.quantity}
        onChange={handleChange}></input>

        <button disabled={!productisvalid}>Add item</button>
        </form>
    )
}