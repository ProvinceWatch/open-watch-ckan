const axios = require('axios');
const http = axios.create({
  baseURL: 'https://open.alberta.ca/api/3'
});


const getAllDatasets = async () => {
  try {
    const res = await http.get('/action/package_list');
    return res.data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const getAllTagNames = async () => {
  try {
    const res = await http.get('/action/tag_list');
    return res.data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

module.exports = {
  getAllDatasets,
  getAllTagNames
}