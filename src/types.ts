import { AxiosInstance } from 'axios';

export type CKAN_Endpoint = AxiosInstance;

export interface DatasetList {
  help: string,
  success: boolean,
  result: string[]
};

export interface Dataset {
  help: string,
  success: boolean,
  result: object
};

export interface TagNamesList {
  help: string,
  success: boolean,
  result: string[]
};

export interface CKAN_ErrorObj {
  help: string,
  success: false,
  error: {
    __type: string,
    message?: string,
    mesage?: string,
  }
}
export class CKANError extends Error {
  constructor(public readonly error: CKAN_ErrorObj) {
    super(error.error.__type);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
