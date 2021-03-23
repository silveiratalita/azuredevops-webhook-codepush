module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('policies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_configuration_policy: {
        type: Sequelize.STRING,
      },
      required_reviwers: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      ref_name_branch: {
        type: Sequelize.STRING,
      },
      match_kind: {
        type: Sequelize.STRING,
      },
      is_blocked: {
        type: Sequelize.BOOLEAN,
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
      },
      is_enabled: {
        type: Sequelize.BOOLEAN,
      },
      revision: {
        type: Sequelize.INTEGER,
      },
      url: {
        type: Sequelize.STRING,
      },
      type_policy_id: {
        type: Sequelize.STRING,
      },
      type_policy_url: {
        type: Sequelize.STRING,
      },
      type_policy_display_name: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('policies');
  },
};
