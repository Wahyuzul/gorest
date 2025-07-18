const apiClient = require('../utils/apiClient');
const { expect } = require('chai');

describe('Delete User API', () => {
  it('delete a user', async () => {
    const userId = 8014439;
    try {
      const response = await apiClient.delete(`/users/${userId}`);
      expect(response.status).to.equal(204);
      console.log(`User dengan ID ${userId} berhasil dihapus.`);
    } catch (error) {
      if (error.response) {
        console.error(`❌ Gagal menghapus user. Status ${error.response.status}:`, error.response.data);
        expect.fail(`Delete user failed with status ${error.response.status}`);
      } else {
        console.error('❌ Kesalahan jaringan:', error.message);
        expect.fail('Network error occurred');
      }
    }
  });
});