const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Shema
const CourseSchema = new Schema({
  Course Id:{
    type:Number,
    required: true
  },
  Course Name:{
    type:String,
    required: true
  },
  Provider:{
    type:String,
    required: true
  },
  Universities/Institutions:{
    type:String,
    required: true
  },
  Parent Subject:{
    type:String,
    required:true
  },
  Parent Subject:{
    type:String,
    required: true
  },
  Child Subject:{
    type:String,
    required:true
  },
  Url:{
    type:String,
    required: true
  },
  Next Session Date:{
    type:String,
    required:true
  },
  Length:{
    type:Number,
    required: true
  },
  Video(Url):{
    type:String,
    required:true
  }
});

// Create collection and add schema
mongoose.model('courses', CourseSchema);
