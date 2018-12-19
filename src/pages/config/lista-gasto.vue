<template>
  <page-wrapper>
    <template slot="conteudo">
        <q-list highlight>
          <div v-for="(i, index) of this.compras" :key="index" class="item">
            <q-item>
              <q-item-side  />
                <q-item-side left> R$ {{ i.preco }} / </q-item-side>
                <q-item-main right :label="i.titulo" />

                <div @click="deleteCompra(i.id)">
                  <q-item-side right color="red" icon="delete_outline" />
                </div>
            </q-item>
            <hr>
          </div>
        </q-list>
    </template>
  </page-wrapper>
</template>

<script>
import wrapper from '../../components/wrapper';
import Compra from '../../services/compras/Compra';

export default {
  name: 'PageName',
  components: {
    'page-wrapper' : wrapper
  },
  data() {
    return {
      compras:{}
    }
  },
  mounted() {
    let c = new Compra;
    c.comprasAberto()
      .then(res => this.compras = res.data)
  },
  methods: {
    deleteCompra(id) {
      let co = new Compra;
      co.deleteCompra(id)
        .then(res => this.compras = res.data)
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
