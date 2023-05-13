const { availableEndpoints } = require('./ckan-endpoints');

const getAllDatasets = async (CKANEndpoint) => {
  try {
    const res = await CKANEndpoint.get('/action/package_list');
    return res.data;
  } catch (e) {
    console.error(e);
    return e.response.data;
  }
};

const getAllTagNames = async (CKANEndpoint) => {
  try {
    const res = await CKANEndpoint.get('/action/tag_list');
    return res.data;
  } catch (e) {
    console.error(e);
    return e.response.data;
  }
};

const getDatasetFromId = async (CKANEndpoint, id) => {
  try {
    const res = await CKANEndpoint.get(`/action/package_show?id=${id}`);
    return res.data;
  } catch (e) {
    return e.response.data;
  }
};

module.exports = {
  getAllDatasets,
  getAllTagNames,
  getDatasetFromId,
  availableEndpoints
}