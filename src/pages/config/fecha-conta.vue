<template>
  <page-wrapper>
    <template slot="conteudo">
        <div class="select">
          <q-select
              v-model="select"
              float-label="Filtrar por categoria ;) "
              radio
            :options="selectOptions"
          />
        </div>
        <q-list highlight>
          <div v-for="(i, index) of this.filtraFatura(this.select)" :key="index">
            <div class="item">
              <q-item>

                <q-item-side :icon="verificaCompra(i.categoria)" />

                <q-item-main :label="i.titulo" />

                <q-item-side>
                  <span> $ {{i.preco}} </span>
                </q-item-side>

              </q-item>
            </div>
            <q-item-separator />
          </div>

          <q-item-separator />
              <q-item style="background:#dad6d6;margin-top:1rem;">
                  <q-item-side >
                    <span> Valor Total </span>
                  </q-item-side>
                  <q-item-main />
                  <q-item-side right >
                    <span> <q-icon name="attach_money" /> {{ calculaTotal}} </span>
                  </q-item-side>
          </q-item>

        </q-list>

      <div class="btn-fechar">
        <q-btn @click="fecharFatura()" icon="assignment_turned_in" class="full-width" color="purple" label="Fechar Fatura" />
      </div>
    </template>
  </page-wrapper>
</template>

<script>
import wrapper from '../../components/wrapper';
import Gastos from '../../services/gastos/Gastos.js';
import Categoria from '../../services/configuracoes/Categoria.js';

export default {
  components: {
    'page-wrapper' : wrapper,
  },

  name: 'PageFechaConta',
  data() {
    return {
      emAberto: {},
      selectOptions: [

      ],
      select:''
    }
  },

  methods: {
    verificaCompra(compra) {
        if(compra == 'lazer') return 'weekend'
        else if (compra == 'comida') return 'fastfood'
        else if( compra == 'combustivel') return 'local_gas_station'
        else return 'shopping_basket'
    },

    filtraFatura(teste) {
      if(teste) {
        let exp = new RegExp(teste, 'i')
        return this.emAberto.filter(res => exp.test(res.categoria))
      }else {
        return this.emAberto;
      }
    },

    fecharFatura() {
      let g = new Gastos();
      g.fecharFatura()
      .then(res => this.$router.push('/'))
    }
  },

  mounted() {
    this.gastosAbertos
    this.setaCategorias
  },

  computed: {
    setaCategorias() {
      let c = new Categoria()
        c.getCategoria()
        .then(res => {
            res.forEach(el => {
                this.selectOptions.push(
                  {
                    label: el.categoria,
                    value: el.categoria
                  }
                )
            });
            this.selectOptions.push({
               label: 'Todos',
               value: false
            })
        })
    },

    gastosAbertos() {
       let g = new Gastos();
          g.getGastosAbertos()
          .then(res => this.emAberto = res)
    },

    calculaTotal() {
      let total = 0;
      for(let i in this.emAberto){
        total+= parseFloat(this.emAberto[i].preco)
      }
      return total
    }
  },

}

</script>

<style>
.q-list {
  border: none;
}
.item {
  margin-top: 2rem;
}
.select {
  margin-top: 1rem;
}
.btn-fechar {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
