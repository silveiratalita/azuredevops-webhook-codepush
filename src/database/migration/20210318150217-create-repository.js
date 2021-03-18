module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('repos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      repository_id: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      url: {
        type: Sequelize.STRING,
      },
      dafault_branch: {
        type: Sequelize.STRING,
      },
      ref_name_branch: {
        type: Sequelize.STRING,
      },
      policy_id_configuration: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'policies',
          key: 'id_configuration_policy',
        },
      },
      type_policy_dysplay_name: {
        type: Sequelize.STRING,
      },
      has_policy: {
        type: Sequelize.STRING,
      },
      project_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'projects',
          key: 'project_id',
        },
      },
      last_update: {
        type: Sequelize.DATE,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('repos');
  },
};
