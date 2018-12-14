<template>
  <page-wrapper>
    <template slot="conteudo">
      <div class="gasto">

        <q-field
            icon="attach_money"
            label="Total que gostaria de gastar"
            color="purple"
          >
            <q-input color="purple" v-model="total" />
        </q-field>

        <q-field class="gasto"
            icon="calendar_today"
            label="Quantidade de dias"
            color="purple"
          >
            <q-input color="purple" v-model="qtdDias" />
        </q-field>

        <div class="input-add">
           <q-btn @click="simulateProgress(1)" :loading="loading1" color="purple" class="full-width" label="Adicionar" />
        </div>

      </div>
    </template>
  </page-wrapper>
</template>

<script>
import wrapper from '../../components/wrapper';

export default {
  components: {
    'page-wrapper' : wrapper,
  },
  name: 'PageGasto',
  data(){
    return {
      total: '',
      qtdDias: '',
      loading1: false,
    }
  },
  methods: {
     simulateProgress (number) {
      // we set loading state
      this[`loading${number}`] = true
      // simulate a delay
      setTimeout(() => {
        this.$q.notify({
          message: `Configurações adicionadas`,
          type: 'positive',
          icon: 'done',
          position: 'top-right'
        })
        this[`loading${number}`] = false
      }, 3000)
    },
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
