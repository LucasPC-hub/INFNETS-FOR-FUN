<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link  to="/" class="navbar-brand">
        <img src="../assets/logo_index1.jpg" width="30" height="30" alt="Logo">Infnet's for fun
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse menu" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link  to="/musicas" class="nav-link active" aria-current="page">Musicas</router-link>
        </li>
        <li class="nav-item">
          <router-link  to="/festivais" class="nav-link active" aria-current="page" href="#">Festivais</router-link>
        </li>
        <li class="nav-item">
          <router-link  to="/teatros" class="nav-link active" aria-current="page" href="#">Teatros</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Mais
          </a>
          <ul class="dropdown-menu">
            <li><router-link  to="/localizacoes" class="dropdown-item" href="#">Localizações</router-link></li>
            <li><router-link  to="/quemsomos" class="dropdown-item" href="#">Quem Somos</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navBar"
}
</script>

<style scoped>
@font-face {
  font-family: "Bebas";
  src: local("Bebas"),
  url(../fonts/BebasNeue-Regular.ttf) format("truetype");
}
  .navbar-brand{
    margin-left: 100px;
    font-family: "Bebas",serif;
    font-size: 30px;
  }
  .menu{
    margin-right: 100px;
  }
  .nav-item{
    font-size: 20px;
  }
</style>