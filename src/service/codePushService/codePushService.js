import getPolicyType from '../api/getPolicyType';

function setPush(event) {
  const push = {
    repository_id: event.repository.id,
    event_type: event.eventType,
    user_name: event.pushedBy.displayName,
    user_id: event.pushedBy.id,
    repository_name: event.repository.name,
    date: event.createdDate,
  };
  return push;
}

function setPolicy() {}

function setRepository(repositoryHasPolicy, repositoryData, lastUpdate) {
  const repository = {
    name: repositoryData.name,
    url: repositoryData.url,
    dafault_branch: repositoryData.defaultBranch,
    ref_name_branch: repositoryData.defaultBranch,
    project_id: repositoryData.id,
    last_update: lastUpdate,
  };
  if (repositoryHasPolicy === {} && repositoryHasPolicy.hasPolicie === false) {
    repository.policy_id_configuration = null;
    repository.type_policy_dysplay_name = null;
    repository.has_policy = false;
  }

  repository.policy_id_configuration =
    repositoryHasPolicy[0].idconfigurationPolicy;
  repository.type_policy_dysplay_name =
    repositoryHasPolicy[0].typePolicyDisplayName;
  repository.has_policy = repositoryHasPolicy[0].hasPolicie;

  return repository;
}

function setUser() {}
function setProject() {}
function setRepositoryPolicy() {}

async function setObjects(event) {
  const projectId = event.resourceContainers.project.id;
  const repositoryId = event.resource.repository;
  const repositoryHasPolicy = await getPolicyType(projectId, repositoryId);

  const push = setPush(event);
  const repository = setRepository(
    repositoryHasPolicy,
    event.repository,
    event.createdDate
  );
  return { push, repository };
}
export default setObjects;
