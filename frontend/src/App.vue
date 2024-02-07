<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-dark-subtle">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">CRUD Vue JS + Node + MongoDB</a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Create New User</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/list-employee">List Users</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container mt-5">
      <router-view/>
    </div>
  </div>
</template>
