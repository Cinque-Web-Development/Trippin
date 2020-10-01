const router = require('express').Router();
const passport = require('passport');

// router.get('/', function(req, res) {
//   res.redirect('/users');
// });

router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile', 'email']}
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
})

module.exports = router;