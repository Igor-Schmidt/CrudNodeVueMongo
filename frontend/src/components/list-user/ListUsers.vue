<template>
    <div>
        <h3 class="text-center">List Users</h3>
        <div>
          <table class="table align-middle">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Birth</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for=" user in users" :key="user._id">
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.birth}}</td>
                <td>{{user._id}}</td>
                <td>
                  <router-link to="/" class="btn btn-primary">
                    <font-awesome-icon :icon="['fas', 'trash']" /> Edit
                  </router-link>
                </td>
                <td>
                  <button v-on:click="removeUser(user._id)" class="btn btn-danger">
                    <font-awesome-icon :icon="['fas', 'trash']" /> Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>

<script src="./ListUserScript.js"></script>
<style>

</style>
