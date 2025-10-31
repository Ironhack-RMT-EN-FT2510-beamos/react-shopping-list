import { useState } from "react"

function SearchBar(props) {

  const handleSearch = (e) => {
    props.setSearchQuery(e.target.value)

    // const filteredProducts = props.allProducts.filter((eachProduct) => {  
    //   return eachProduct.name.startsWith(e.target.value)
    // })

    // props.setAllProducts(filteredProducts)
  }

  return (
    <div className="search-bar container">
      
      <h2>Search Bar</h2>
        
      <input type="text" onChange={handleSearch} value={props.searchQuery}/>

    </div>
  )
}

export default SearchBar