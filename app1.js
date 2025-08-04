const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/studentdb';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ Connection failed:', err));

// Define Schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String
});

// Create Model
const Student = mongoose.model('Student', studentSchema);

// Function to fetch all students
const fetchStudents = async () => {
  try {
    const students = await Student.find();  // Fetch all documents
    console.log('📄 All Students:');
    console.log(students);
  } catch (error) {
    console.error('❌ Error fetching students:', error);
  }
};

// Call the function to read data
fetchStudents();
