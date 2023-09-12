import {
  getAllDatasets,
  getAllTagNames,
  getDatasetFromId,
  getRecentlyChangedDatasets,
  getDatasetsFromTag,
  endpoints
} from '../index';
import { CKANError } from '../types';

describe('Core Function Responses', () => {
  const availableEndpoints = Object.values(endpoints);

  let totalErrs = 0;
  let totalReqs = 0;
  const tags: string[] = [];

  describe('getAllDatasets()', () => {
    availableEndpoints.forEach((CKANEndpoint, i) => {
      it(`should work for ${CKANEndpoint.defaults.baseURL}`, async () => {
        try {
          totalReqs += 1;
          const datasetRes = await getAllDatasets(CKANEndpoint);
          expect(datasetRes).toHaveProperty('help');
          expect(datasetRes).toHaveProperty('success');
          expect(datasetRes).toHaveProperty('result');
          expect(datasetRes.success).toBe(true);
          expect(Array.isArray(datasetRes.result)).toBe(true);
        } catch (error) {
          expect(error).toBeInstanceOf(CKANError);
          totalErrs += 1;
        }
      });
    });
  });

  describe('getDatasetFromId()', () => {
    availableEndpoints.forEach((CKANEndpoint, i) => {
      it(`should work for ${CKANEndpoint.defaults.baseURL}`, async () => {
        try {
          totalReqs += 1;
          const datasetId = (await getAllDatasets(CKANEndpoint)).result[10];
          const datasetRes = await getDatasetFromId(CKANEndpoint, datasetId);

          expect(datasetRes).toHaveProperty('help');
          expect(datasetRes).toHaveProperty('success');
          expect(datasetRes).toHaveProperty('result');
          expect(datasetRes.success).toBe(true);
          expect(typeof datasetRes.result).toBe('object');
        } catch (error) {
          // If we error out, make sure we are throwing an approprite error class.
          expect(error).toBeInstanceOf(CKANError);
          totalErrs += 1;
        }
      });
    });
  });

  describe('getAllTagnames()', () => {
    availableEndpoints.forEach((CKANEndpoint) => {
      it(`should work for ${CKANEndpoint.defaults.baseURL}`, async () => {
        try {
          totalReqs += 1;
          const tagNameRes = await getAllTagNames(CKANEndpoint);

          expect(tagNameRes).toHaveProperty('help');
          expect(tagNameRes).toHaveProperty('success');
          expect(tagNameRes).toHaveProperty('result');
          expect(tagNameRes.success).toBe(true);
          expect(Array.isArray(tagNameRes.result)).toBe(true);

          tags.push(tagNameRes.result[0]);
        } catch (error) {
          // If we error out, make sure we are throwing an approprite error class.
          expect(error).toBeInstanceOf(CKANError);
          totalErrs += 1;
        }
      });
    });
  });

  describe('getRecentlyChangedDatasets()', () => {
    availableEndpoints.forEach((CKANEndpoint) => {
      it(`should work for ${CKANEndpoint.defaults.baseURL}`, async () => {
        try {
          totalReqs += 1;
          const recentDataRes = await getRecentlyChangedDatasets(CKANEndpoint);

          expect(recentDataRes).toHaveProperty('help');
          expect(recentDataRes).toHaveProperty('success');
          expect(recentDataRes).toHaveProperty('result');
          expect(recentDataRes.success).toBe(true);
          expect(Array.isArray(recentDataRes.result)).toBe(true);
        } catch (error) {
          // If we error out, make sure we are throwing an approprite error class.
          expect(error).toBeInstanceOf(CKANError);
          totalErrs += 1;
        }
      });
    });
  });

  describe('getDatasetsFromTag()', () => {
    // Fetch all the tags before any test in this block runs
    beforeAll(async () => {
      for (const CKANEndpoint of availableEndpoints) {
        const tagNameRes = await getAllTagNames(CKANEndpoint);
        tags.push(tagNameRes.result[0]);
      }
    });

    availableEndpoints.forEach((CKANEndpoint, i) => {
      it(`should work for ${CKANEndpoint.defaults.baseURL}`, async () => {
        try {
          totalReqs += 1;
          const recentDataRes = await getDatasetsFromTag(CKANEndpoint, tags[i]);
          expect(recentDataRes).toHaveProperty('help');
          expect(recentDataRes).toHaveProperty('success');
          expect(recentDataRes).toHaveProperty('result');
        } catch (error) {
          totalErrs += 1;
        }
      });
    });
  });

  afterAll(() => {
    const errorRate = (totalErrs / totalReqs) * 100;
    console.log(`Total Requests Made: ${totalReqs}`);
    console.log(`Total Errors: ${totalErrs}`);
    console.log(`Error rate for getAllDatasets: ${errorRate}%`);
    expect(errorRate).toBeLessThan(15);
  });
});
