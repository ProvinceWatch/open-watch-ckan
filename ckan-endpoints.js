const axios = require('axios');

const AB_CKAN = axios.create({
  baseURL: 'https://open.alberta.ca/api/3'
});

const BC_CKAN = axios.create({
  baseURL: 'https://catalogue.data.gov.bc.ca/api/3'
});

const OT_CKAN = axios.create({
  baseURL: 'https://data.ontario.ca/en/api/3'
});

const CAN_CKAN = axios.create({
  baseURL: 'https://open.canada.ca/data/en/api/3'
});

module.exports = {
  availableEndpoints: [
    AB_CKAN,
    BC_CKAN,
    OT_CKAN,
    CAN_CKAN,
  ]
}