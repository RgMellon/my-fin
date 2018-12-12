<template>
  <q-carousel class="text-white">

    <q-carousel-slide class="first-c">
      <p style="font-size:1.6rem;"> R$ {{ this.gasto }} </p>
      <p class="titulo"> Gasto </p>
      <p class="info"> <q-icon name="info" /> Quantidade que gastou até o momento</p>
    </q-carousel-slide>

    <q-carousel-slide class="first-c">
      <p style="font-size:1.6rem;">  R$ {{ this.sobra}} </p>
      <p class="titulo"> Sobra </p>
      <p class="info"> <q-icon name="info" /> O valor que sobra para gastar </p>
    </q-carousel-slide>

    <q-carousel-slide class="first-c">
      <p style="font-size:1.6rem;">  R$ {{ this.total }} </p>
      <p class="titulo"> Posso gastar </p>
      <p class="info"> <q-icon name="info" /> Quantidade que posso gastar </p>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
export default {
   props:['sobra', 'gasto', 'total'],
  name: 'ComponentSlider',
  data() {
    return {};
  }
};
</script>

<style>
</style>
