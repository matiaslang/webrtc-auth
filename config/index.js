module.exports = {
  "development": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DB,
    "host": "auth-db",
    "dialect": "postgres",
    seederStorage: 'sequelize',
    seederStorageTableName: 'SequelizeData'
  },
  "test": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DB,
    "host": "auth-db",
    "dialect": "postgres",
    seederStorage: 'sequelize',
    seederStorageTableName: 'SequelizeData'
  },
  "production": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DB,
    "host": "auth-db",
    "dialect": "postgres",
    seederStorage: 'sequelize',
    seederStorageTableName: 'SequelizeData'
  }
};
