import Sequelize, { Model } from 'sequelize';
import Project from './project';
import Policy from './policy';

class RepositoryPolicy extends Model {
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
        policy_id: Sequelize.STRING,
      },
      {
        sequelize,
        modelName: 'repository_policies',
      }
    );
    // RepositoryPolicy.hasMany(Policy, { foreignKey: 'id_configuration_policy' });
    // RepositoryPolicy.hasMany(Project, { foreignKey: 'project_id' });
  }
}
export default RepositoryPolicy;
