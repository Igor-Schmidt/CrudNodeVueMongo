<template>
    <div class="container" id="container-animation">
      <div class="card" id="card-geral-form">
        <div class="card-header">
          <h3>New User</h3>
        </div>
        <div class="card-body">
          <!-- <form v-on:submit.prevent="handleSubmitForm"> -->
          <form>
            <!-- INICIO DE BLOCO: New User - Name -->
            <div class="form-group">
              <label for="userFormName" class="font-weight-bold">User Name
                <input type="text"
                  id="userFormName"
                  class="form-control"
                  placeholder="Type user name"
                  v-model="usuario.name"
                  required
                >
              </label>
            </div>
            <!-- FIM DE BLOCO: New User - Name -->

            <!-- INICIO DE BLOCO: New User - Email -->
            <div class="form-group">
              <label for="userFormEmail" class="font-weight-bold">User Email
                <input type="text"
                  id="userFormEmail"
                  class="form-control"
                  placeholder="Type user email"
                  v-model="usuario.email"
                  required
                >
              </label>
            </div>
            <!-- FIM DE BLOCO: New User - Email -->

            <!-- INICIO DE BLOCO: New User - Birth -->
            <div class="form-group">
              <label for="userFormBirth" class="font-weight-bold">User Birth
                <input type="date"
                  id="userFormBirth"
                  class="form-control"
                  v-model="usuario.birth"
                  required
                >
              </label>
            </div>
            <!-- FIM DE BLOCO: New User - Birth -->

            <div class="form-group">
              <button v-on:click="envioNewUser(); this.$router.push({ name: 'list' })"
                class="btn btn-primary" id=""
                type="submit"
                >+ Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script src="./NewUserScript.js"></script>
<style src="../StyleMain.css"></style>
<style src="./NewUserStyle.css"></style>
