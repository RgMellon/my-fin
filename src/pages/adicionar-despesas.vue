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
            <q-input color="purple" v-model="text2" />
          </q-field>
        </div>

        <div class="input-add">
          <q-field
            icon="access_time"
            label="Data da compra"
          >
          <q-datetime
            type="date"
            v-model="date"
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
              float-label="Categoria" color="purple"
              v-model="select"
              :options="[
                {label: 'Comida', value: 'bucharest'},
                {label: 'Lazer', value: 'london'},
                {label: 'Combustivel', value: 'paris'}
              ]"
            />
          </q-field>
        </div>
        <div class="input-add">
          <q-field
            icon="place"
            label="Local"
            color="purple"
          >
            <q-input color="purple" v-model="text2" />
          </q-field>
        </div>

        <div class="input-add">
           <q-btn @click="simulateProgress(1)" :loading="loading1" color="purple" class="full-width" label="Adicionar" />
        </div>
      </section>
    </template>
  </page-wrapper>
</template>

<script>

import { Notify } from 'quasar';
import wrapper from '../components/wrapper';

export default {
  components: {
    'page-wrapper' : wrapper
  },
  name: 'PageAdicionaDespesa',
  data() {
    return {
      text2:'',
      date: '',
      select: '',
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
          message: `Despesa adicionada`,
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
