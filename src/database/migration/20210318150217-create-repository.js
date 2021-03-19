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
