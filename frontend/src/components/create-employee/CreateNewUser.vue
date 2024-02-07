<template>
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h3>New User</h3>
        </div>
        <div class="card-body">
          <form v-on:submit.prevent="">
            <!-- INICIO DE BLOCO: New User - Name -->
            <div class="form-group">
              <label class="font-weight-bold">User Name</label>
              <input type="text" class="form-control" placeholder="Type your Name">
            </div>
            <!-- FIM DE BLOCO: New User - Name -->

            <!-- INICIO DE BLOCO: New User - Email -->
            <div class="form-group">
              <label class="font-weight-bold">User Email</label>
              <input type="text" class="form-control" placeholder="Type your Email@">
            </div>
            <!-- FIM DE BLOCO: New User - Email -->

            <!-- INICIO DE BLOCO: New User - Birth -->
            <div class="form-group">
              <label class="font-weight-bold">User Birth</label>
              <input type="text" class="form-control" placeholder="YYYY/MM/DD">
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
  data() {
    return {

    };
  },
};
</script>
