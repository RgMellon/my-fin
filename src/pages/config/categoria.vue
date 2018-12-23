<template>
  <page-wrapper>
    <template slot="conteudo">
      <!-- Input catgorias -->
      <div class="row">
          <div class="col-10 m-input">
              <q-field
                label="Categoria"
                color="purple"
              >
                <q-input style="margin-right:2rem;" color="purple" v-model="categoria" />
              </q-field>
          </div>
          <div class="col-2 self-end">
            <q-btn @click="addCat()" size="md" color="purple" class="full-width btn-cat" icon="done" />
          </div>
      </div>
      <!-- Lista Categorias -->
      <q-list highlight>
          <div class="item" v-for="(i,index) of this.listaCategorias" :key="index">
            <q-item>
              <q-item-side :icon="verificaCompra(i.categoria)" />
                <q-item-main :label="i.categoria" />
                <div @click="deleteCat(i.id)">
                  <q-item-side  right icon="delete" />
                </div>
            </q-item>
          </div>
          <q-item-separator />
      </q-list>
    </template>
  </page-wrapper>
</template>

<script>
import wrapper from '../../components/wrapper';
import Categoria from '../../services/configuracoes/Categoria';

export default {
  components: {
    'page-wrapper' : wrapper,
  },

  name: 'PageCategoria',
  data() {
    return {
      categoria: '',
      listaCategorias: { }
    }
  },
  mounted() {
    let c = new Categoria();
        c.getCategoria()
          .then(res => this.listaCategorias = res)
  },
  methods: {
    addCat() {
      let cat = new Categoria();
      cat.adicionarCategoria(this.categoria)
      .then(res => this.listaCategorias = res)
    },

    verificaCompra(compra) {
        if(compra == 'lazer') return 'weekend'
        else if (compra == 'comida') return 'fastfood'
        else if( compra == 'combustivel') return 'local_gas_station'
        else return 'shopping_basket'
    },

    deleteCat(item){
      let c = new Categoria();
        c.deleteCat(item)
          .then(res => this.listaCategorias = res);
    }
  },

}
</script>

<style>
  .m-input {
    margin-top: 2rem;

  }

  .btn-cat {
    height: 40px;
    width: 40px;
  }

  .q-list {
  border: none;
}
.item {
  margin-top: 2rem;
}
</style>
