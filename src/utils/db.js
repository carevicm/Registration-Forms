// src/utils/database.js
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import process from 'process';

// Load environment variables from .env.development
dotenv.config({ path: '.env.development' });

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

let database;

async function connectToDatabase() {
    if (!client.isConnected()) {
        await client.connect();
        console.log("Connected to MongoDB");
        database = client.db('registration-form');
    }
    return database;
}

export { connectToDatabase };
