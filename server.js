// server.js
import express from 'express';
import { connectToDatabase } from './src/utils/db.js';
import User from './src/models/User.js'
import bcrypt from 'bcrypt';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Express server!');
});

app.get('/insert', async (req, res) => {
    const db = await connectToDatabase();
    const collection = db.collection('mycollection');
    const result = await collection.insertOne({ name: "John", age: 30 });
    res.send(`Document inserted with _id: ${result.insertedId}`);
});

app.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        user = new User({
            email,
            password: hashedPassword,
        });

        await user.save();

        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

const PORT = 5000; // You can adjust this as needed
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
