<template>
<div>
  <q-layout>

    <q-layout-header>
          <q-toolbar color="white">
            <q-btn style="color:#573769" flat round dense  v-go-back=" '/config' " icon="arrow_back_ios" />
            <q-toolbar-title>
              <span style="color:#573769"> Configurações </span>
          </q-toolbar-title>
          <q-btn style="color:#573769" flat round dense  v-go-back=" '/' " icon="home" />
        </q-toolbar>
    </q-layout-header>
    <q-page-container>

        <router-view />
         <div class="page-config">
        </div>
    </q-page-container>

</q-layout>

</div>
</template>

<script>
export default {
  name: 'LayoutConfig',
}
</script>

<style>
.q-item-side {
  color: #573769;
}
</style>
