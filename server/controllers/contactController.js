import Contact from "../models/Contact.js";
import { handleError, notFound } from "../utils/responses.js";

export const getContacts = async (req, res) => {
    try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    handleError(res, err);
  }
};

export const createContact = async (req, res) => {
   try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (err) {
    handleError(res, err);
  }
};

export const getContactById = async (req, res) => {
    try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return notFound(res, "Contact");
    res.json(contact);
  } catch (err) {
    handleError(res, err);
  }
};

export const deleteContact = async (req, res) => {
    try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) return notFound(res, "Contact");
    res.json({ success: true });
  } catch (err) {
    handleError(res, err);
  }
};
