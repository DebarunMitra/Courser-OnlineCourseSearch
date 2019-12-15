const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Courses = mongoose.model('courses');

/**
 * [/courses]
 * @return [return all courses from database]
 */
router.get('/',(req, res) => {
  const {page, perPage}=req.query;
  const options={
    page: (parseInt(page,10))?parseInt(page,10):1,
    limit:(parseInt(perPage,10))?parseInt(perPage,10):10
  }
  Courses.paginate({
  provider:{$ne:''},
  universities_institutions:{$ne:''},
  child_subject:{$ne:''},
  url:{$ne:''},
  next_session_date:{$ne:''},
  video_url:{$ne:''}
},options).then(async courses => {
  let len=await courses.docs.length;
    console.log(len);
    await res.status(200).send(courses);
  });
});

/**
 * [/courses]
 * @return [return searched subject courses from database]
 */
router.get('/search/:subject',(req, res) => {
  const {page, perPage}=req.query;
  console.log(page);
  const options={
    page: (parseInt(page,10))?parseInt(page,10):1,
    limit:(parseInt(perPage,10))?parseInt(perPage,10):10
  }
  let subject=(req.params.subject!=='blank')?req.params.subject:".*?";
  console.log(subject);
  Courses.paginate({
    provider:{$ne:''},
    universities_institutions:{$ne:''},
    child_subject:{ "$regex":subject, "$options": "i" },
    url:{$ne:''},
    length:{$ne:null},
    next_session_date:{$ne:''},
    video_url:{$ne:''}
},options).then(async courses => {
  let len=await courses.docs.length;
    console.log(len);
    await res.status(200).send(courses);
  });
});

/**
 * [/courses]
 * @return [return searched provider courses from database]
 */
router.get('/search/provider/:provider',(req, res) => {
  const {page, perPage}=req.query;
  const options={
    page: (parseInt(page,10))?parseInt(page,10):1,
    limit:(parseInt(perPage,10))?parseInt(perPage,10):10
  }
  let provider=(req.params.provider!=='blank')?req.params.provider:".*?";
  Courses.paginate({
    provider:{ "$regex":provider, "$options": "i" },
    universities_institutions:{$ne:''},
    child_subject:{$ne:''},
    url:{$ne:''},
    length:{$ne:null},
    next_session_date:{$ne:''},
    video_url:{$ne:''}
},options).then(async provider => {
  let len=await provider.docs.length;
    console.log(len);
    await res.status(200).send(provider);
  });
});

module.exports = router;
