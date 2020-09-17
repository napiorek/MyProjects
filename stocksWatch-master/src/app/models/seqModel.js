module.exports = (sequelize, Sequelize) => {
    const Stock = sequelize.define("Stock", {
      StockID: {
        type: Sequelize.STRING
      },
      Symbol: {
        type: Sequelize.STRING
      },
      FullName: {
        type: Sequelize.STRING
      },
      ChangeValue: {
        type: Sequelize.DOUBLE
      },      
      ChnageInPercent: {
        type: Sequelize.DOUBLE
      }
    });
  
    return Stock;
  };