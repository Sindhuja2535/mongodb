<<<<<<< HEAD
db.products.insertMany([
  {
    name: "apple",
    description: "Fresh and juicy red apple.",
    imgUrl: "https://example.com/images/apple.jpg",
    price: 1.5
  },
  {
    name: "Banana",
    description: "Ripe yellow bananas full of energy.",
    imgUrl: "https://example.com/images/banana.jpg",
    price: 0.75
  },
  {
    name: "Orange",
    description: "Citrus fruit rich in Vitamin C.",
    imgUrl: "https://example.com/images/orange.jpg",
    price: 1.2
  }
=======
db.createCollection("products");

db.products.insertMany([
  {
    name: "Apple",
    description: "Fresh and juicy red apple.",
    imgUrl: "https://example.com/images/apple.jpg",
    price: 1.5
  },
  {
    name: "Banana",
    description: "Ripe yellow bananas full of energy.",
    imgUrl: "https://example.com/images/banana.jpg",
    price: 0.75
  },
  {
    name: "Orange",
    description: "Citrus fruit rich in Vitamin C.",
    imgUrl: "https://example.com/images/orange.jpg",
    price: 1.2
  }
>>>>>>> 3e9d9e49c049f803098a9092559bea5770ed892a
]);