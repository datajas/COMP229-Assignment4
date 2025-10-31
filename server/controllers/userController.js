import User from '../models/User.js';

// Generic helpers
const notFound = (res, entity='Item') => res.status(404).json({ message: `${entity} not found` });
const handleError = (res, error) => res.status(500).json({ message: error.message || 'Server error' });

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).select('-password').sort({ createdAt: -1 });
    res.json(users);
  } catch (e) { handleError(res, e); }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return notFound(res, 'User');
    res.json(user);
  } catch (e) { handleError(res, e); }
};

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ id: user._id });
  } catch (e) { handleError(res, e); }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select('-password');
    if (!user) return notFound(res, 'User');
    res.json(user);
  } catch (e) { handleError(res, e); }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return notFound(res, 'User');
    res.json({ message: 'User removed' });
  } catch (e) { handleError(res, e); }
};

export const deleteAllUsers = async (req, res) => {
  try {
    const result = await User.deleteMany({});
    res.json({ deleted: result.deletedCount });
  } catch (e) { handleError(res, e); }
};
