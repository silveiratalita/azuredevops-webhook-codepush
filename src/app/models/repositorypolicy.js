import Sequelize, { Model } from 'sequelize';
import Repository from './repository';
import Policy from './policy';

class RepositoryPolicy extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        repository_id: Sequelize.STRING,
        policy_id: Sequelize.STRING,
        branch_name: Sequelize.STRING,
        last_update: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    RepositoryPolicy.hasMany(Repository, { foreignKey: 'repository_id' });
    RepositoryPolicy.hasMany(Policy, { foreignKey: 'id_configuration_policy' });
  }

  static async createOrUpdateRepositoryPolicy(repoPolicy) {
    const repoPolicyFound = await RepositoryPolicy.findOne({
      where: {
        repository_id: repoPolicy.repository_id,
        policy_id: repoPolicy.policy_id,
        branch_name: repoPolicy.branch_name,
      },
    });
    const newRepoPolicy = new RepositoryPolicy(repoPolicy);
    if (repoPolicyFound) {
      const repoPolicyUpdated = await newRepoPolicy.update();
      return repoPolicyUpdated;
    }
    const repoPolicyCreated = await newRepoPolicy.create();
    return repoPolicyCreated;
  }
}

export default RepositoryPolicy;
