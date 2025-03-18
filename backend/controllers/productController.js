import Product from "../models/product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    console.log("deleting product", req.params.id);
    const product = await Product.findById(req.params.id);
    console.log(product);
    if (product) {
      await Product.findByIdAndDelete(req.params.id);
      res.status(201).json({ message: "Product removed" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
