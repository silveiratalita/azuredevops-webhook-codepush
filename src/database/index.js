import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import CodePush from '../app/models/codepush';

const models = [CodePush];
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    return models.map(model => model.init(this.connection));
  }
}

export default new Database();
