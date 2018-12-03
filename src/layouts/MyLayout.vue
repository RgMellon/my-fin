<template>
  <q-layout view="lHh Lpr lFf">
      <q-tabs
        color="purple"
        text-color="white"
        class="shadow"
        align="justify"
      >
        <q-tab slot="title" label="Dia"  />
        <q-tab slot="title" label="Semana" />
        <q-tab slot="title" label="Mês" />
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
    openURL
  }
}
</script>

<style>
</style>
