const  db = require('../config/db')


const createUser = (userData, callback) => {
    const {username, email, password} = userData
    const query = 'INSERT INTO users (username, email, password) VALUES (?,?,?)'
    db.query(query,[username, email, password, ], (err, result) => {
        if(err) {
            return callback(err, null)
        }

        return callback(null, result)
    })
}

const authUser = (userData, callback) => {
    const { username, password } = userData;
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  
    db.query(query, [username, password], (err, results) => {
      if (err) {
        return callback(err, null);
      }
  
      return callback(null, results);
    });
  };
  

module.exports = {createUser, authUser};