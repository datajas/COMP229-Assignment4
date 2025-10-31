import Qualification from '../models/Qualification.js';

// Generic helpers
const notFound = (res, entity='Item') => res.status(404).json({ message: `${entity} not found` });
const handleError = (res, error) => res.status(500).json({ message: error.message || 'Server error' });

export const getQualifications = async (req, res) => {
  try {
    const data = await Qualification.find({}).sort({ createdAt: -1 });
    res.json(data);
  } catch (e) { handleError(res, e); }
};

export const getQualificationById = async (req, res) => {
  try {
    const item = await Qualification.findById(req.params.id);
    if (!item) return notFound(res, 'Qualification');
    res.json(item);
  } catch (e) { handleError(res, e); }
};

export const createQualification = async (req, res) => {
  try {
    const item = await Qualification.create(req.body);
    res.status(201).json(item);
  } catch (e) { handleError(res, e); }
};

export const updateQualification = async (req, res) => {
  try {
    const item = await Qualification.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return notFound(res, 'Qualification');
    res.json(item);
  } catch (e) { handleError(res, e); }
};

export const deleteQualification = async (req, res) => {
  try {
    const item = await Qualification.findByIdAndDelete(req.params.id);
    if (!item) return notFound(res, 'Qualification');
    res.json({ message: 'Qualification removed' });
  } catch (e) { handleError(res, e); }
};

export const deleteAllQualifications = async (req, res) => {
  try {
    const result = await Qualification.deleteMany({});
    res.json({ deleted: result.deletedCount });
  } catch (e) { handleError(res, e); }
};
