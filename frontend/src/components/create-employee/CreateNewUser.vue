<template>
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h3>New User</h3>
        </div>
        <div class="card-body">
          <form v-on:submit.prevent="handleSubmitForm">
            <!-- INICIO DE BLOCO: New User - Name -->
            <div class="form-group">
              <label for="userFormName" class="font-weight-bold">User Name <input type="text"
              id="userFormName"></label>
              <!-- <input type="text"
                id="userFormName"
                class="form-control"
                placeholder="Type your Name"
                v-model="components.name"
                required
              > -->
            </div>
            <!-- FIM DE BLOCO: New User - Name -->

            <!-- INICIO DE BLOCO: New User - Email -->
            <div class="form-group">
              <!-- <label htmlFor="userFormEmail" class="font-weight-bold">User Email</label> -->
              <!-- <input type="text"
                id="userFormEmail"
                class="form-control"
                placeholder="Type your Email@"
                v-model="components.email"
                required
              > -->
            </div>
            <!-- FIM DE BLOCO: New User - Email -->

            <!-- INICIO DE BLOCO: New User - Birth -->
            <div class="form-group">
              <!-- <label htmlFor="userFormBirth" class="font-weight-bold">User Birth</label> -->
              <!-- <input type="text"
                id="userFormBirth"
                class="form-control"
                placeholder="YYYY/MM/DD"
                v-model="components.birth"
                required
              > -->
            </div>
            <!-- FIM DE BLOCO: New User - Birth -->

            <div class="form-group">
              <button class="btn btn-primary" type="submit">+ Register</button>
            </div>

          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  components: {
    name: 'CreateNewUser',
  },
  data() {
    return {
      usuario: {
        name: '',
        email: '',
        birth: '',
      },
    };
  },
  methods: {
    handleSubmitForm() {},
  },
};
</script>
