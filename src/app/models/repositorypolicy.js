import Sequelize, { DataTypes, Model } from 'sequelize';

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
  }
}

export default RepositoryPolicy;
