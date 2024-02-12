import UserDataServices from '../../../services/UserDataService';

export default {
  name: 'ListUsers',
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.listAllUsers();
  },
  methods: {
    async listAllUsers() {
      const response = await UserDataServices.getAllUsers();
      this.users = response.data;
    },

    async removeUser(id) {
      // Deleta dps lista novamente
      this.$swal({
        title: 'Deletar user',
        text: 'Cuidado! Este user sera deletado!',
        icon: 'warning',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, deletar!',
        cancelButtonText: 'Cancelar',
      }).then(async (result) => {
        // console.log(result.isConfirmed);
        if (result.isConfirmed) {
          await UserDataServices.deleteUser(id);
          this.$swal({
            title: 'User deletado',
            icon: 'success',
            toast: true,
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            position: 'top-end',
          });
          await this.listAllUsers();
        } else {
          this.$swal({
            title: 'User não deletado',
            icon: 'info',
            toast: true,
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            position: 'top-end',
          });
        }
      });
    },

    mudarPaginaUpdate(paramId) {
      this.$route.push({ name: 'edituser', params: paramId });
    },
  },
};
