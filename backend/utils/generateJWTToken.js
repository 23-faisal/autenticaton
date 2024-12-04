import jwt from "jsonwebtoken";
import "dotenv/config";

export const generateJWTToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  // Set the token as an HTTP-only cookie
  res.cookie("token", token, {
    httpOnly: true, // Prevent client side access
    secure: process.env.NODE_ENV === "production", // Use HTTPS in production
    sameSite: "strict", // Prevent CSRF
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
  });

  return token;
};
