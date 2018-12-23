<template>
  <page-wrapper>
    <template slot="conteudo">

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
