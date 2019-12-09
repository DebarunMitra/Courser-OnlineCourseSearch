const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Shema
const CourseSchema = new Schema({
  course_id:{
    type:Number,
    required: true
  },
  course_name:{
    type:String,
    required: true
  },
  provider:{
    type:String,
    required: true
  },
  universities_institutions:{
    type:String,
    required: true
  },
  parent_subject:{
    type:String,
    required:true
  },
  parent_subject:{
    type:String,
    required: true
  },
  child_subject:{
    type:String,
    required:true
  },
  url:{
    type:String,
    required: true
  },
  next_session_date:{
    type:String,
    required:true
  },
  length:{
    type:Number,
    required: true
  },
  video_url:{
    type:String,
    required:true
  }
});

// Create collection and add schema
mongoose.model('courses', CourseSchema);
