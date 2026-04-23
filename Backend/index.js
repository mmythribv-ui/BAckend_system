import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// ✅ MongoDB Connection (FIXED)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => {
    console.log("MongoDB Connection Error:", err);
  });

// ✅ Test route (fixes "Cannot GET /")
app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

// ✅ Start server (Render needs this)
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
