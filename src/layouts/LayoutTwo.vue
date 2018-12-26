<template>
  <q-layout>
      <q-layout-header>
          <q-toolbar style="background: #573769 !important">
            <q-btn style="color:white" flat round dense  v-go-back=" '/' " icon="arrow_back_ios" />
            <q-toolbar-title>
              <span style="color:white"> Adicionar despesa </span>
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
