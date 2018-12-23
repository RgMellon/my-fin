<template>
  <page-wrapper>
    <template slot="conteudo">
      <section class="form-add-despesa">

        <div class="input-add">
          <q-field
            icon="title"
            label="Titulo"
            color="purple"
          >
            <q-input color="purple" v-model="compra.titulo" />
          </q-field>
        </div>

        <div class="input-add">
          <q-field
            icon="attach_money"
            label="Preço"
            color="purple"
            type="tel"
          >
            <q-input color="purple" v-model="compra.preco" />
          </q-field>
        </div>

        <div class="input-add">
          <q-field
            icon="access_time"
            label="Data da compra"
          >

          <q-datetime
            type="date"
            v-model="compra.data_compra"
            color="purple"
            float-label="Escolher data"

          />
          </q-field>
        </div>

        <div class="input-add">
          <q-field
            icon="apps"
            label="Categoria da compra"
          >
            <q-select
            v-model="compra.categoria"
            float-label="Escolher por categoria"
            radio
          :options="selectOptions"
        />
          </q-field>
        </div>


        <div class="input-add">
           <q-btn @click="adicionaGasto()" :loading="load" color="purple" class="full-width" label="Adicionar" />
        </div>
      </section>
    </template>
  </page-wrapper>
</template>

<script>

import { Notify } from 'quasar';
import wrapper from '../components/wrapper';
import Compra from '../services/compras/Compra';
import Categoria from '../services/configuracoes/Categoria';

export default {
  components: {
    'page-wrapper' : wrapper
  },
  name: 'PageAdicionaDespesa',
  data() {
    return {
      compra : {
        titulo:'',
        data_compra: '',
        categoria: '',
        local: 'v',
        preco: ''
      },
      load: false,
      selectOptions: [],
    }
  },

  methods: {
    adicionaGasto() {
      let c = new Compra();
      c.abater(this.compra);
    }
  },

  mounted() {
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
        })
    },
  }

}
</script>

<style>
  .q-field-icon {
    color:#9c27b0;
  }
  .form-add-despesa {
    margin-top: 2rem;
  }

  .input-add {
    margin-top: 3rem;
  }
</style>
