<template>
  <q-page padding>
      <div class="row justify-around">
        <div>
          <h2 class="h2-borda"> Gasto </h2>
          <p> 200,00 R$</p>
        </div>

        <div class="separator"> </div>

        <div>
          <h2 class="h2-borda" s> Meta de <br> Gastos </h2>
          <p> 600,00 R$ </p>
        </div>
      </div>
      <div class="row justify-center">
        <h2> Valor Restante </h2>
      </div>
      <div class="row justify-center">
          <div class="quantidade-total">
            <h2> 400,00 R$ </h2>
          </div>
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageDia'
}
</script>

<style>
  h2 {
    font-size: 1.1rem;

  }

  .h2-borda {
    border-bottom: 1px solid #ac00b2;
  }

  p {
    font-size: 15px;
    color: gray;
  }

  .separator {
     width: 2px;
     background: #ac00b2;
     min-height: 100px;
  }

  .quantidade-total {
    border: 2px solid #ac00b2;
    padding: 0.1rem;
    background: #ac00b2;
    color: white;

    border-radius: 1rem
  }

  .quantidade-total h2 {
    font-size: 1rem;
  }
</style>
