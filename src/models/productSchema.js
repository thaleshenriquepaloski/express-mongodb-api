import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    product: { type: Number, required: true },
    stock: { type: Number, default: 0 }
});

const Product = mongoose.model('Product', productSchema);

export default Product;