module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pushes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      repository_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'repos',
          key: 'repository_id',
        },
      },
      event_type: {
        type: Sequelize.STRING,
      },
      user_name: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id',
        },
      },
      repository_name: {
        type: Sequelize.STRING,
      },
      date: {
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
    return queryInterface.dropTable('pushes');
  },
};
