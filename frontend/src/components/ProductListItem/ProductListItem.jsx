import React from "react";
import "./ProductListItem.scss";

const ProductListItem = ({ product, onDelete }) => {
  return (
    <div className="product-list-item">
      <div className="product-name">{product.name}</div>
      <div className="product-description">{product.description}</div>
      <div className="product-price">₪{product.price}</div>
      <div className="product-quantity">{product.quantity}</div>
      <div className="product-barcode">{product.barcode}</div>
      <div className="action-buttons">
        <button className="edit-button">Edit</button>
        <button className="delete-button" onClick={() => onDelete()}>Delete</button>
      </div>
    </div>
  );
};

export default ProductListItem;
