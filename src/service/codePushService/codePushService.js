import getPolicyType from '../api/getPolicyType';

function veryfyPolicy(repositoryHasPolicy) {
  if (
    typeof repositoryHasPolicy === 'object' &&
    repositoryHasPolicy.hasPolicie === false
  ) {
    return false;
  }
  return true;
}
function setPush(event) {
  const push = {
    repository_id: event.resource.repository.id,
    event_type: event.eventType,
    user_name: event.resource.pushedBy.displayName,
    user_id: event.resource.pushedBy.id,
    repository_name: event.resource.repository.name,
    date: event.createdDate,
  };
  return push;
}

function setRepository(repositoryHasPolicy, repositoryData, lastUpdate) {
  const hasPolicy = veryfyPolicy(repositoryHasPolicy);
  const repository = {
    name: repositoryData.name,
    url: repositoryData.url,
    dafault_branch: repositoryData.defaultBranch,
    ref_name_branch: repositoryData.defaultBranch,
    project_id: repositoryData.id,
    last_update: lastUpdate,
    policy_id_configuration:
      hasPolicy === true ? repositoryHasPolicy[0].idconfigurationPolicy : null,
    type_policy_dysplay_name:
      hasPolicy === true ? repositoryHasPolicy[0].typePolicyDisplayName : null,
    has_policy: hasPolicy === true,
  };

  return repository;
}

function setUser() {}
function setRepositoryPolicy() {}
function setPolicy() {}

function setProject(event) {
  const project = {
    project_id: event.resource.repository.project.id,
    name: event.resource.repository.project.name,
    url: event.resource.repository.project.url,
  };
  return project;
}

async function setObjects(event) {
  const projectId = event.resource.repository.project.id;
  const repositoryId = event.resource.repository;
  const repositoryHasPolicy = await getPolicyType(projectId, repositoryId);

  const push = setPush(event);
  const repository = setRepository(
    repositoryHasPolicy,
    event.resource.repository,
    event.createdDate
  );
  const project = setProject(event);

  return { push, repository, project };
}
export default setObjects;
