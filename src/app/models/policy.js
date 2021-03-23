import Sequelize, { DataTypes, Model } from 'sequelize';
import Repository from './repository';

class Policy extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        id_configuration_policy: Sequelize.STRING,
        required_reviwers: Sequelize.ARRAY(Sequelize.STRING),
        ref_name_branch: Sequelize.STRING,
        match_kind: Sequelize.STRING,
        is_blocked: Sequelize.BOOLEAN,
        is_deleted: Sequelize.BOOLEAN,
        is_enabled: Sequelize.BOOLEAN,
        revision: Sequelize.INTEGER,
        url: Sequelize.STRING,
        type_policy_id: Sequelize.STRING,
        type_policy_url: Sequelize.STRING,
        type_policy_display_name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    // Policy.hasMany(Repository, { foreignKey: 'repository_id' });
  }

  static async createOrUpdatePolicy(policy) {
    const policyFound = await Repository.findOne({
      where: {
        id_configuration_policy: policy.id_configuration_policy,
      },
    });
    const newPolicy = new Policy(policy);
    if (policyFound) {
      const policyUpdated = await newPolicy.update();
      return policyUpdated;
    }
    const policyCreated = await newPolicy.create();
    return policyCreated;
  }
}

export default Policy;
