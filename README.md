# open-watch-ckan

[![Node.js CI](https://github.com/ProvinceWatch/open-watch/actions/workflows/node.js.yml/badge.svg)](https://github.com/ProvinceWatch/open-watch-ckan/actions/workflows/node.js.yml)

open-watch-ckan is a JavaScript Library for interacting with [CKAN APIs](https://ckan.org/).

## Official CKAN Documentation
Please refer to the [Official CKAN Documentation](https://docs.ckan.org/en/2.10/) for specific information about the API

## Installing
```bash
npm install @province-watch/open-watch-ckan
```

## Using The Library
```js
const CKAN = require('@province-watch/open-watch-ckan');
```
## CKAN Endpoints - Predefined Objects and Custom Creation
- `CKAN_Endpoints` are axios instances configured to point to a specific base URL of a CKAN API.
- `CKAN_Endpoints` are passed into data-fetching functions to make requests.

### Predefined Endpoints
```ts
const {
  AB_CKAN,
  BC_CKAN,
  OT_CKAN,
  CAN_CKAN,
} = CKAN.endpoints;
```
### Custom Endpoints
- If your target API is not included in the default `CKAN.endpoints` object, you can create your own `CKAN_Endpoint` object.
```ts
const customCKAN: CKAN_Endpoint = CKAN.createEndpoint('https://data.example.ckan.api/3');
```

## Making Requests
- Making requests is the same with both predefined and custom `CKAN_Endpoints`:
```ts
// All Datasets
const albertaDatasets: DatasetList   = await CKAN.getAllDatasets(AB_CKAN);
const customDatasets: DatasetList    = await CKAN.getAllDatasets(customCKAN);

// Specific Dataset
const specificAlbertaData: Dataset   = await CKAN.getDatasetFromId(AB_CKAN, '<dataset_id>');
const specificCustomData: Dataset    = await CKAN.getDatasetFromId(customCKAN, '<dataset_id>');

// Recently Changed Datasets
const albertaRecentData: DatasetList = await CKAN.getAllDatasets(AB_CKAN);
const customRecentData: DatasetList  = await CKAN.getAllDatasets(customCKAN);

// Tag Names
const albertaTagNames: TagNamesList  = await CKAN.getAllTagNames(AB_CKAN);
const customTagNames: TagNamesList   = await CKAN.getAllTagNames(customCKAN);
```

For convinience, these are the type defitions for the different responses from CKAN API calls
```ts
type CKAN_Endpoint = AxiosInstance

interface DatasetList {
  help: string,
  success: boolean,
  result: string[]
};

interface Dataset {
  help: string,
  success: boolean,
  result: object
};

interface TagNamesList {
  help: string,
  success: boolean,
  result: string[]
};
```
