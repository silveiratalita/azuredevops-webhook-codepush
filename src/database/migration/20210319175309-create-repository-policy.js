module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RepositoryPolicies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      repository_id: {
        type: Sequelize.STRING,
      },
      policy_id: {
        type: Sequelize.STRING,
      },
      branch_name: {
        type: Sequelize.STRING,
      },
      last_update: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('RepositoryPolicies');
  },
};
