import Project from '../models/Project.js';
import { handleError, notFound } from '../utils/responses.js';

export const getProjects = async (req, res) => {
  try {
    const data = await Project.find({}).sort({ createdAt: -1 });
    res.json(data);
  } catch (e) { handleError(res, e); }
};

export const getProjectById = async (req, res) => {
  try {
    const item = await Project.findById(req.params.id);
    if (!item) return notFound(res, 'Project');
    res.json(item);
  } catch (e) { handleError(res, e); }
};

export const createProject = async (req, res) => {
  try {
    const item = await Project.create(req.body);
    res.status(201).json(item);
  } catch (e) { handleError(res, e); }
};

export const updateProject = async (req, res) => {
  try {
    const item = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return notFound(res, 'Project');
    res.json(item);
  } catch (e) { handleError(res, e); }
};

export const deleteProject = async (req, res) => {
  try {
    const item = await Project.findByIdAndDelete(req.params.id);
    if (!item) return notFound(res, 'Project');
    res.json({ message: 'Project removed' });
  } catch (e) { handleError(res, e); }
};

export const deleteAllProjects = async (req, res) => {
  try {
    const result = await Project.deleteMany({});
    res.json({ deleted: result.deletedCount });
  } catch (e) { handleError(res, e); }
};
