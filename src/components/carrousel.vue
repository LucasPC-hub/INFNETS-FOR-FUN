<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/bandmaid.jpg" class="d-block w-75 redimencionar" alt="...">
        <div class="carousel-caption d-none d-md-block text-start">
          <h1 class="caption-title">Band Maid</h1>
          <p>Banda de hard rock feminino do Japão</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/rock-in-rio-2022.jpg" class="d-block w-75 redimencionar" alt="...">
        <div class="carousel-caption d-none d-md-block text-start">
          <h1>Rock in Rio 2022</h1>
          <p>O maior festival de rock do mundo</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/hamilton.jpg" class="d-block w-75 redimencionar" alt="...">
        <div class="carousel-caption d-none d-md-block text-start flex-center">
          <h1>Hamilton</h1>
          <p>Um fenomeno do teatro musical</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "destaquesCarrossel"
}
</script>

<style scoped>
.redimencionar{
  height: 500px;
  margin: auto;
}

.carousel-caption {
  width: 500px;
  font-size: 25px;
  bottom: 100px;
  z-index: 10;
  font-weight: 1000;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

</style>