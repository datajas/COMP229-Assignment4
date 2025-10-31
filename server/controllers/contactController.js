import Contact from '../models/Contact.js';

// Generic helpers
const notFound = (res, entity='Item') => res.status(404).json({ message: `${entity} not found` });
const handleError = (res, error) => res.status(500).json({ message: error.message || 'Server error' });

export const getContacts = async (req, res) => {
  try {
    const data = await Contact.find({}).sort({ createdAt: -1 });
    res.json(data);
  } catch (e) { handleError(res, e); }
};

export const getContactById = async (req, res) => {
  try {
    const item = await Contact.findById(req.params.id);
    if (!item) return notFound(res, 'Contact');
    res.json(item);
  } catch (e) { handleError(res, e); }
};

export const createContact = async (req, res) => {
  try {
    const item = await Contact.create(req.body);
    res.status(201).json(item);
  } catch (e) { handleError(res, e); }
};

export const updateContact = async (req, res) => {
  try {
    const item = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return notFound(res, 'Contact');
    res.json(item);
  } catch (e) { handleError(res, e); }
};

export const deleteContact = async (req, res) => {
  try {
    const item = await Contact.findByIdAndDelete(req.params.id);
    if (!item) return notFound(res, 'Contact');
    res.json({ message: 'Contact removed' });
  } catch (e) { handleError(res, e); }
};

export const deleteAllContacts = async (req, res) => {
  try {
    const result = await Contact.deleteMany({});
    res.json({ deleted: result.deletedCount });
  } catch (e) { handleError(res, e); }
};
