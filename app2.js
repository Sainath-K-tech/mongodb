const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/studentdb';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ Connection failed:', err));

// Schema and Model
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String
});

const Student = mongoose.model('Student', studentSchema);

// ✅ Function to update a student's age
const updateStudentAge = async () => {
  try {
    const result = await Student.updateOne(
      { name: 'Alice' },        // Filter: match by name
      { $set: { age: 23 } }     // Update: set age to 23
    );
    console.log('🛠️ Update Result:', result);
  } catch (error) {
    console.error('❌ Error updating student:', error);
  }
};

updateStudentAge();