'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Todo extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Todo.init(
		{
			title: DataTypes.STRING,
			description: DataTypes.STRING,
			userId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Todo',
		},
	);

	Todo.associate = (models) => {
		Todo.belongsTo(models.User, { foreignKey: 'userId' });
	};

	return Todo;
};
