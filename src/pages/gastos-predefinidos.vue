<template>
  <page-wrapper>
    <template slot="conteudo">
        <div v-for="(i,index) of this.compras" :key="index">
          <div class="lista">
            <itemLista :categoria="i.categoria"
                       :titulo="i.titulo" :preco="i.preco" />
          </div>
        </div>
    </template>
  </page-wrapper>
</template>

<script>
import wrapper from '../components/wrapper';
import ListaPredefinida from '../components/ListaPredefinida';
import CompraPredefinida from '../services/compras/CompraPredefinida';

export default {
  name: 'PageGastosPredefinidos',
  components: {
    'page-wrapper' : wrapper,
    'itemLista': ListaPredefinida
  },

  data() {
    return {
      compras: {}
    }
  },

  mounted() {
    let pre = new CompraPredefinida()
    pre.getAll()
      .then(res => this.compras = res)
  },
}
</script>

<style>
  .lista {
    margin-top: 1rem;

  }
</style>
