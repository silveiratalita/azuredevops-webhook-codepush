import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Push from '../app/models/push';
import Repository from '../app/models/repository';
import Policy from '../app/models/policy';
import Project from '../app/models/project';
import RepositoryPolicy from '../app/models/repositorypolicy';
import User from '../app/models/user';

const models = [Push, Repository, Policy, Project, RepositoryPolicy, User];
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    return models.map(model => model.init(this.connection));
  }
}

export default new Database();
