import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: {
      type: String,
    },
    verificationToken: {
      type: String,
    },
    resetPasswordExpiresAt: {
      type: Date,
      default: () => Date.now() + 3600000, // 1 hour from now
    },

    verificationTokenExpiresAt: {
      type: Date,
      default: () => Date.now() + 86400000, // 24 hours from now
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
