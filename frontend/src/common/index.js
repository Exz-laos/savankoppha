

const backendDomain = process.env.REACT_APP_BACKEND_URL //"http://localhost:8080"

const SummaryApi ={
    signUp : {
        url : `${backendDomain}api/signup` ,
        method: "post"
    },
    signIn : {
        url : `${backendDomain}api/signin` ,
        method: "post"
    },
    current_user : {
        url : `${backendDomain}api/user-details` ,
        method: "get"
    },
    logout_user: {
        url : `${backendDomain}api/userLogout` ,
        method: "get"
    },
    allUser : {
        url : `${backendDomain}api/all-user` ,
        method: "get"
    },
    updateUser : {
        url : `${backendDomain}api/update-user` ,
        method: "post"
    },
    uploadProduct : {
        url : `${backendDomain}api/upload-product` ,
        method: "post"
    },
    allProduct : {
        url : `${backendDomain}api/get-product` ,
        method: "get"
    },
    updateProduct : {
        url : `${backendDomain}api/update-product` ,
        method: "post"
    },
    categoryProduct : {
        url : `${backendDomain}api/get-categoryProduct` ,
        method: "get"
    },
    categoryWiseProduct : {
        url : `${backendDomain}api/category-product` ,
        method: "post"
    },
    productDetails : {
        url : `${backendDomain}api/product-details` ,
        method: "post"
    },
    addToCartProduct : {
        url : `${backendDomain}api/addtocart` ,
        method: "post"
    },
    addToCartProductCount : {
        url : `${backendDomain}api/countAddToCartProduct` ,
        method: "get"
    },
    addToCartProductView : {
        url : `${backendDomain}api/view-card-product` ,
        method: "get"
    },
    updateCartProduct : {
        url : `${backendDomain}api/update-cart-product` ,
        method: "post"
    },
    deleteCartProduct : {
        url : `${backendDomain}api/delete-cart-product` ,
        method: "post"
    },
    searchProduct : {
        url : `${backendDomain}api/search`,
        method: "get"
    },
    filterProduct : {
        url : `${backendDomain}api/filter-product` ,
        method: "post"
    },

    deleteProduct : {
        url : `${backendDomain}api/delete-product` ,
        method: "DELETE"
    },
    uploadPaymentForm: {
        url : `${backendDomain}api/uploadPaymentForm` ,
        method: "post"
    },
    allOrders: {
        url: `${backendDomain}api/all-orders`,
        method: "GET"
    },
    updateOrderStatus: {
        url: (orderId, status) => `${backendDomain}api/orders/${orderId}/${status}`,
        method: 'PUT'
    },




    
}

export default SummaryApi

     