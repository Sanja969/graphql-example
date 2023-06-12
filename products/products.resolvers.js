const products = require('./products.model');

module.exports = {
  Query: {
    products: () => {
      return products.getAllProducts();
    },
    productsByPrice: (_, args) => {
      return products.getProductsByPrice(args.min, args.max);
    },
    product: (_, args) => {
      return products.getProductByIId(args.id);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      return products.addNewProduct(args.id, args.description, args.price);
    },
    addNewProductReview: (_, args) => {
      return products.addNewProductReview(args.id, args.rating, args.comment);
    }
  }
}