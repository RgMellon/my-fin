<template>
  <section class="fin" v-touch-swipe="handler">
    <div class="header">
      <div class="bg-opaco"></div>
      <div class="icon">
          <img src="../assets/img/icon.png" alt="">
      </div>
    </div>
    <div class="separator">
      <p> MyFin </p>
    </div>

    <div class="area-form">
      <page-wrapper  style="min-height:50vh !important;">
        <template slot="conteudo">
        <div class="gasto">
          <q-field
            icon="attach_money"
            label="Total que gostaria de gastar"
            color="purple"
          >
          <q-input color="purple" v-model="maximo" />
        </q-field>

        <q-field class="gasto"
            icon="calendar_today"
            label="Quantidade de dias"
            color="purple"
          >
            <q-input color="purple" v-model="dias" />
        </q-field>

        <div class="input-add">
           <q-btn @click="adicionaMaximo()" :loading="load" color="purple"
            class="full-width" label="Adicionar" />
        </div>

      </div>
        </template>
      </page-wrapper>
    </div>
  </section>

</template>

<script>
import wrapper from '../components/wrapper';
import MaximoGasto from '../services/configuracoes/MaximoGasto';

export default {

  name: 'PageAdicionarFatura',

  components: {
    'page-wrapper' : wrapper
  },

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
      .then(redi => this.$router.push('/'))
      .then(res =>
        this.$q.notify({
          message: `Configurações adicionadas`,
          type: 'positive',
          icon: 'done',
          position: 'top-right'
        })
      )

      .catch(err => {
        this.$q.notify({
          message: 'Já existe um controle em aberto :\\'
        })
        this.load = false
      })

    },
    handler (obj) {
        if(obj.direction == 'right') {
          alert('oi');
        }

        if(obj.direction == 'left') {
          this.$router.push('/')
        }
    }
  }
}
</script>

<style>
.header {
  height: 25vh;
  background: url('../assets/img/bgFin.jpg');
  background-repeat: no-repeat;
  background-position: center;
}
.bg-opaco {
  width: 100%;
  height: 25vh;
  background: #5c4679;
  z-index: 99999;
  opacity: 0.9;
  position: relative;
}
.icon {
       position: absolute;
    top: 80px;
    z-index: 999999;
    /* left: 130px; */
    /* background: #705d89; */
    border-radius: 110px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.separator {
     height: 100px;
    background: #fda900e0;
        display: flex;
    align-items: flex-end;
    color: white;
    justify-content: center;
    font-weight: 400;
    font-size: 1.5rem;
}

.separator p {
  display: flex;
  align-items: flex-end;
}
.icon img {
     width: 130px;
    -webkit-box-shadow: 5px 7px 3px 0px rgba(1, 1, 1, 0.17);
    box-shadow: 5px 7px 3px 0px rgba(1, 1, 1, 0.17);
    border-radius: 90px;
    background:#5c4679;
}
.input-add .q-btn {
  background: #5c4679 !important;
}
.gasto {
  margin-top: 4rem;
}
.input-add {
  margin-top: 3rem;
}

</style>
