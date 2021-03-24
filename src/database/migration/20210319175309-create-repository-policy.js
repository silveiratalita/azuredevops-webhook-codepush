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
        reference: { model: 'Repository', key: 'repository_id' },
      },
      policy_id: {
        type: Sequelize.STRING,
        reference: { model: 'Policy', key: 'id_configuration_policy' },
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
  down: queryInterface => {
    return queryInterface.dropTable('RepositoryPolicies');
  },
};
