<template>
  <page-wrapper>
    <template slot="conteudo">
      <q-list highlight>
          <div @click="gastoMes()" class="item">
            <q-item>
              <q-item-side icon="settings" />
                <q-item-main label="Gastos por Mês" />
                <q-item-side right icon="chevron_right" />
            </q-item>
          </div>
          <q-item-separator />
          <div @click="listaGastos()" class="item">
            <q-item>
              <q-item-side icon="list" />
                <q-item-main label="Lista de gastos" />
                <q-item-side right icon="chevron_right" />
            </q-item>
          </div>
        </q-list>
    </template>
  </page-wrapper>
</template>

<script>
import wrapper from '../components/wrapper';

export default {
  components: {
    'page-wrapper' : wrapper,
  },
  name: 'PageConfig',
  methods :{
     gastoMes() {
        this.$router.push('config/gasto-mes')
     },
     listaGastos() {
        this.$router.push('config/lista-gasto')
     }
  }
}
</script>

<style>
.q-list {
  border: none;
}
.item {
  margin-top: 2rem;
}
</style>
