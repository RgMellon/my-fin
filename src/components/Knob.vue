<template>
<div>
  <q-knob
    v-model="this.atual"
    size="240px"
    :color="medeCor"
    line-width="3px"
    track-color="white"
    :min="this.minimo"
    :max="this.maximo"
    readonly
  >
    {{ this.atual }}
  </q-knob>

</div>
</template>

<script>
export default {
  props: ['minimo', 'maximo', 'atual'],
  name: 'ComponentKnob',

  data () {
    return {}
  },

  computed: {
    medeCor() {
        const umTerco = this.maximo * 0.33;
        const doisTerco = this.maximo * 0.66;

        if(this.atual <= umTerco) return 'green'
        else if( this.atual > umTerco && this.atual <= doisTerco) return 'yellow'
        else return 'red'
    }
  }
}
</script>

<style>
.text-green {
  color: #fda900 !important;
}
</style>
