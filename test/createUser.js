const { expect } = require('chai');
const apiClient = require('../utils/apiClient');

describe('Create User API', () => {
  it('create a new user', async () => {
    const response = await apiClient.post('/users', {
      name: "sample user 3",
      gender: "male",
      email: `sample3${Date.now()}@example.com`,
      status: "active"
    });
    expect(response.status).to.equal(201);
    expect(response.data).to.have.property('id');
    console.log('User created successfully:', response.data);
  });
});


