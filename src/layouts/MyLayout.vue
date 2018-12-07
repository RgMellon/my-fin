<template>
  <q-layout class="bg" view="lHh Lpr lFf">
      <q-tabs
        color="purple"
        text-color="white"
        class="shadow"
        align="justify"
      >
        <q-tab @click="redirecionaDia"  slot="title" label="Dia"  />
        <q-tab slot="title" label="Semana" />
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
    }
  }
}
</script>

<style>
.bg {
  background: #9c27b0;
}
</style>
