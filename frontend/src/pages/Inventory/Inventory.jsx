import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Inventory.scss";

import Navbar from "../../components/Navbar/Navbar";
import ProductListItem from "../../components/ProductListItem/ProductListItem";
import Confirm from "../../components/Confirm/Confirm";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [confirm, setConfirm] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState("");
  const [confirmReason, setConfirmReason] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(12);

  const fetchProducts = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/products`);
    setProducts(data);
  };

  const handleDelete = async (product) => {
    setConfirmMessage(
      `Are you sure you want to delete this product? ${product.name} will be permanently removed. Current quantity: ${product.quantity}`,
    );
    setConfirmReason("delete");
    setSelectedProduct(product);
    setConfirm(true);
  };

  const handleConfirm = async () => {
    switch (confirmReason) {
      case "delete":
        console.log("deleting", selectedProduct._id);
        try {
          await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/products/${selectedProduct._id}`);
        } catch (error) {
          console.error(error);
        } finally {
          fetchProducts();
          handleClose();
        }
        break;
      default:
        break;
    }
  };

  const handleClose = () => {
    setConfirm(false);
    setConfirmMessage("");
    setConfirmReason("");
    setSelectedProduct(null);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={`page-wrapper ${confirm ? "modal-open" : ""}`}>
      {confirm && <Confirm message={confirmMessage} onConfirm={() => handleConfirm()} onCancel={() => handleClose()} />}
      <Navbar />
      <div className="main-content">
        <h1 className="page-title">Inventory</h1>
        <div className="product-table">
          <div className="product-table-header">
            <div className="product-name">Name</div>
            <div className="product-description">Description</div>
            <div className="product-price">Price</div>
            <div className="product-quantity">Quantity</div>
            <div className="product-barcode">Barcode</div>
            <div className="action-buttons">Actions</div>
          </div>
          {products.map((product) => (
            <ProductListItem key={product._id} product={product} onDelete={() => handleDelete(product)} />
          ))}
          <button>Add Product</button>
          <div className="product-table-footer">
            <div class="pagination">{currentPage} of 100</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
