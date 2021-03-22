import Sequelize, { Model } from 'sequelize';
import User from './user';
import Repository from './repository';

class Push extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        repository_id: Sequelize.STRING,
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
    console.log('salvo', pushSaved);
    return pushSaved;
  }
}
export default Push;
