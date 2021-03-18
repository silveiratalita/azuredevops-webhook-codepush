import Sequelize, { Model } from 'sequelize';
import Ajv from 'ajv';

import getPolicyType from '../../service/api/getPolicyType';

class CodePush extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        date: Sequelize.DATE,
        email: Sequelize.STRING,
        name: Sequelize.STRING,
        comment: Sequelize.STRING,
        commitId: Sequelize.UUID,
        commiterDate: Sequelize.DATE,
        commiterUrl: Sequelize.STRING,
        pushedbyUrl: Sequelize.STRING,
        defaultBranch: Sequelize.STRING,
        repositoryName: Sequelize.STRING,
        projectRemoteUrl: Sequelize.STRING,
        teamprojectUrl: Sequelize.STRING,
        member: Sequelize.STRING,
        memberOf: Sequelize.STRING,
        isActive: Sequelize.BOOLEAN,
        uniqueUserId: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }

  static async setRepoWithPolicy(data, repositoryId) {
    // eslint-disable-next-line no-return-assign
    let repoToSave;
    for (let i = 0; i < data.lenght; i + 1) {
      if (
        data[i].haspolicie === true &&
        data[i].repositoryId === repositoryId
      ) {
        // tenho que setar que a politica é falsa
        // como ainda não ajeitei o banco vou botar em um objeto
        repoToSave = { haspolicie: true, repositoryId };
        // ai vou salvar o repo q tenho com as politicas que ele ha tem no projeto dele + os dados do push
      }
    }
    if (repoToSave === false) {
      throw new Error('This Repoitory has no Policies');
    }
    console.log('repoto save', repoToSave);
  }

  static async createCodePush(event) {
    // const newCodePush = new CodePush(event);
    // const { data } = await getPolicies('orhaniation', 'projectId','repositoryId','refname',);
    const projectId = event.resourceContainers.project.id;
    const repositoryId = event.resource.repository;
    const data = await getPolicyType(projectId, repositoryId);
    this.setRepoWithPolicy(data);

    // const CodePushSaved = await newCodePush.save();
    // console.log('salvo', CodePushSaved);
    // return CodePushSaved;
  }

  // // valide(schema, data) {
  // //   const ajv = new Ajv();
  //   if (ajv.validate(schema, data)) {
  //     return {
  //       error: ajv.errorsText(),
  //     };
  //   }

  //   return {
  //     success: true,
  //   };
  // }

  // validate(schema, data) {
  //   if (!schema || !data) {
  //     throw new Error(`Invalid Validate Args - : ${schema} - ${data} `);
  //   }
  //   return new Promise((resolve, reject) => {
  //     const result = this.valide(schema, data);
  //     if (result.success) {
  //       return resolve(result.success);
  //     }
  //     return reject(result.error);
  //   });
  // }
}

export default CodePush;
