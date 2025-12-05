import Qualification from "../models/Qualification.js";
import { handleError, notFound } from "../utils/responses.js";

export const getQualifications = async (req, res) => {
  try {
    const list = await Qualification.find().sort({ year: -1 });
    res.json(list);
  } catch (err) {
    handleError(res, err);
  }
};

export const createQualification = async (req, res) => {
  try {
    const { title, institution, year } = req.body;

    const newQual = await Qualification.create({
      title,
      institution,
      year
    });

    res.status(201).json(newQual);
  } catch (err) {
        handleError(res, err);
  }
};

export const deleteQualification = async (req, res) => {
  try {
    const deleted = await Qualification.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return notFound(res, "Qualification");
    }

    res.json({ message: "Deleted" });
  } catch (err) {
      handleError(res, err);
  }
};
