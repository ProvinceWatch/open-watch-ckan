const { expect } = require('chai');
const {
  getAllDatasets,
  getAllTagNames,
  getDatasetFromId,
  availableEndpoints
} = require('..');

describe('Core Function Responses', () => {

  describe('getAllDatasets()', () => {
    availableEndpoints.forEach((CKANEndpoint, i) => {
      it(`should work for ${CKANEndpoint.defaults.baseURL}`, async () => {
        const datasetRes = await getAllDatasets(CKANEndpoint);

        expect(datasetRes).to.have.property('help');
        expect(datasetRes).to.have.property('success');
        expect(datasetRes).to.have.property('result');
        expect(datasetRes.success).equal(true);
        expect(datasetRes.result).to.be.an('array');
      });
    });
  });

  describe('getDatasetFromId()', () => {
    availableEndpoints.forEach((CKANEndpoint, i) => {
      it(`should work for ${CKANEndpoint.defaults.baseURL}`, async () => {
        const datasetId = (await getAllDatasets(CKANEndpoint)).result[10];
        const datasetRes = await getDatasetFromId(CKANEndpoint, datasetId);

        expect(datasetRes).to.have.property('help');
        expect(datasetRes).to.have.property('success');
        expect(datasetRes).to.have.property('result');
        expect(datasetRes.success).equal(true);
        expect(datasetRes.result).to.be.an('object');
      });
    });
  });

  describe('getAllTagnames()', () => {
    availableEndpoints.forEach((CKANEndpoint) => {
      it(`should work for ${CKANEndpoint.defaults.baseURL}`, async () => {
        const tagNameRes = await getAllTagNames(CKANEndpoint);

        expect(tagNameRes).to.have.property('help');
        expect(tagNameRes).to.have.property('success');
        expect(tagNameRes).to.have.property('result');
        expect(tagNameRes.success).equal(true);
        expect(tagNameRes.result).to.be.an('array');
      });
    });
  });

});