const express=require('express');
const mongoose=require('mongoose');
//const config=require('./config');
const session = require('express-session');
const passport = require('passport');

// Load User Model
require('./models/User');
require('./models/Course');


// Passport Config
require('./config/passport')(passport);

// Load Routes
const auth = require('./routes/auth');



const app=express();

app.use(express.urlencoded({extended:true}));

//body parser middleware
app.use(express.json());


//db path
const db=require('./config/keys').mongoURI;
//const db=config.get('mongoURI');

//db connection
mongoose.connect(db, {useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex:true})
.then(()=>console.log('MongoDB connected...')).catch(err=>console.log('ERROR: '+err));


//app.use(cookieParser());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//Middlewares
app.use(express.json({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-auth-token"
  );
  next();
});

// Use Routes
app.use('/auth', auth);
app.use('/courses',require('./routes/courses'));


//set port
const port=process.env.PORT || 5020;
//server up
app.listen(port,()=>console.log(`Server Start At ${port} Port...`));
