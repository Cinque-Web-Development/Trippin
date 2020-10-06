const router = require('express').Router();

// router.get('/', function(req, res) {
//   res.redirect('/users');
// });

router.get('/hotels', )

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})

module.exports = router;