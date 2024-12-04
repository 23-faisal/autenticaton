import { User } from "../model/user.js";
import bcrypt from "bcryptjs";
import { generateVerificationToken } from "../utils/generateVerificationToken.js";
import { generateJWTToken } from "../utils/generateJWTToken.js";
import { sendVerificationEmail } from "../resend/email.js";

export const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username | !email | !password) {
      return res.status(404).json({
        success: false,
        message: "All field must be filled!",
      });
    }

    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return res.status(404).json({
        success: false,
        message: `${email} already exists. Use another email`,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const verificationToken = generateVerificationToken();

    const user = new User({
      username,
      email,
      password: hashedPassword,
      verificationToken,
    });

    await user.save();

    generateJWTToken(res, user._id);

    await sendVerificationEmail(user.email, verificationToken);

    //
    res.status(201).json({
      success: true,
      message: `User created successfully!`,
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `${error.message}`,
    });
  }
};


export const signIn = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: `Sign in successfully!`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `${error.message}`,
    });
  }
};
export const logOut = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: `Logout successfully!`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `${error.message}`,
    });
  }
};
