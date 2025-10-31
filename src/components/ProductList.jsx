import ProductCard from "./ProductCard";

function ProductList(props) {
  // console.log(props)
  
  return (
    <div className="product-list container">
      
      <h2>Product List</h2>
      

      {/* //* the list of the products will be here */}
      {/* //* it will render a ProductCard for each product in the list */}
      {props.allProducts
      .filter((eachProduct) => {
        return eachProduct.name.startsWith(props.searchQuery)
      })
      .map((eachProduct, index) => {
        return <ProductCard eachProduct={eachProduct} key={index} index={index} allProducts={props.allProducts} setAllProducts={props.setAllProducts}/>
      })}

    </div>
  )
}

export default ProductList