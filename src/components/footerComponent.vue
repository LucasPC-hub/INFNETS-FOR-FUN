<template>
  <footer class="text-center text-lg-start bg-light text-muted">
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <div class="me-5 d-none d-lg-block">
        <span>Verifique as regras para a utilização da Meia-Entrada!</span>
      </div>
    </section>
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col-xl-3 col-lg-4 mx-auto col-md-3 mb-4">
            <h6 class="fw-bold mb-4 text-uppercase">
              <i class="fas fa-gem me-3"></i>Infnet's for Fun!
            </h6>
            <p>
              Somos uma solução digital completa para a compra de ingressos e gestão de eventos e conteúdos.
             </p>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              Compre seu ingresso
            </h6>
            <p>
              <a href="#" class="text-reset">Músicas</a>
            </p>
            <p>
              <a href="#" class="text-reset">Festivais</a>
            </p>
            <p>
              <a href="#" class="text-reset">Peças de Teatro</a>
            </p>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              Links Úteis
            </h6>
            <p>
              <a href="#" class="text-reset"></a>
            </p>
            <p>
              <a href="#" class="text-reset">Contato</a>
            </p>
            <p>
              <a href="#" class="text-reset">Quem Somos</a>
            </p>
          </div>

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">+ Info</h6>
            <p><i class="fas fa-home me-3"></i> Rio de Janeiro, RJ, S/N, Brasil</p>
            <p>
              <i class="fas fa-envelope me-3"></i>
              info@infnetsforfun.com
            </p>
            <p><i class="fas fa-print me-3"></i>0800 000 0800</p>
          </div>
        </div>
      </div>
    </section>
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
      © 2022 Copyright:
      <a class="text-reset fw-bold" href="#">Infnet's for Fun!</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footerComponent"
}
</script>

<style scoped>
@font-face {
  font-family: "Bebas";
  src: local("Bebas"),
  url(../fonts/BebasNeue-Regular.ttf) format("truetype");
}
footer{
  margin-top: 30px ;
}
</style>