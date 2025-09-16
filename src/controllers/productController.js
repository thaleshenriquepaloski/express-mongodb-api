import Product from "../models/productSchema.js";

class ProductController {
    
    static async toListProducts (req, res) {
        try {
            const productList = await Product.find({});
            res.status(200).json(productList);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na solicitação!` });
        }
    };

};

export default ProductController