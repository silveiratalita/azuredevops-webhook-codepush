import Sequelize, { Model } from 'sequelize';
import Project from './project';
import Policy from './policy';

class Repository extends Model {
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
        name: Sequelize.STRING,
        url: Sequelize.STRING,
        dafault_branch: Sequelize.STRING,
        ref_name_branch: Sequelize.STRING,
        policy_id_configuration: Sequelize.STRING,
        type_policy_dysplay_name: Sequelize.STRING,
        has_policy: Sequelize.STRING,
        project_id: Sequelize.STRING,
        last_update: Sequelize.DATE,
      },
      {
        sequelize,
        modelName: 'repos',
      }
    );
    // Repository.hasMany(Policy, { foreignKey: 'id_configuration_policy' });
    // Repository.belongsTo(Project, { foreignKey: 'project_id' });
  }

  static async createOrUpdateRepository({ repository }) {
    console.log(repository);
    const repositoryFound = await Repository.findOne({
      where: {
        repository_id: repository.repository_id,
      },
    });
    const newRepository = new Repository(repository);
    if (repositoryFound) {
      const repositoryUpdated = await newRepository.update();
      return repositoryUpdated;
    }
    const repositoryCreated = await Repository.create(repository);
    return repositoryCreated;
  }
}
export default Repository;
