import apiHttp from './api';

export default {
  // Metodo criar user novo usuario 'user'
  // (POST) localhost:3000/api/users
  async postNewUser(user) {
    try {
      const response = await apiHttp().post('/users', user);
      return response.data;
    } catch (error) {
      return (error);
    }
  },
  // Metodo listar todos Users
  // (GET) localhost:3000/api/users
  async getAllUsers() {
    try {
      const response = await apiHttp().get('/users');
      return response.data;
    } catch (error) {
      return (error);
    }
  },
  // Metodo listar ID
  // (GET) localhost:3000/api/users/:id
  async getUserId(id) {
    try {
      const response = await apiHttp().get(`/users/${id}`);
      return response.data;
    } catch (error) {
      return (error);
    }
  },
  // Metodo atualizar usuario 'user'
  // (PUT) localhost:3000/api/users/:id
  async putUser(id) {
    try {
      const response = await apiHttp().put(`/users/${id}`);
      return response.data;
    } catch (error) {
      return (error);
    }
  },
  // Metodo de exclusão de usuario 'user'
  // (DELETE) localhost:3000/api/users/:id
  async deleteUser(id) {
    try {
      const response = await apiHttp().delete(`/users/${id}`);
      return response.data;
    } catch (error) {
      return (error);
    }
  },
};
