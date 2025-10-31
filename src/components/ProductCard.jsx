
function ProductCard({ allProducts, setAllProducts, index, eachProduct: { name, price, isPurchased } }) {
  // console.log(props)

  // const { eachProduct } = props
  // const { name, price, isPurchased } = eachProduct

  // const { eachProduct: { name, price, isPurchased} } = props

  const handleBuy = () => {
    console.log("trying to buy this", index)

    // const clone = [...allProducts] // not recommended here, because we will need to update an object inside
    const clone = structuredClone(allProducts)
    clone[index].isPurchased = true

    setAllProducts(clone)

  }

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>{price}€</p>
      <p>{isPurchased === true ? "✅" : "🟡"}</p>
      <button onClick={handleBuy}>Buy</button>
    </div>
  )
}

export default ProductCard