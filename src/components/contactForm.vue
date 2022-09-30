<template>
  <div class="contact-form-wrapper d-flex justify-content-center">
    <form action="#" class="contact-form">
      <h5 class="titulo">Entre em contato conosco</h5>
      <p class="descricao">Quer ser nosso parceiro? Tem alguma dúvida?
      </p>
      <div>
        <input type="text" class="form-control rounded border-white mb-3 form-input" id="name" placeholder="Nome" required>
      </div>
      <div>
        <input type="email" class="form-control rounded border-white mb-3 form-input" placeholder="Email" required>
      </div>
      <div>
        <textarea id="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Mensagem" required></textarea>
      </div>
      <div class="submit-button-wrapper">
        <input type="submit" value="Enviar">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "contactForm"
}
</script>

<style scoped>
.contact-form-wrapper {
  padding: 100px 0;
}

.contact-form {
  padding: 30px 40px;
  background-color: #ffffff;
  border-radius: 12px;
  max-width: 400px;
}

.contact-form textarea {
  resize: none;
}

.contact-form .form-input,
.form-text-area {
  background-color: #f0f4f5;
  height: 50px;
  padding-left: 16px;
}

.contact-form .form-text-area {
  background-color: #f0f4f5;
  height: auto;
  padding-left: 16px;
}

.contact-form .form-control::placeholder {
  color: #aeb4b9;
  font-weight: 500;
  opacity: 1;
}

.contact-form .form-control:-ms-input-placeholder {
  color: #aeb4b9;
  font-weight: 500;
}

.contact-form .form-control::-ms-input-placeholder {
  color: #aeb4b9;
  font-weight: 500;
}

.contact-form .form-control:focus {
  border-color: #FF0000;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.07), 0 0 8px #f33f3f;
}

.contact-form .titulo {
  text-align: center;
  font-size: 24px;
  font-weight: 500;
}

.contact-form .descricao {
  color: #aeb4b9;
  font-size: 14px;
  text-align: center;
}

.contact-form .submit-button-wrapper {
  text-align: center;
}

.contact-form .submit-button-wrapper input {
  border: none;
  border-radius: 4px;
  background-color: #f33f3f;
  color: white;
  text-transform: uppercase;
  padding: 10px 60px;
  font-weight: 500;
  letter-spacing: 2px;
}

.contact-form .submit-button-wrapper input:hover {
  background-color: #d30069;
}
</style>