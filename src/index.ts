import axios, { AxiosResponse } from 'axios';
import { availableEndpoints, endpoints } from './ckan-endpoints';
import { handleAxiosError, handleResponseError, handleDataError } from './errors';
import { CKAN_Endpoint, DatasetList, TagNamesList, Dataset, CKANError, CKAN_ErrorObj } from './types';


const makeRequest = async <T>(CKANEndpoint: CKAN_Endpoint, action: string): Promise<T> => {
  let res: AxiosResponse | null = null;
  let errorObj: CKAN_ErrorObj | null = null;

  try {
    res = await CKANEndpoint.get(action);
  } catch (error: any) {
    errorObj = handleAxiosError(error);
  }

  if (errorObj) {
    throw new CKANError(errorObj);
  }

  errorObj = handleResponseError(res as AxiosResponse);
  if (errorObj) {
    throw new CKANError(errorObj);
  }

  const data = res?.data as CKAN_ErrorObj;
  errorObj = handleDataError(data);
  if (errorObj) {
    throw new CKANError(errorObj);
  }

  return data as T;
};


const createEndpoint = (baseURL: string) => {
  return axios.create({ baseURL }) as CKAN_Endpoint;
}

const getAllDatasets = async (CKANEndpoint: CKAN_Endpoint): Promise<DatasetList> => {
  return makeRequest<DatasetList>(CKANEndpoint, '/action/package_list');
};

const getAllTagNames = async (CKANEndpoint: CKAN_Endpoint): Promise<TagNamesList> => {
  return makeRequest<TagNamesList>(CKANEndpoint, '/action/tag_list');
};

const getDatasetFromId = async (CKANEndpoint: CKAN_Endpoint, id: string): Promise<Dataset> => {
  return makeRequest<Dataset>(CKANEndpoint, `/action/package_show?id=${id}`);
};

const getRecentlyChangedDatasets = async (CKANEndpoint: CKAN_Endpoint): Promise<DatasetList> => {
  return makeRequest<DatasetList>(CKANEndpoint, '/action/recently_changed_packages_activity_list');
};

export {
  getAllDatasets,
  getAllTagNames,
  getDatasetFromId,
  getRecentlyChangedDatasets,
  createEndpoint,
  availableEndpoints,
  endpoints
}
