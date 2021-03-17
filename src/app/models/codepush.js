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

  static setCodePush() {}

  static async createCodePush(event) {
    // const newCodePush = new CodePush(event);
    // const { data } = await getPolicies('orhaniation', 'projectId','repositoryId','refname',);
    const data = await getPolicyType(
      'kroton_poc',
      'd2e4dd3b-7593-4d6c-93ad-f0cb8fb1c374'
    );

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
