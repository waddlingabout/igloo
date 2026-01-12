import 'dotenv/config'; // Load environment variables
import express from 'express';
import db from './src/models/db.js'

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to igloo."});
});

const PORT = process.env.NODE_LOCAL_PORT || 3000;

db.sequelize.sync()
  .then(() => {
    
    console.log("Database connected successfully.")

    app.listen(PORT, () => {
    console.log("Igloo running on port " + PORT);
});
})
  .catch(err => console.log("Failed to connect to database: " + err.message));

