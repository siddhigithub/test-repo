import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3002;

//const bodyParser = require('body-parser');
//app.use(bodyParser.json());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true })); 
//dotenv.config();
//const PORT = process.env.PORT || 5000;
//const MONGOURL = process.env.MONGO_URL;
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
//app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/uploads', express.static('uploads'));

const mongoURI = 'mongodb://127.0.0.1:27017/userdb';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.use("/api/user",route);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

