function ProductItem({ product }) {
  return (
    <div className="product-item">
      <div className="product-info">
        <span>{product.name}</span>
        <span>{product.completion}% Complete</span>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${product.completion}%` }}
          ></div>
        </div>
      </div>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductItem;
