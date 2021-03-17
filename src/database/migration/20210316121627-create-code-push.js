module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('code_pushes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATE,
      },
      email: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      comment: {
        type: Sequelize.STRING,
      },
      commit_id: {
        type: Sequelize.STRING,
      },
      commiter_date: {
        type: Sequelize.DATE,
      },
      commiter_url: {
        type: Sequelize.STRING,
      },
      pushedby_url: {
        type: Sequelize.STRING,
      },
      default_branch: {
        type: Sequelize.STRING,
      },
      repository_id: {
        type: Sequelize.STRING,
      },
      repository_name: {
        type: Sequelize.STRING,
      },
      project_remote_url: {
        type: Sequelize.STRING,
      },
      teamproject_url: {
        type: Sequelize.STRING,
      },
      member: {
        type: Sequelize.STRING,
      },
      member_of: {
        type: Sequelize.STRING,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
      },
      unique_user_id: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('code_pushes');
  },
};
