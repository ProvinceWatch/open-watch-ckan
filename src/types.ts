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
