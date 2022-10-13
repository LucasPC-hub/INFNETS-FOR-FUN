<template>

  <div class="flip-card-container" style="--hue: 220">
    <div class="flip-card">

      <div class="card-front">
        <figure>
          <img :src="require(`../assets/${imagem}`)"  alt=""/>
        </figure>
      </div>

      <div class="card-back">
        <figure>
          <div class="img-bg"></div>
          <img :src="require(`../assets/${imagem}`)" alt="" />
        </figure>
        <span class="description">{{descricao}}</span>
        <router-link class="position-absolute bottom-0" :to="(`/comprar/${id}`)"><button >Comprar Ingresso</button></router-link>
      </div>

    </div>
  </div>
  <!-- /flip-card-container -->
</template>

<script>
export default {
  name: "flipCards",
  props :{
    id:{
      type: Number
    },
    descricao:{
      type: String
    },
    imagem:{
      type: String
    }
  }
}
</script>

<style scoped>

/* .flip-card-container */
.flip-card-container {
  --hue: 150;
  --primary: hsl(var(--hue), 50%, 50%);
  --white-1: hsl(0, 0%, 90%);
  --white-2: hsl(0, 0%, 80%);
  --dark: hsl(var(--hue), 25%, 10%);
  --grey: hsl(0, 0%, 50%);
  width: 310px;
  height: 500px;
  margin: 40px;

  perspective: 1000px;
}

/* .flip-card */
.flip-card {
  width: inherit;
  height: inherit;

  position: relative;
  transform-style: preserve-3d;
  transition: 0.3s;
}

/* hover and focus-within states */
.flip-card-container:hover .flip-card,
.flip-card-container:focus-within .flip-card {
  transform: rotateY(180deg);
}

/* .card-... */
.card-front,
.card-back {
  width: 310px;
  height: 500px;
  border-radius: 24px;

  background: var(--dark);
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;

  backface-visibility: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
}

/* .card-front */
.card-front {
  transform: rotateY(0deg);
  z-index: 2;
}

/* .card-back */
.card-back {
  transform: rotateY(180deg);
  z-index: 1;
}
.card-back img{
  transform: scaleX(-1);
  opacity: 0.40;
}

/* figure */
figure {
  z-index: -1;
}

/* figure, .img-bg */
figure,
.img-bg {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
}

/* img */
img {
  width: 310px;
  height: 500px;
  border-radius: 24px;
}

/* figcaption */
figcaption {
  display: block;

  width: auto;
  margin-top: 12%;
  padding: 8px 22px;

  font-size: 24px;
  font-weight: bold;
  line-height: 1.6;
  letter-spacing: 2px;
  word-spacing: 6px;
  text-align: right;

  position: absolute;
  top: 0;
  right: 12px;

  color: var(--white-1);
  background: hsla(var(--hue), 25%, 10%, .5);
}

/* .img-bg */
.img-bg {
  background: hsla(var(--hue), 25%, 10%, .5);
}

.card-front .img-bg {
  clip-path: polygon(0 20%, 100% 40%, 100% 100%, 0 100%);
}

.card-front .img-bg::before {
  content: "";

  position: absolute;
  top: 34%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(18deg);

  width: 100%;
  height: 6px;
  border: 1px solid var(--primary);
  border-left-color: transparent;
  border-right-color: transparent;

  transition: .1s;
}

.card-back .img-bg {
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 60%);
}

/* hover state */
.flip-card-container:hover .card-front .img-bg::before {
  width: 6px;
  border-left-color: var(--primary);
  border-right-color: var(--primary);
}


/* button */
button {
  font-family: inherit;
  font-weight: bold;
  color: var(--white-1);
  margin-bottom: 10px;
  letter-spacing: 2px;
  padding: 9px 20px;
  border: 1px solid var(--grey);
  border-radius: 1000px;
  background: black;
  transition: .3s;
  cursor: pointer;
}

button:hover,
button:focus {
  color: var(--primary);
  background: hsla(var(--hue), 25%, 10%, .2);
  border-color: currentColor;
}

button:active {
  transform: translate(2px);
}

/* .design-container */

button:hover
button:active
button:focus {
  --tr: 20;
  --op: .7;
}
.description{
  width: 250px;
  word-wrap: break-word;
  font-size: 18px;
  font-weight: bold;
  color: aliceblue;
  text-align: center;
}
</style>