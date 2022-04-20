import Sequelize, { Model } from 'sequelize';

class Project extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        project_id: Sequelize.STRING,
        name: Sequelize.STRING,
        url: Sequelize.STRING,
      },
      {
        sequelize,
        modelName: 'projects',
      }
    );
  }
}
export default Project;
