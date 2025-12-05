import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { handleError } from "../utils/responses.js";

const signToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET || 'devsecret', { expiresIn: '7d' });
};

//  SIGNUP
export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Email already in use' });

    const user = await User.create({
      name,
      email,
      password,
      role: role || "user"  
    });

    const token = signToken(user._id);

    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (e) { handleError(res, e); }
};

// SIGNIN 
export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid email or password' });

    const ok = await user.comparePassword(password);
    if (!ok) return res.status(401).json({ message: 'Invalid email or password' });

    const token = signToken(user._id);

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role 
      }
    });
  } catch (e) { handleError(res, e); }
};

// SIGNOUT
export const signout = async (req, res) => {
  res.json({ message: 'Signed out' });
};
