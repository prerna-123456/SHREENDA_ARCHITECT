import { Router } from "express";
import { contactHandler } from "./contact";

const router = Router();

// ✅ direct use (import mat karo)
router.get("/demo", (req, res) => {
  res.status(200).json({ message: "Hello from Express server" });
});

router.post("/contact", contactHandler);

export default router;