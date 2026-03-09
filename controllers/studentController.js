const Student = require("../models/student.js");

// Show all students
exports.getStudents = async (req,res)=>{
    const students = await Student.find();
    res.render("students/index",{students});
};

// New student form
exports.newStudentForm = (req,res)=>{
    res.render("students/new");
};

// Create student
exports.createStudent = async (req,res)=>{
    const {name, roll} = req.body;

    await Student.create({name,roll});

    res.redirect("/students");
};

// Edit form
exports.editStudentForm = async (req,res)=>{
    const student = await Student.findById(req.params.id);
    res.render("students/edit",{student});
};

// Update student
exports.updateStudent = async (req,res)=>{
    const {name, roll} = req.body;

    await Student.findByIdAndUpdate(req.params.id,{name,roll});

    res.redirect("/students");
};

// Delete student
exports.deleteStudent = async (req,res)=>{
    await Student.findByIdAndDelete(req.params.id);

    res.redirect("/students");
};