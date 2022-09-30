<template>
  <div class="quemSomos">
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 font-weight-normal">Infnet's for fun!</h1>
        <p class="lead font-weight-normal">O nosso propósito é divulgar a cultura e conectar as pessoas à momentos únicos.</p>
        <a class="btn btn-outline-secondary" href="#">Em breve mais informações.</a>
      </div>
      <div class="product-device box-shadow d-none d-md-block"></div>
      <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
    </div>
    <contact-form />
  </div>
</template>

<script>
import ContactForm from "@/components/contactForm";
export default {
  name: "QuemSomosView",
  components: {ContactForm}
}
</script>
