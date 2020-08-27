const User = require('../models/user');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login
};

async function signup(req, res) {
  // const user = new User(req.body);
  User.create(req.body)
  .then(user => {
    user.save();
    const token = createJWT(user);
    res.json({token})
  })
  .catch(err => {
    res.status(400).json(err)
  })
  // try {
  //   await user.save();
  //   // Be sure to first delete data that should not be in the token
  //   const token = createJWT(user);
  //   res.json({ token });
  // } catch (err) {
  //   let errors = [];
  //   for(error in err.errors) {
  //     errors.push(err.errors[`${error}`].message)
  //   }
  //   console.log(errors)
  //   // Probably a duplicate email
  //   res.status(400).json(errors);
  // }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}