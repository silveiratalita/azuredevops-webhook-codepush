import api from './api';

async function getPolicies(organization, porject) {
  const policies = await api.get(
    // `${organization}/${porject}/_apis/policy/configurations?api-version=6.1-preview.1`
    // `kdop/System%20Team/_apis/policy/configurations?api-version=6.1-preview.1`
    `kdop/System%20Team/_apis/git/policy/configurations?repositoryId={repositoryId}&refName={refName}&policyType={policyType}&api-version=5.0-preview.1`
  );
  return policies;
}
export default getPolicies;
