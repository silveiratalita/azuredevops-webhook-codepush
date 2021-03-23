'use strict';
import Push from '../../models/push';
import getPolicyType from '../../../service/api/getPolicyType';
import setObjects from '../../../service/codePushService/codePushService';
import Project from '../../models/project';
import Repository from '../../models/repository';
import Policy from '../../models/policy';
import RepositoryPolicy from '../../models/repositorypolicy';
import User from '../../models/user';

class CodePushController {
  store = async (req, res) => {
    try {
      // const CodePushSaved = await codepush.createCodePush(req.body);
      let pushObjectSaved = [];
      const objects = await setObjects(req.body);
      const pushSaved = await Push.create(objects.push);
      const userSaved = await User.findOrCreate({
        where: { user_id: objects.user.user_id },
        defaults: objects.user,
      }).spread((user, created) => created);

      const projectSaved = await Project.findOrCreate({
        where: { project_id: objects.project.project_id },
        defaults: objects.project,
      }).spread((project, created) => created);

      pushObjectSaved.push(
        { push: pushSaved },
        {
          user:
            userSaved === true
              ? { userCreated: userSaved }
              : { userCreated: userSaved },
        },
        {
          project:
            projectSaved === true
              ? { ProjectCreated: projectSaved }
              : { projectCreated: projectSaved },
        }
      );

      if (Array.isArray(objects.repository)) {
        const repository = objects.repository[0];
        const policy = objects.repository[1];
        const repositoryPolicy = objects.repository[2];
        const repoSaved = await Repository.createOrUpdateRepository(repository);
        const policySaved = await Policy.createOrUpdatePolicy(policy);
        const repoPolicySaved = await RepositoryPolicy.createOrUpdateRepositoryPolicy(
          repositoryPolicy
        );
        pushObjectSaved.push(
          { repository: repoSaved },
          { policy: policySaved },
          { repositoryPOlicy: repoPolicySaved }
        );
      } else {
        const repoSaved = await Repository.createOrUpdateRepository(
          objects.repository
        );
        pushObjectSaved.push({ repository: repoSaved });
      }
      return res.status(201).send(pushObjectSaved);
    } catch (err) {
      console.error(err);
      return res.send(err.message);
    }
  };
}
export default new CodePushController();
