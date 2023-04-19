const express = require("express");
const router = express.Router();
const job = require("../models/postJob");

//Get all jobs
router.get("/", async (req, res, next) => {
    let jobs;
    try {
        jobs = await job.find();
    } catch (err) {
        console.log(err);
    }

    if (!jobs) {
        return res.status(404).json({ message: "No job found" });
    }
    return res.status(200).json({
        success: true,
        existingjobs: jobs
    });
});

//add new job
router.post("/add", async (req, res, next) => {
    const {
        companyName,
        address,
        mobileNo,
        jobTitle,
        jobType,
        requirement,
        noOfEmp
    } = req.body;
    let jb;
    try {
        jb = new job({
            companyName,
            address,
            mobileNo,
            jobTitle,
            jobType,
            requirement,
            noOfEmp
        });
        await jb.save();
    } catch (err) {
        console.log(err);
    }

    if (!jb) {
        return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({
        success: "Job added successfully",
        job: jb
    });
});


//Get specific job
router.get("/:id", async (req, res, next) => {
    const id = req.params.id;
    let jb;
    console.log(`Retrieving job data for ID: ${id}`);
    console.log("Inside try block");
    try {
        jb = await job.findById(id);
        console.log("job data retrieved:", jb);
    } catch (err) {
        console.log(err);
    }
    if (!jb) {
        return res.status(404).json({ message: "No job found" });
    }
    return res.status(200).json({
        success: true,
        job: jb,
    });
});


//Update specific job
router.put('/update/:id', async (req, res) => {
    const id = req.params.id;
    const {
        companyName,
        address,
        mobileNo,
        jobTitle,
        jobType,
        requirement,
        noOfEmp
    } = req.body;
    let jb;
    try {
        jb = await job.findByIdAndUpdate(id, {
            companyName,
            address,
            mobileNo,
            jobTitle,
            jobType,
            requirement,
            noOfEmp
        });
        jb = await jb.save();
    } catch (err) {
        console.log(err);
    }
    if (!jb) {
        return res.status(404).json({ message: "Unable To update by this ID" });
    }
    return res.status(200).json({
        success: "Update Succesfully",
        job: jb
    });
});

//Delete specific job
router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    let jb;
    try {
        jb = await job.findByIdAndRemove(id);
    } catch (err) {
        console.log(err);
    }
    if (!jb) {
        return res.status(404).json({ message: "Unable to delete by this ID" });
    }
    return res.status(200).json({ message: "job successfully deleted" });
});



module.exports = router;