<template>
  <q-layout>
    <q-layout-header>
      <q-toolbar color="white">
          <q-btn style="color:#9c27b0" flat round dense  v-go-back=" '/' " icon="arrow_back_ios" />
          <q-toolbar-title>
            <span style="color:#9c27b0"> Adicionar despesa </span>
          </q-toolbar-title>
        </q-toolbar>
      </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {

  name: 'LayoutTwo',
  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>

<style>
</style>
