<template>
 <page-wrapper>
    <template slot="conteudo">
      <section class="form-add-predefinido">
        <div class="input-pre">
          <q-field
            icon="title"
            label="Titulo"
            color="purple"
          >
            <q-input color="purple" v-model="pre.titulo" />
          </q-field>
        </div>

        <div class="input-pre">
          <q-field
            icon="attach_money"
            label="Preço"
            color="purple"
            type="tel"
          >
            <q-input color="purple" v-model="pre.preco" />
          </q-field>
        </div>

        <div class="input-pre">
          <q-field
            icon="apps"
            label="Categoria da compra"
          >
            <q-select
            v-model="pre.categoria"
            float-label="Escolher por categoria"
            radio
            :options="selectOptions"
          />
          </q-field>
        </div>

        <div class="input-pre">
           <q-btn @click="adicionaGasto()"  :loading="load" class="full-width" label="Adicionar" />
        </div>

      </section>
    </template>
 </page-wrapper>
</template>

<script>
import wrapper from '../../components/wrapper';
import Categoria from '../../services/configuracoes/Categoria';
import CompraPredefinida from '../../services/compras/CompraPredefinida';

export default {
  name: 'PageAddPredefinidos',
  components: {
    'page-wrapper': wrapper
  },

  data() {
    return {
      pre: {
        titulo: '',
        preco: '',
        categoria: ''
      },
      selectOptions: [],
      load: false,
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
    reset() {
      this.pre.titulo = ''
      this.pre.categoria = ''
      this.pre.preco = ''
    }
  },

  methods: {
    adicionaGasto() {
      this.load = true
      let cp = new CompraPredefinida();
      cp.addCompra(this.pre)
      .then(res =>
        this.$q.notify({
          message: `Compra adicionada com sucesso `,
          type: 'positive',
          icon: 'done',
          position: 'top-right'
        })
      ).then(resetForm => {
          this.reset;
          this.load = false
      })
    }
  },
}
</script>

<style>
.input-pre {
  margin-top: 2rem;
}

.input-pre .q-btn {
  background: #573769;
  color: white;
  position: fixed;
  bottom: 0;
  right: 0;
  height: 45px;
}
</style>
