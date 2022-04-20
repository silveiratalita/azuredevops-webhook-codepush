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
function setRepositoryPolicy(data) {
  const repositoryPolicy = {
    repository_id: data.repository_id,
    policy_id: data.policy_id_configuration,
    branch_name: data.dafault_branch,
    last_update: data.last_update,
  };
  return repositoryPolicy;
}
function setPolicy(repositoryHasPolicy) {
  const hasPolicy = veryfyPolicy(repositoryHasPolicy);
  const policyObj = repositoryHasPolicy[0];
  let policy;

  if (hasPolicy) {
    policy = {
      id_configuration_policy: policyObj.idconfigurationPolicy,
      required_reviwers: policyObj.requiredReviwersIds.map(e => e),
      ref_name_branch: policyObj.refNameBranch,
      match_kind: policyObj.matchKind,
      is_blocked: policyObj.isBloked,
      is_deleted: policyObj.isDeleted,
      is_enabled: policyObj.isEnabled,
      revision: policyObj.revision,
      url: policyObj.url,
      type_policy_id: policyObj.typePolicyId,
      type_policy_url: policyObj.typePolicyUrl,
      type_policy_display_name: policyObj.typePolicyDisplayName,
    };
    return policy;
  }
  return {};
}
function setRepository(repositoryHasPolicy, repositoryData, lastUpdate) {
  const hasPolicy = veryfyPolicy(repositoryHasPolicy);

  const repository = {
    repository_id: repositoryData.id,
    name: repositoryData.name,
    url: repositoryData.url,
    dafault_branch: repositoryData.defaultBranch,
    ref_name_branch: repositoryData.defaultBranch,
    project_id: repositoryData.project.id,
    last_update: lastUpdate,
    policy_id_configuration:
      hasPolicy === true ? repositoryHasPolicy[0].idconfigurationPolicy : null,
    type_policy_dysplay_name:
      hasPolicy === true ? repositoryHasPolicy[0].typePolicyDisplayName : null,
    has_policy: hasPolicy === true,
  };

  if (hasPolicy) {
    const policy = setPolicy(repositoryHasPolicy);
    const repositoryPolicy = setRepositoryPolicy(repository);
    return [repository, policy, repositoryPolicy];
  }

  return { repository };
}

function setUser(event) {
  const userObject = {
    user_id: event.resource.pushedBy.id,
    name: event.resource.commits[0].author.name,
    email: event.resource.commits[0].author.email,
    member_of: [],
    member: [],
  };

  return userObject;
}

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

  const user = setUser(event);

  return { push, repository, project, user };
}
export default setObjects;
