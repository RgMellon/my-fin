<template>
  <q-layout class="bg" v-touch-swipe="handler" view="lHh Lpr lFf">
      <q-tabs
        color="#674679e3"
        text-color="white"
        class="shadow"
        align="justify"
      >
        <q-tab @click="redirecionaDia"  slot="title" label="Dia"  />
        <!-- <q-tab @click="redirecionaSemana" slot="title" label="Semana" /> -->
        <q-tab @click="redirecionaMes"  slot="title" label="Mês" />
      </q-tabs>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL,
    redirecionaMes() {
      this.$router.push('/mes');
    },
    redirecionaDia() {
      this.$router.push('/');
    },
    redirecionaSemana() {
      this.$router.push('/semana');
    },
    handler (obj) {
      if(obj.direction == 'left') {
        this.$router.push('/config')
      }
      if(obj.direction == 'right') {
        this.$router.push('/adiciona/despesas')
      }
    }
  }
}
</script>

<style>
.bg {
  background: #573769;
}
.q-tabs {
  background: #5c4679;
}
</style>
