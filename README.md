# open-watch-ckan

[![Node.js CI](https://github.com/ProvinceWatch/open-watch/actions/workflows/node.js.yml/badge.svg)](https://github.com/ProvinceWatch/open-watch-ckan/actions/workflows/node.js.yml)

## Using The Library
```js
const CKAN = require('@province-watch/open-watch-ckan');
```
## CKAN Endpoints - Predefined Objects and Custom Creation
- `CKAN_Endpoints` are axios instances configured to point to a specific base URL of a CKAN API.
- `CKAN_Endpoints` are passed into data-fetching functions to make requests.

### Predefined Endpoints
```js
const {
  AB_CKAN,
  BC_CKAN,
  OT_CKAN,
  CAN_CKAN,
} = CKAN.endpoints;
```
### Custom Endpoints
- If your target API is not included in the default `CKAN.endpoints` object, you can create your own `CKAN_Endpoint` object.
```js
const customCKAN = CKAN.createEndpoint('https://data.example.ckan.api/3');
```

## Making Requests
- Making requests is the same with both predefined and custom `CKAN_Endpoints`:
```js
// All Datasets
const albertaDatasets   = await CKAN.getAllDatasets(AB_CKAN);
const customDatasets    = await CKAN.getAllDatasets(customCKAN);

// Recently Changed Datasets
const albertaRecentData = await CKAN.getAllDatasets(AB_CKAN);
const customRecentData  = await CKAN.getAllDatasets(customCKAN);

// Tag Names
const albertaTagNames   = await CKAN.getAllTagNames(AB_CKAN);
const customTagNames    = await CKAN.getAllTagNames(customCKAN);
```
