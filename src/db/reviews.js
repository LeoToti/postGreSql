module.exports = (sequelize, DataTypes) =>{
    const Review = sequelize.define("review", {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          required: true,
        },
    
        price: {
          type: DataTypes.FLOAT,
          required: true,
        },
      });
      Review.associate = (models) => {
        Review.belongsTo(models.Product)
        
    
       }
      return Review
}