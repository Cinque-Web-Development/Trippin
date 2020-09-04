const User = require("../models/user");

module.exports = {
  index,
};

function index(req, res, next) {
  let modelQuery = req.query.name
    ? {
        name: new RegExp(req.query.name, "i"),
      }
    : {};
  let sortKey = req.query.sort || "name";
  User.find(modelQuery)
    .sort(sortKey)
    .exec(function (err, users) {
      if (err) return next(err);
    });
}
