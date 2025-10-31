import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Generic helpers
const notFound = (res, entity='Item') => res.status(404).json({ message: `${entity} not found` });
const handleError = (res, error) => res.status(500).json({ message: error.message || 'Server error' });

const signToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET || 'devsecret', { expiresIn: '7d' });
};

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Email already in use' });
    const user = await User.create({ name, email, password });
    const token = signToken(user._id);
    res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (e) { handleError(res, e); }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid email or password' });
    const ok = await user.comparePassword(password);
    if (!ok) return res.status(401).json({ message: 'Invalid email or password' });
    const token = signToken(user._id);
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (e) { handleError(res, e); }
};

export const signout = async (req, res) => {
  res.json({ message: 'Signed out' });
};
