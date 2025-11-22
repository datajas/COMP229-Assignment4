import Qualification from "../models/Qualification.js";

export const getQualifications = async (req, res) => {
  try {
    const list = await Qualification.find().sort({ year: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
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
    console.error("Qualification Create Error:", err);
    res.status(500).json({ message: err.message });
  }
};

export const deleteQualification = async (req, res) => {
  try {
    await Qualification.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
