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
      await UserDataServices.deleteUser(id);
    //   this.$swal({
    //     title: 'Deletar user?',
    //     text: 'Cuidado! Este user sera deletado!',
    //     icon: 'Perigo',
    //     showConfirmButton: true,
    //     allowOutsideClick: false,
    //     allowEnterKey: true,
    //     allowEscapeKey: false,
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Sim! deletar!!',
    //   }).then(async (result) => {
    //     if (result.value) {
    //       await UserDataServices.deleteUser(id);
    //       this.$swal('Deleted', 'User deletado!', 'success');
    //       this.listAllUsers();
    //     } else {
    //       this.$swal('Cancelled', 'Cancel deletion', 'info');
    //     }
    //   });
    },
  },
};
