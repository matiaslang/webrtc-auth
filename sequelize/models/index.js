
var { sequelize, DataTypes } = require('../index');
var sequelize = require('../index').sequelize;
var Sequelize = require('../index').DataTypes;
var User = require('./user')(sequelize, Sequelize);
var db = {
  User
};

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = DataTypes;

module.exports = db;
