import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        user_id: Sequelize.STRING,
        name: Sequelize.STRING,
        member_of: Sequelize.ARRAY(Sequelize.STRING),
        member: Sequelize.ARRAY(Sequelize.STRING),
      },
      {
        sequelize,
        modelName: 'users',
      }
    );
  }
}
export default User;
