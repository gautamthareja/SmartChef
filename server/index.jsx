const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

const connectionString = process.env.MONGODB_CONNECTION_STRING;

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

const authRoutes = require("./routes/auth.jsx");
app.use("/api/auth", authRoutes);

const pantryItemsRoutes = require('./routes/pantryItems.jsx');
app.use('/api/pantryItems', pantryItemsRoutes);

const recipesRoutes = require('./routes/recipes.jsx');
app.use('/api/recipes', recipesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});