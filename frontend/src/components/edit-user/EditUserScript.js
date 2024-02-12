import UserDataServices from '../../../services/UserDataService';

export default {
  name: 'EditUserComponent',
  data() {
    return {
      usuarioEdit: {
        id: null,
        name: null,
        email: null,
        birth: null,
      },
    };
  },

  mounted() {
    this.getUserById();
  },

  methods: {
    async getUserById() {
      const idUser = this.$route.params.id;
      const response = await UserDataServices.getUserId(idUser);
      this.usuarioEdit.id = (this.$route.params.id);
      this.usuarioEdit.name = (response.data[0].name);
      this.usuarioEdit.email = (response.data[0].email);
      this.usuarioEdit.birth = (response.data[0].birth);
    },

    async updateUser() {
      // Chamada do service passando as propriedades por meio do 'usuarioEdit' (funciona)
      try {
        await UserDataServices.putUser(this.usuarioEdit);
        this.$swal({
          title: 'User editado com Sucesso!',
          icon: 'success',
          position: 'top-end',
          toast: true,
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
      } catch (error) {
        // console.log(error);
      }
    },
  },
};
