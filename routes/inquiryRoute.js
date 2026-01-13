// backend/routes/inquiryRoute.js
import express from "express";
import {
  createInquiry,
  getInquiryList,
  updateInquiryStatus,
  getInquiryStats,
  markSeen,
} from "../controllers/inquiryController.js";

const router = express.Router();

// PUBLIC (frontend form)
router.post("/create", createInquiry);

// ADMIN / DASHBOARD
router.get("/list", getInquiryList);
router.get("/stats", getInquiryStats);
router.post("/seen", markSeen);
router.put("/update/:id", updateInquiryStatus);

export default router;
