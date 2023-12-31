const products = [
  {
    id: 'redshoe',
    description: 'Red Shoe',
    price: 42.12,
    reviews: []
  },
  {
    id: 'bluejean',
    description: 'Blue Jeans',
    price: 55,
    reviews: []
  }
]

const getAllProducts = () => {
  return products;
}

const getProductsByPrice = (min, max) => {
  return products.filter(product => {
    return product.price >= min && product.price <= max;
  })
}

const getProductByIId = (id) => {
  return products.find(product => {
    return product.id === id;
  })
}

const addNewProduct = (id, description, price) => {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  }

  products.push(newProduct);
  return newProduct;
}

const addNewProductReview = (id, rating, comment) => {
  const matchedProduct = getProductByIId(id);

  if (matchedProduct) {
    const newReview = {
      rating,
      comment,
    }
    matchedProduct.reviews.push(newReview)

    return newReview;
  }
  
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductByIId,
  addNewProduct,
  addNewProductReview
}