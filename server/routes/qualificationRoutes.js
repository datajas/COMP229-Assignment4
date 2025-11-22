import { Router } from "express";
import {
  getQualifications,
  createQualification,
  deleteQualification
} from "../controllers/qualificationController.js";

const router = Router();

// GET all qualifications
router.get("/", getQualifications);

// CREATE a qualification
router.post("/", createQualification);

// DELETE one qualification
router.delete("/:id", deleteQualification);

export default router;
