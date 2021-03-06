const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),(req, res) => {
      res.redirect('/');
  });



  router.get('/verify', (req, res) => {
    if(req.user){
      console.log('verified');
        res.status(200).send(req.user);
    } else {
      console.log('Not Auth');
        res.status(200);
    }
  });

  router.get('/logout', (req, res) => {
   req.logout();
   res.redirect('/');
  });


module.exports = router;
