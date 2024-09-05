const express = require('express')

const router = express.Router()



const userSignUpController = require('../controller/user/userSignUp')
const userSignInController = require('../controller/user/userSignIn')
const userDetailsController = require('../controller/user/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/user/userLogout')
const allUsers = require('../controller/user/allUsers')
const updateUser = require('../controller/user/updateUser')
const UploadProductController = require('../controller/product/uploadProduct')
const getProductController = require('../controller/product/getProduct')
const updateProductController = require('../controller/product/updateProduct')
const getCategoryProduct = require('../controller/product/getCategoryProductOne')
const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct')
const getProductDetails = require('../controller/product/getProductDetails')
const addToCartController = require('../controller/user/addToCartController')
const countAddToCartProduct = require('../controller/user/countAddToCartProduct')
const addToCartViewProduct = require('../controller/user/addToCartViewProduct')
const updateAddToCartProduct = require('../controller/user/updateAddToCartProduct')
const deleteAddToCartProduct = require('../controller/user/deleteAddToCartProduct')
const searchProduct = require('../controller/product/searchProduct')
const filterProductController = require('../controller/product/filterProduct')
const deleteProductController = require('../controller/product/deleteProduct')
const uploadPaymentFormController = require('../controller/order/uploadPaymentFormController')
const getAllOrdersController = require('../controller/order/getAllOrdersController')
const updateOrderStatusController = require('../controller/order/updateOrderStatusController')


router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)   //use get because only user detail need
router.get("/userLogout",userLogout)

//admin panel
router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)

//product
router.post("/upload-product",authToken,UploadProductController)
router.get("/get-product",getProductController)
router.post("/update-product",authToken,updateProductController)
router.delete('/delete-product/:id',authToken, deleteProductController);

//getproduct to homepage
router.get("/get-categoryProduct",getCategoryProduct)
router.post("/category-product",getCategoryWiseProduct)
//product detail
router.post("/product-details",getProductDetails)

//search and filter
router.get("/search",searchProduct)
router.post("/filter-product",filterProductController)
//user add to cart
router.post("/addtocart",addToCartController)
router.get("/countAddToCartProduct",countAddToCartProduct)
router.get("/view-card-product",addToCartViewProduct)
router.post("/update-cart-product",updateAddToCartProduct)
router.post("/delete-cart-product",deleteAddToCartProduct)
//payment
router.post("/uploadPaymentForm",uploadPaymentFormController)

router.get('/all-orders',authToken, getAllOrdersController);
// Route to update order status
router.put('/orders/:orderId/:status',authToken, updateOrderStatusController);

module.exports = router