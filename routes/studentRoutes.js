const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");

router.get("/", studentController.getStudents);

router.get("/new", studentController.newStudentForm);

router.post("/", studentController.createStudent);

router.get("/:id/edit", studentController.editStudentForm);

router.put("/:id", studentController.updateStudent);

router.delete("/:id", studentController.deleteStudent);

module.exports = router;