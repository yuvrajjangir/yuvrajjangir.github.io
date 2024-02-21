require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();


app.use(cors());
app.use(bodyParser.json());
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;


const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
});


const Contact = mongoose.model('Contact', contactSchema);


app.post('/submit-contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    res.status(200).json({ message: 'Contact information saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving contact information' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
