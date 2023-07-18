const jwt = require('jsonwebtoken');

const config = { algorithm: 'HS256' };

const secret = 'supersecret';

const sign = (payload) => {
  return jwt.sign(payload, secret, config);
};

const verify = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null
  }
};

module.exports = { sign, verify };