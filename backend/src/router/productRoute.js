const { Router } = require("express");
const productController = require("../controller/productController");
const upload = require("../middleware/multer");

const productRouter = Router();

productRouter.get('/', productController.get);
productRouter.post('/', upload, productController.create);

module.exports = productRouter