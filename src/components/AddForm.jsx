import { useState } from "react"

function AddForm(props) {
  // console.log("component been read")
  const [ nameValue, setNameValue ] = useState("")
  const [ priceValue, setPriceValue] = useState(0)

  const handleNameChange = (e) => {

    let userInput = e.target.value

    setNameValue(userInput) 

    // ALL SET FUNCTIONS works with some sort of anynchronicity
    console.log(nameValue) // always show the previous value before the setFunction
  }

  const handlePriceChange = (e) => setPriceValue(e.target.value)

  const handleAddProduct = (e) => {
    e.preventDefault() // will prevent any default behaviour of the form

    if (!nameValue || !priceValue) {
      return // don't do anything
    }

    console.log("trying to add new product")

    //1. gather all the info for the new product
    const newProduct = {
      name: nameValue,
      price: priceValue,
      isPurchased: false
    }

    //2. add the new product to the state
    const clone = [...props.allProducts]
    clone.push(newProduct)
    props.setAllProducts(clone)

    // clear the inputs
    setNameValue("")
    setPriceValue(0)
  }

  return (
    <div className="add-form container">
      
      <h2>Add Form</h2>

      <form>

        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" onChange={handleNameChange} value={nameValue}/>
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input type="number" name="price" onChange={handlePriceChange} value={priceValue}/>
        </div>

        <button onClick={handleAddProduct}>Add</button>

      </form>

    </div>
  )
}

export default AddForm