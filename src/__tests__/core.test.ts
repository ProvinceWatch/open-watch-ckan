import {
    getAllDatasets,
    getAllTagNames,
    getDatasetFromId,
    availableEndpoints
  } from '../index';
  
  describe('Core Function Responses', () => {
  
    describe('getAllDatasets()', () => {
      availableEndpoints.forEach((CKANEndpoint, i) => {
        it(`should work for ${CKANEndpoint.defaults.baseURL}`, async () => {
          const datasetRes = await getAllDatasets(CKANEndpoint);
  
          expect(datasetRes).toHaveProperty('help');
          expect(datasetRes).toHaveProperty('success');
          expect(datasetRes).toHaveProperty('result');
          expect(datasetRes.success).toBe(true);
          expect(Array.isArray(datasetRes.result)).toBe(true);
        });
      });
    });
  
    describe('getDatasetFromId()', () => {
      availableEndpoints.forEach((CKANEndpoint, i) => {
        it(`should work for ${CKANEndpoint.defaults.baseURL}`, async () => {
          const datasetId = (await getAllDatasets(CKANEndpoint)).result[10];
          const datasetRes = await getDatasetFromId(CKANEndpoint, datasetId);
  
          expect(datasetRes).toHaveProperty('help');
          expect(datasetRes).toHaveProperty('success');
          expect(datasetRes).toHaveProperty('result');
          expect(datasetRes.success).toBe(true);
          expect(typeof datasetRes.result).toBe('object');
        });
      });
    });
  
    describe('getAllTagnames()', () => {
      availableEndpoints.forEach((CKANEndpoint) => {
        it(`should work for ${CKANEndpoint.defaults.baseURL}`, async () => {
          const tagNameRes = await getAllTagNames(CKANEndpoint);
  
          expect(tagNameRes).toHaveProperty('help');
          expect(tagNameRes).toHaveProperty('success');
          expect(tagNameRes).toHaveProperty('result');
          expect(tagNameRes.success).toBe(true);
          expect(Array.isArray(tagNameRes.result)).toBe(true);
        });
      });
    });
  
  });
  