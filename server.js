const express=require('express');
const mongoose=require('mongoose');
//const config=require('./config');
const session = require('express-session');
const passport = require('passport');

// Load User Model
require('./models/User');


// Passport Config
require('./config/passport')(passport);

// Load Routes
const auth = require('./routes/auth');


const app=express();

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


// Use Routes
app.use('/auth', auth);

//set port
const port=process.env.PORT || 5020;
//server up
app.listen(port,()=>console.log(`Server Start At ${port} Port...`));
