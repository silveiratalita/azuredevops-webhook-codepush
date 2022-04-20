import Sequelize, { Model } from 'sequelize';

class Push extends Model {
  static init(sequelize) {
    super.init(
      {
        repository_id: {
          type: Sequelize.STRING,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        event_type: Sequelize.STRING,
        user_name: Sequelize.STRING,
        user_id: Sequelize.STRING,
        repository_name: Sequelize.STRING,
        date: Sequelize.DATE,
      },
      {
        sequelize,
        modelName: 'pushes',
      }
    );
    // Push.hasOne(Repository, { foreignKey: 'repository_id' });
    // Push.hasOne(User, { foreignKey: 'user_id' });
  }

  static async createPush(push) {
    const newPush = new Push(push);
    const pushSaved = await newPush.save();
    return pushSaved;
  }
}
export default Push;
