const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Courses = mongoose.model('courses');

router.get('/',(req, res) => {
  Courses.find({
  provider:{$ne:''},
  universities_institutions:{$ne:''},
  child_subject:{$ne:''},
  url:{$ne:''},
  next_session_date:{$ne:''},
  length:{$ne:null},
  video_url:{$ne:''}
}).sort({length:-1}).then(async courses => {
  let len=await courses.length;
    console.log(len);
    await res.status(200).send(courses);

  });
});

module.exports = router;