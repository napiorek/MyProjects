module.exports = {
    HOST: "localhost",
    USER: "napior",
    PASSWORD: "Napior123",
    DB: "Stock",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };