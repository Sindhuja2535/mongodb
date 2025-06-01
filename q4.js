<<<<<<< HEAD
//db.employee.find().skip(2) display all except 2 
//db.employee.find().limit(2) only the top 2 will display
//db.employee.findOne() 1st doc will come 
//db.employee.find().sort({name:-1})
//db.employee.find({dep:'IT'})
    //db.employee.find({},{name:1})
    //db.employee.find({},{_id:0,name:1})
   // db.employee.find({},{name:1,email:1})
    //db.employee.find({dep:'IT'})
    //db.employee.find({},{name:1})
    db.employees.insertMany([
  {
    name: "Brian C",
    email: "brian@gmail.com",
    department: "IT",
    salary: 2256,
    location: ["FL", "TX"],
    date: Date(),
  },
  {
    name: "Chastity J",
    email: "chastity@gmail.com",
    department: "HR",
    salary: 4556,
    location: ["AZ", "TX"],
    date: Date(),
  },
]);

db.employees.find().skip(2);
db.employees.find().limit(2);
db.employees.findOne();
db.employees.find().sort({ name: 1 }); //try -1
db.employees.find({ department: "IT" });
db.employees.find({}, { _id: 0, name: 1, email: 1 });
db.employees.find({ department: "IT" }, { _id: 0, name: 1, email: 1 });
db.employees.find(
  { department: "IT" },
  { _id: false, name: true, email: true }
);
db.employees.countDocuments()
=======
db.employees.insertMany([
  {
    name: "Brian C",
    email: "brian@gmail.com",
    department: "IT",
    salary: 2256,
    location: ["FL", "TX"],
    date: Date(),
  },
  {
    name: "Chastity J",
    email: "chastity@gmail.com",
    department: "HR",
    salary: 4556,
    location: ["AZ", "TX"],
    date: Date(),
  },
]);

db.employees.find().skip(2);
db.employees.find().limit(2);
db.employees.findOne();
db.employees.find().sort({ name: 1 }); //try -1
db.employees.find({ department: "IT" });
db.employees.find({}, { _id: 0, name: 1, email: 1 });
db.employees.find({ department: "IT" }, { _id: 0, name: 1, email: 1 });
db.employees.find(
  { department: "IT" },
  { _id: false, name: true, email: true }
);
db.employees.countDocuments()
>>>>>>> 3e9d9e49c049f803098a9092559bea5770ed892a
db.employees.find({},{dept:"$department"})