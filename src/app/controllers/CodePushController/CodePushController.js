'use strict';
import codepush from '../../models/codepush';
import {user,policy,project,push,repository,repositorypolicy} from '../../models/index';
import getPolicyType from '../../../service/api/getPolicyType';
import setObjects from '../../../service/codePushService/codePushService';


class CodePushController {
  store = async (req, res) => {
    try {
      // const CodePushSaved = await codepush.createCodePush(req.body);
      const objects = await setObjects(req.body);
      const pushSaved= await push.create(objects.push);
      // const repositorySaved = await repository(req.body);
      // const policySaved;
      // const projectSaved
      // const repositoryPolicy

      return res.status(201).send(Objcts);
    } catch (err) {
      console.error(err);
      return res.send(err.message);
    }
  };
}
export default new CodePushController();
