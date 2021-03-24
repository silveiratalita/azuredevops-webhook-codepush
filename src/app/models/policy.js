import Sequelize, { Model } from 'sequelize';

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
    const policyFound = await Policy.findOne({
      where: {
        id_configuration_policy: policy.id_configuration_policy,
      },
    });
    if (policyFound) {
      const policyUpdated = await Policy.update(
        {
          required_reviwers: policy.required_reviwers,
          ref_name_branch: policy.ref_name_branch,
          match_kind: policy.match_kind,
          is_blocked: policy.is_blocked,
          is_deleted: policy.is_deleted,
          is_enabled: policy.is_enabled,
          revision: policy.revision,
          url: policy.url,
          type_policy_id: policy.type_policy_id,
          type_policy_url: policy.type_policy_url,
          type_policy_display_name: policy.type_policy_display_name,
        },
        { where: { id: policyFound.dataValues.id } }
      );
      return policyUpdated;
    }
    const policyCreated = await Policy.create(policy);
    return policyCreated;
  }
}

export default Policy;
