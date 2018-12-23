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
          <q-item-separator />
          <div @click="fechaConta()" class="item">
            <q-item>
              <q-item-side icon="done" />
                <q-item-main label="Fechar Conta" />
                <q-item-side right icon="chevron_right" />
            </q-item>
          </div>
          <q-item-separator />
          <div @click="categoria()" class="item">
            <q-item>
              <q-item-side icon="apps" />
                <q-item-main label="Adicionar | Ver Categorias " />
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
     },
     fechaConta() {
        this.$router.push('config/fecha-conta')
     },
     categoria() {
        this.$router.push('config/categoria')
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
