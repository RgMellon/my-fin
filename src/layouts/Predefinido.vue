<template>

  <q-layout style="background:#573769">
    <q-layout-header>
          <q-toolbar color="white">
            <q-btn style="color:#573769" flat round dense  v-go-back=" '/' " icon="arrow_back_ios" />
            <q-toolbar-title>
              <span style="color:#573769"> Compras predefinidas </span>
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
  name: 'LayoutGastosPredefinidos',
  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>

<style>
</style>
