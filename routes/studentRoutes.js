const express = require("express");
const { createStudent, getStudents, updateStudent, deleteStudent } = require("../controllers/studentController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, createStudent);
router.get("/", authMiddleware, getStudents);
router.put("/:id", authMiddleware, updateStudent);
router.delete("/:id", authMiddleware, deleteStudent);

module.exports = router;
