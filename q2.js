    //insert documents
db.employees.insertOne({
  name: "John Smith",
  email: "john@gmail.com",
  department: "IT",
  salary: 1456,
  location: ["FL", "OH"],
  date: Date(),
});

db.employees.insertMany([
  {
    name: "Mike Joseph",
    email: "mike@gmail.com",
    department: "IT",
    salary: 2456,
    location: ["FL", "TX"],
    date: Date(),
  },
  {
    name: "Cathy G",
    email: "cathy@gmail.com",
    department: "IT",
    salary: 3456,
    location: ["AZ", "TX"],
    date: Date(),
  },
]);

db.employees.find();

 db.product.insertOne({
... name: "John Smith",
...decr price: 1456,
...   location: ["FL", "OH"],
...   date: Date(),
... });
...db.createCollection("products");

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
]);