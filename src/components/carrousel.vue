<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/hamilton.jpg" class="d-block w-100 redimencionar" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h1 class="caption-title">First slide label</h1>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/Angra.jpg" class="d-block w-100 redimencionar" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h1>Second slide label</h1>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../assets/hamilton.jpg" class="d-block w-100 redimencionar" alt="...">
        <div class="carousel-caption d-none d-md-block text-start flex-center">
          <h1>Hamilton</h1>
          <p class="shadow">Um fenomeno do teatro musical</p>
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
  display: table;
  background-color: rgba(0, 0, 0, 0.60)
}

</style>