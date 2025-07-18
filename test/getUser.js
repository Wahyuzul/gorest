const apiClient = require('../utils/apiClient');
const { expect } = require('chai');


describe('Get User API', () => {
  it('Get user details', async () => {
    const userId = 8014437;
    try {
      const response = await apiClient.get(`/users/${userId}`);

      expect(response.status).to.equal(200);
      expect(response.data).to.have.property('id');
      expect(response.data.id).to.equal(userId);

      console.log('User Details:', response.data);
    } catch (error) {
      if (error.response) {
        console.error(`❌ Error ${error.response.status}:`, error.response.data);
        expect.fail(`Get user failed with status ${error.response.status}`);
      } else {
        console.error('❌ Request failed:', error.message);
        expect.fail('Network error occurred');
      }
    }
  });
});