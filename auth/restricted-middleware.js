const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (req.decodedJwt) {
    next();
  } else if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedJwt) => {
      if (err) {
        res.status(401).json({ message: "access denied" });
      } else {
        req.decodedJwt = decodedJwt;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "access denied" });
  }
};
