import axios, { AxiosInstance } from 'axios';

const AB_CKAN: AxiosInstance = axios.create({
  baseURL: 'https://open.alberta.ca/api/3'
});

const BC_CKAN: AxiosInstance = axios.create({
  baseURL: 'https://catalogue.data.gov.bc.ca/api/3'
});

const OT_CKAN: AxiosInstance = axios.create({
  baseURL: 'https://data.ontario.ca/en/api/3'
});

const CAN_CKAN: AxiosInstance = axios.create({
  baseURL: 'https://open.canada.ca/data/en/api/3'
});

export const endpoints = {
  AB_CKAN,
  BC_CKAN,
  OT_CKAN,
  CAN_CKAN,
}