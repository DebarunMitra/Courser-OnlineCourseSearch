const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Courses = mongoose.model('courses');

/**
 * [/courses]
 * @return [return all courses from database]
 */
router.get('/',(req, res) => {
  Courses.find({
  provider:{$ne:''},
  universities_institutions:{$ne:''},
  child_subject:{$ne:''},
  url:{$ne:''},
  next_session_date:{$ne:''},
  video_url:{$ne:''}
}).then(async courses => {
  let len=await courses.length;
    console.log(len);
    await res.status(200).send(courses);
  });
});

/**
 * [/courses]
 * @return [return all courses from database]
 */
router.get('/:subject',(req, res) => {
  Courses.find({
    provider:{$ne:''},
    universities_institutions:{$ne:''},
    child_subject:{ "$regex":req.params.subject, "$options": "i" },
    url:{$ne:''},
    length:{$ne:null},
    next_session_date:{$ne:''},
    video_url:{$ne:''}
}).then(async courses => {
  let len=await courses.length;
    console.log(len);
    await res.status(200).send(courses);
  });
});








module.exports = router;
