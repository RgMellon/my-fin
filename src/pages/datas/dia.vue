<template>
  <q-page padding>
        <div class="row justify-around">
          <gasto-dia />
        <div class="separator"> </div>

        <div>
          <meta-gastos-dia />
        </div>
      </div>

      <div class="row justify-center">
        <h2> Valor Restante </h2>
      </div>
      <div class="row justify-center">
          <restante-dia />
      </div>
  </q-page>
</template>

<script>

import GastoDia from '../../components/GastoDia';
import MetaDeGastosDia from '../../components/MetaDeGastosDia';
import RestanteDia from '../../components/RestanteDia';

export default {
  components: {
    'gasto-dia': GastoDia,
    'meta-gastos-dia': MetaDeGastosDia,
    'restante-dia' : RestanteDia
  },
  name: 'PageDia'
}
</script>

<style>
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
