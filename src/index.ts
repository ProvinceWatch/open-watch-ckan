// types
import { AxiosError, AxiosResponse } from 'axios';
import { CKAN_Endpoint, DatasetList, TagNamesList, Dataset } from './types';

// libs
import { availableEndpoints } from './ckan-endpoints';


const getAllDatasets = async (CKANEndpoint: CKAN_Endpoint): Promise<DatasetList> => {
  try {
    const res: AxiosResponse = await CKANEndpoint.get('/action/package_list');
    return res.data;
  } catch (e) {
    console.error(e as AxiosError);
    return { help: "", success: false, result: [] };
  }
};

const getAllTagNames = async (CKANEndpoint: CKAN_Endpoint): Promise<TagNamesList> => {
  try {
    const res: AxiosResponse = await CKANEndpoint.get('/action/tag_list');
    return res.data;
  } catch (e) {
    console.error(e as AxiosError);
    return { help: "", success: false, result: [] };
  }
};

const getDatasetFromId = async (CKANEndpoint: CKAN_Endpoint, id: string): Promise<Dataset> => {
  try {
    const res: AxiosResponse = await CKANEndpoint.get(`/action/package_show?id=${id}`);
    return res.data;
  } catch (e) {
    console.error(e as AxiosError);
    return { help: "", success: false, result: {} };
  }
};

export {
  getAllDatasets,
  getAllTagNames,
  getDatasetFromId,
  availableEndpoints
}
