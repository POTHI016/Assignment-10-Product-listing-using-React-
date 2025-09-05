import "./ProductCard.css";

export default function ProductCard({ product, handleAddToCart }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="category">Category: {product.category}</p>
      <p className="price">₹{product.price}</p>
      <p className="rating">⭐ {product.rating}</p>
      <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
    </div>
  );
}
