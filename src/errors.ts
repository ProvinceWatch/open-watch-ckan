import { AxiosResponse } from 'axios';
import { CKAN_ErrorObj } from './types';

export const handleAxiosError = (error: any): CKAN_ErrorObj | null => {
  if (error.response) {
    return {
      help: 'Server responded with status code',
      success: false,
      error: {
        __type: 'ServerError',
        message: `Server responded with status code ${error.response.status}`,
      },
    };
  } else if (error.request) {
    return {
      help: 'No response was received from the server',
      success: false,
      error: {
        __type: 'NoResponseError',
        message: 'No response was received from the server',
      },
    };
  } else {
    return {
      help: 'Error in request setup',
      success: false,
      error: {
        __type: 'RequestSetupError',
        message: `Error in request setup: ${error.message}`,
      },
    };
  }
};

export const handleResponseError = (res: AxiosResponse): CKAN_ErrorObj | null => {
  if (res && res.status !== 200) {
    return {
      help: 'Request failed with status code',
      success: false,
      error: {
        __type: 'AxiosError',
        message: `Request failed with status code ${res.status}`,
      },
    };
  }
  return null;
};

export const handleDataError = (data: CKAN_ErrorObj): CKAN_ErrorObj | null => {
  if (data && data.success === false) {
    return {
      help: `API responded with success = false - ${data.error.__type}`,
      success: data.success,
      error: {
        __type: data.error.__type || '',
        message: data.error.mesage || data.error.message,
      },
    };
  }

  return null;
}