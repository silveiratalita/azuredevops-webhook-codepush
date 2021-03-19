'use strict';
import codepush from '../../models/codepush';
import repository from '../../models/repository';
import getPolicyType from '../../../service/api/getPolicyType';
import setObjects from '../../../service/codePushService/codePushService';
class CodePushController {
  store = async (req, res) => {
    try {
      // const CodePushSaved = await codepush.createCodePush(req.body);
      const Objcts = await setObjects(req.body);
      // const pushSaved= await
      // const repositorySaved = await repository(req.body);
      // const policySaved;
      // const projectSaved
      // const repositoryPolicy

      return res.status(201).send(CodePushSaved);
    } catch (err) {
      console.error(err);
      return res.send(err.message);
    }
  };
}
export default new CodePushController();
