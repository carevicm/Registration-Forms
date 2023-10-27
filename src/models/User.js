// src/models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    // Add other fields as needed
});

export default mongoose.model('User', UserSchema);
