'use strict';
import codepush from '../../models/codepush';

class CodePushController {
  store = async (req, res) => {
    try {
      const CodePushSaved = await codepush.createCodePush(req.body);

      return res.status(201).send(CodePushSaved);
    } catch (err) {
      console.error(err);
      return res.send(err.message);
    }
  };
}
export default new CodePushController();
