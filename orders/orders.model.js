const orders = [
  {
    date: '2005-05-06',
    subtotal: 90.22,
    items: [
      {
        product: {
          id: 'redshoe',
          description: 'Old Red Shoe',
          price: 45.11,
        },
        quantity: 2,
      }
    ]

  }
]

const getAllOrders = () => {
  return orders;
}

module.exports = {
  getAllOrders,
}