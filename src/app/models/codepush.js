import Sequelize, { Model } from 'sequelize';
import Ajv from 'ajv';
import getPolicies from '../../service/api/getPolicies';

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
    const { data } = await getPolicies('ss', 'ss');
    console.log('POLICIES', data.value[0]);
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
