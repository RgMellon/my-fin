<template>

  <div class="m-lista row" style="background:#5c4679">
          <div class="col-2 m-icon">
            <q-icon :name="this.defineIcon"></q-icon>
          </div>

          <div class="col-6 m-titulo">
            <h4> {{this.titulo}} </h4>
          </div>

          <div class="col-2 m-preco">
            <p> R$ </p>
            <p> {{ this.preco }} </p>
          </div>

          <div class="col-2 m-btn">
            <q-btn @click="add()" :loading="load" flat color="white" icon="done" />
          </div>
        </div>
</template>

<script>
import Compra from '../services/compras/Compra';
export default {
  props: ['titulo', 'categoria', 'preco', 'data_compra'],
  name: 'ComponentListaPredefinida',
  data () {
    return {
      load: false,
    }
  },
  computed: {

    defineIcon() {
      if(this.categoria == 'comida') return 'fastfood'
      else if(this.categoria == 'combustivel') return 'local_gas_station'
      else if(this.categoria == 'lazer') return 'weekend'
      else return 'shopping_basket'
    }
  },
  methods: {
    add() {
      this.load = true
      let compra = {
        titulo: this.titulo,
        categoria: this.categoria,
        preco: this.preco,
        local: 'no',
        data_compra: new Date()
      }

      let c = new Compra()
      c.abater(compra)
      .then(res =>
        this.$q.notify({
          message: `Compra adicionada com sucesso `,
          type: 'positive',
          icon: 'done',
          position: 'top-right'
        })
      ).then(l => this.load = false)

    }
  },
}
</script>

<style>

.m-lista {
  width: 100%;
  height: 60px;
     box-shadow: 5px 4px 0px 0px #574679d6;
}

.m-icon {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

         background: #beb2ce54;
}
.m-titulo {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
   /* border-right: 1px solid white; */

}

.m-titulo h4 {
  font-size: 1rem;
}

.m-titulo p {
  font-size: 1rem;
}

.m-preco {
  display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    /* border-right: 1px solid white; */
    flex-direction: column;
}

.m-preco p {
  margin: 0px;
}
.m-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
