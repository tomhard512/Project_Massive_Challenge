const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const {authorization} = req.headers;
  const secretKey = 'hfgruhgurhgubuyrbgcyubyubgyubcnyuyugb5876t67ncty78567c6n456387n98xy6765657cx65n43865c936439x984'

  if (!authorization) {
      return res.status(401).json({ message: 'Unauthorized - Missing token' });
  }

  const token = authorization.split(' ')[1]

  jwt.verify(token, secretKey, (err, user) => {
      if (err) {
          return res.status(403).json({ message: 'Forbidden - Invalid token' });
      }

      req.user = user;
      next();
  });

}


module.exports = authenticateToken;
