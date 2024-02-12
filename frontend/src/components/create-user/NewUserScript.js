import UserDataServices from '../../../services/UserDataService';

export default {
  components: {
    name: 'CreateNewUser',
  },
  data() {
    return {
      usuario: {
        name: null,
        email: null,
        birth: null,
      },
    };
  },
  methods: {
    async envioNewUser() {
      try {
        await UserDataServices.postNewUser(this.usuario);

        this.$swal({
          title: 'User cadastrado com Sucesso!',
          icon: 'success',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });

        // this.$router.push({ name: 'list' });
      } catch (error) {
        // console.log(error);
      }
    },
  },
};
