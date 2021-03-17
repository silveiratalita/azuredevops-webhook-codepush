import api from './api';

async function getPolicies(projectId, _repositoryId) {
  const { data } = await api.get(
    `kdop/${projectId}/_apis/policy/configurations?api-version=6.1-preview.1`
  );
  const policyAndRepo = data.value.map(e =>
    e.settings.scope.map(el => ({
      requiredReviwersIds: e.settings.requiredReviewerIds
        ? e.settings.requiredReviewerIds.map(r => r)
        : null,
      repositoryId: el.repositoryId,
      refNameBranch: el.refName,
      matchKind: el.matchKind,
      haspolicie: el.repositoryId === _repositoryId,
      policieCreateDate: e.createdDate,
      isBloked: e.isBlocking,
      isDeleted: e.isDeleted,
      revision: e.revision,
      idconfigurationPolicy: e.id,
      url: e.url,
      typePolicyId: e.type.id,
      typePolicyUrl: e.type.url,
      typePolicyDusplayName: e.type.displayName,
    }))
  );
  return policyAndRepo;
}

export default getPolicies;
