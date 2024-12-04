export const signUp = async (req, res) => {
  try {
    res.status(201).json({
      success: true,
      message: `Sign up successfully!`,
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
