import api from './api';

async function getPolicies(projectId, _repositoryId) {
  const { data } = await api.get(
    `<project>/${projectId}/_apis/policy/configurations?api-version=6.1-preview.1`
  );
  const policyAndRepo = data.value.map(e =>
    e.settings.scope.map(el => ({
      requiredReviwersIds: e.settings.requiredReviewerIds
        ? e.settings.requiredReviewerIds.map(r => r)
        : null,
      repositoryId: el.repositoryId,
      refNameBranch: el.refName,
      matchKind: el.matchKind,
      hasPolicie: el.repositoryId === _repositoryId,
      policieCreateDate: e.createdDate,
      isBloked: e.isBlocking,
      isDeleted: e.isDeleted,
      isEnabled: e.isEnabled,
      policyCreatedDate: e.createdDate,
      revision: e.revision,
      idconfigurationPolicy: e.id,
      url: e.url,
      typePolicyId: e.type.id,
      typePolicyUrl: e.type.url,
      typePolicyDisplayName: e.type.displayName,
    }))
  );
  let repoHasPolicy;
  for (let i = 0; i < policyAndRepo.lenght; i + 1) {
    if (
      policyAndRepo[i].hasPolicie === true &&
      policyAndRepo[i].repositoryId === _repositoryId
    ) {
      repoHasPolicy = [
        policyAndRepo[i],
        { hasPolicie: true, repositoryId: _repositoryId },
      ];
    }
    return repoHasPolicy;
  }
  return { hasPolicie: false };
}

export default getPolicies;
