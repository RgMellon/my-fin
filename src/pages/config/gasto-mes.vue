<template>
  <page-wrapper>
    <template slot="conteudo">
      <div class="gasto">

        <q-field
            icon="attach_money"
            label="Total que gostaria de gastar"
            color="purple"
          >
            <q-input color="purple" v-model="maximo" />
        </q-field>

        <q-field class="gasto"
            icon="calendar_today"
            label="Quantidade de dias"
            color="purple"
          >
            <q-input color="purple" v-model="dias" />
        </q-field>

        <div class="input-add">
           <q-btn @click="adicionaMaximo()" :loading="load" color="purple"
            class="full-width" label="Adicionar" />
        </div>

      </div>
    </template>
  </page-wrapper>
</template>

<script>
import wrapper from '../../components/wrapper';
import MaximoGasto from '../../services/configuracoes/MaximoGasto';

export default {
  components: {
    'page-wrapper' : wrapper,
  },
  name: 'PageGasto',
  data(){
    return {
      maximo: '',
      dias: '',
      load: false,
    }
  },
  methods: {
    adicionaMaximo() {
      this.load = true;
      let mx = new MaximoGasto();
      mx.defineMaximoValorMaximo(this.maximo, this.dias)
      .then(res =>
        this.$q.notify({
          message: `Configurações adicionadas`,
          type: 'positive',
          icon: 'done',
          position: 'top-right'
        })
      ).then(l => this.load = false)
      .catch(err => {
        this.$q.notify({
          message: 'Já existe um controle em aberto :\\'
        })
        this.load = false
      })

    }
  }
}
</script>

<style>
.gasto {
  margin-top: 4rem;
}
.input-add {
  margin-top: 3rem;
}
</style>
