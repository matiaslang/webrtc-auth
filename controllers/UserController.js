const mockUsers = require('./mockUsers');
const { User } = require('../sequelize/models');

function login(req, res) {
  const username = req.body.username;

  if (!username) return res.sendStatus(400);

  User.findOne({
    where: {
      username
    },
    attributes:['username', 'firstName', 'lastName', 'email', 'createdAt', 'updatedAt']
  })
  .then(user => {
    if (!user) res.sendStatus(404);
    else res.status(200).json(user);
  })
  .catch(err => {
    console.error(err);
    res.status(500);
  });

}

const logout = (req, res) => {
  return res.sendStatus(200);
};

module.exports = {
  login,
  logout
};
