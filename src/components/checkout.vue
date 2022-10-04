<template>
  <div class="container">
      <div class="row g-5">
        <div class="col-md-5 col-lg-4 order-md-last">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-primary">Carrinho</span>
            <span class="badge bg-primary rounded-pill">3</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 class="my-0">Ingresso</h6>
                <small class="text-muted">Show</small>
              </div>
              <span class="text-muted">R$50</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total</span>
              <strong>R$50,00</strong>
            </li>
          </ul>

          <form class="card p-2">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Cupom">
              <button type="submit" class="btn btn-secondary">Aplicar</button>
            </div>
          </form>
        </div>

        <div class="col-md-7 col-lg-8">
          <h4 class="mb-3">Informações de Pagamento</h4>
          <form class="needs-validation" novalidate>
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="firstName" class="form-label">Nome</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div class="col-sm-6">
                <label for="lastName" class="form-label">Sobrenome</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>

              <div class="col-12">
                <label for="username" class="form-label">Usuário</label>
                <div class="input-group has-validation">
                  <span class="input-group-text">@</span>
                  <input type="text" class="form-control" id="username" placeholder="usuário" required>
                  <div class="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>

              <div class="col-12">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="voce@examplo.com">
                <div class="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div class="col-12">
                <label for="address" class="form-label">Endereço</label>
                <input type="text" class="form-control" id="address" placeholder="Rua 12" required>
                <div class="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div class="col-md-5">
                <label for="country" class="form-label">País</label>
                <select class="form-select" id="country" required>
                  <option value=""></option>
                  <option>Brasil</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div class="col-md-4">
                <label for="state" class="form-label">Estado</label>
                <select class="form-select" id="state" required>
                  <option value=""></option>
                  <option>Goiás</option>
                  <option>Rio de Janeiro</option>
                  <option>Acre</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>

              <div class="col-md-3">
                <label for="zip" class="form-label">CEP</label>
                <input type="text" class="form-control" id="zip" placeholder="" required>
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>


            <hr class="my-4">

            <h4 class="mb-3">Payment</h4>

            <div class="my-3">
              <div class="form-check">
                <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required>
                <label class="form-check-label" for="credit">Credito</label>
              </div>
              <div class="form-check">
                <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required>
                <label class="form-check-label" for="debit">Debito</label>
              </div>
              <div class="form-check">
                <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required>
                <label class="form-check-label" for="paypal">PicPay</label>
              </div>
            </div>

            <div class="row gy-3">
              <div class="col-md-6">
                <label for="cc-name" class="form-label">Nome no cartão</label>
                <input type="text" class="form-control" id="cc-name" placeholder="" required>
                <small class="text-muted">Nome como está no cartão</small>
                <div class="invalid-feedback">
                  Name on card is required
                </div>
              </div>

              <div class="col-md-6">
                <label for="cc-number" class="form-label">Número do Cartão</label>
                <input type="text" class="form-control" id="cc-number" placeholder="" required>
                <div class="invalid-feedback">
                  Credit card number is required
                </div>
              </div>

              <div class="col-md-3">
                <label for="cc-expiration" class="form-label">Validade</label>
                <input type="text" class="form-control" id="cc-expiration" placeholder="MM/AA" required>
                <div class="invalid-feedback">
                  Expiration date required
                </div>
              </div>

              <div class="col-md-3">
                <label for="cc-cvv" class="form-label">CVV</label>
                <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
                <div class="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>

            <hr class="my-4">

            <button class="w-100 btn btn-primary btn-lg" type="submit">Finalizar Compra</button>
          </form>
        </div>
      </div>
  </div>
</template>


<script>
export default {
  name: "checkoutPage"
}
</script>

<style scoped>
.container{
  color: white;
}
</style>
