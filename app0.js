const mongoose = require('mongoose');

// Step 1: MongoDB URI (replace with your DB name)
const mongoURI = 'mongodb://localhost:27017/studentdb';

// Step 2: Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Connected to MongoDB');
})
.catch((err) => {
  console.error('❌ Connection failed:', err);
});

// Step 3: Define a Schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String
});

// Step 4: Create a Model (Collection name will be pluralized → students)
const Student = mongoose.model('Student', studentSchema);

// Step 5: Insert a sample document (This will create the DB and collection)
// ...existing code...
const students = [
  { name: 'Alice', age: 22, course: 'Computer Science' },
  { name: 'satvik', age: 21, course: 'Information Science' },
  { name: 'sanket', age: 18, course: 'Computer Science' },
  { name: 'prajval', age: 19, course: 'mechanical' }
];

Student.insertMany(students)
  .then(() => console.log('🎉 Student records inserted, DB created'))
  .catch((err) => console.error('❌ Insert failed:', err));




