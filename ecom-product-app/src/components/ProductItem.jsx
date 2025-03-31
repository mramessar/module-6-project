function ProductItem({ product }) {
    return (
      <div className="product-item">
        <h2>{product.name}</h2>
        <p><strong>File Completion Required:</strong> {product.completion}</p>
        <p>{product.description}</p>
      </div>
    );
  }
  
  export default ProductItem;
  