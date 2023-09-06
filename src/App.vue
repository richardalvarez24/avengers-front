<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/" class="nav-link text-white" href="#">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create" class="nav-link text-white" href="#">Registro</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <div class="container-fluid mt-3">
    <div id="logo" style="text-align:center;">
        <img src="./assets/logo.png" style="width:100px;"/>
    </div>
    <router-view/>
  </div>
</template>