import apiHttp from './api';

// const authHeader = {
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: `Basic ${Buffer.from('igorzs:12qwaszx').toString('base64')}`,
//   },
// };

export default {
  // Metodo criar user novo usuario 'user'
  // (POST) localhost:3000/api/users
  async postNewUser(user) {
    try {
      const response = await apiHttp().post('/users', user, {
        auth: {
          username: 'igorzs',
          password: '12qwaszx',
        },
      });
      return response.data;
    } catch (error) {
      return (error);
    }
  },
  // Metodo listar todos Users
  // (GET) localhost:3000/api/users
  async getAllUsers() {
    try {
      const response = await apiHttp().get('/users', {
        auth: {
          username: 'igorzs',
          password: '12qwaszx',
        },
      });
      return response.data;
    } catch (error) {
      return (error);
    }
  },
  // Metodo listar ID
  // (GET) localhost:3000/api/users/:id
  async getUserId(id) {
    try {
      const response = await apiHttp().get(`/users/${id}`, {
        auth: {
          username: 'igorzs',
          password: '12qwaszx',
        },
      });
      return response.data;
    } catch (error) {
      return (error);
    }
  },
  // Metodo atualizar usuario 'user'
  // (PUT) localhost:3000/api/users/:id
  async putUser(usuarioUpdate) {
    try {
      const response = await apiHttp().put(`/users/${usuarioUpdate.id}`, usuarioUpdate, {
        auth: {
          username: 'igorzs',
          password: '12qwaszx',
        },
      });
      return response.data;
    } catch (error) {
      return (error);
    }
  },
  // Metodo de exclusão de usuario 'user'
  // (DELETE) localhost:3000/api/users/:id
  async deleteUser(id) {
    try {
      const response = await apiHttp().delete(`/users/${id}`, {
        auth: {
          username: 'igorzs',
          password: '12qwaszx',
        },
      });
      return response.data;
    } catch (error) {
      return (error);
    }
  },
};
