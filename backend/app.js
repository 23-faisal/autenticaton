import express from "express";
import authRoute from "./routes/auth.route.js";
import { errorHandler } from "./utils/errors.js";

export const app = express();

app.use(express.json());

// auth route
app.use("/api/auth", authRoute);

// Handle undefined routes
app.use((req, res, next) => {
  const error = new Error(`Route not found: ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
});

// Global Error Handler (must come last)
app.use(errorHandler);

app.get("/", (req, res) => {
  res.json("Hello world");
});
