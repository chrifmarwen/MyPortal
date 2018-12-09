const data = require('../../data.json');

module.exports = (req, res) => {
  const users = data.users;

  res.status(200).json({ users });
};