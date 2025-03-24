const Student = require("../models/studentModel");

exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: "Student creation failed" });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const { name, class: classFilter } = req.query;
    let filter = {};
    if (name) filter.name = { $regex: name, $options: "i" };
    if (classFilter) filter.class = classFilter;
    const students = await Student.find(filter);
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch students" });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(student);
  } catch (error) {
    res.status(400).json({ error: "Update failed" });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
  } catch (error) {
    res.status(400).json({ error: "Delete failed" });
  }
};
