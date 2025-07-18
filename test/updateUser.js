const apiClient = require('../utils/apiClient');
const { expect } = require('chai');

describe('Update User API', () => {
  it('update an existing user', async () => {
    const userId = 8014437;
    const updatePayload = {
      name: "updated user sample 3",
      status: "inactive"
    };

    try {
      const response = await apiClient.put(`/users/${userId}`, updatePayload);
      expect(response.status).to.equal(200);
      expect(response.data).to.have.property('id');
      expect(response.data.name).to.equal(updatePayload.name);
      expect(response.data.status).to.equal(updatePayload.status);

      console.log(`User ID ${userId} berhasil diperbarui:`, response.data);
    } catch (error) {
      if (error.response) {
        console.error(`❌ Gagal update. Status ${error.response.status}:`, error.response.data);
        expect.fail(`Update failed with status ${error.response.status}`);
      } else {
        console.error('❌ Kesalahan jaringan:', error.message);
        expect.fail('Network error occurred');
      }
    }
  });
});