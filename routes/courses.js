const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Courses = mongoose.model('courses');

router.get('/',(req, res) => {
  Courses.find({provider:{$ne:''},
  universities_institutions:{$ne:''},
  
}).then(async courses => {
  let len=await courses.length;
    console.log(len);
    await res.status(200).send('success');

  });
});

module.exports = router;
