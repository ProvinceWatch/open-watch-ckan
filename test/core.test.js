const { expect } = require('chai');
const { getAllDatasets, getAllTagNames } = require('..');

describe('Core Functions HTTP Response', () => {
  it('getAllDatasets() should work', async () => {
    const datasetRes = await getAllDatasets();
    expect(datasetRes).to.have.property('help');
    expect(datasetRes).to.have.property('success');
    expect(datasetRes).to.have.property('result');
    expect(datasetRes.success).equal(true);
    expect(datasetRes.result).to.be.an('array');
  });

  it('getAllTagNames() should work', async () => {
    const tagNameRes = await getAllTagNames();
    expect(tagNameRes).to.have.property('help');
    expect(tagNameRes).to.have.property('success');
    expect(tagNameRes).to.have.property('result');
    expect(tagNameRes.success).equal(true);
    expect(tagNameRes.result).to.be.an('array');
  });
});