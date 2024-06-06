const productModel = require("../models/productModel");

const getProductsWithImageURLs = async () => {
    try {
        const products = await productModel.find();
        const productsWithImageURLs = products.map(product => ({
            ...product._doc,
            productImgURL: `http://localhost:3000/${product.productImg}` 
        }));
        return productsWithImageURLs;
    } catch (error) {
        console.log(error);
        return [];
    }
};

const productController = {
    get: async (req, res) => {
        try {
            const items = await getProductsWithImageURLs();
            res.status(200).json(items);
        } catch (error) {
            console.log(error);
        }
    },
    create: async (req, res) => {
        try {
            const { name, price, dummyprice } = req.body;
            const productImg = req.file.filename;

            const newProduct = new productModel({
                name,
                productImg,
                price,
                dummyprice
            });

            const savedProduct = await newProduct.save();
            res.status(201).json(savedProduct);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = productController