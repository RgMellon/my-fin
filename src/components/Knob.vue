<template>
  <q-knob
    v-model="model"
    size="240px"
    :color="medeCor"
    line-width="3px"
    track-color="white"
    :min="this.minimo"
    :max="this.maximo"
    readonly
  >
    $ {{ this.model }}
  </q-knob>
</template>

<script>
export default {
  props: ['minimo', 'maximo', 'atual'],
  name: 'ComponentKnob',
  data () {
    return {
      model: this.atual,
      // min: this.minimo,
      // max: this.maximo,
    }
  },
  computed: {
    medeCor() {
        const umTerco = this.maximo * 0.33;
        const doisTerco = this.maximo * 0.66;

        if(this.model <= umTerco) return 'green'
        else if( this.model > umTerco && this.model <= doisTerco) return 'yellow'
        else return 'red'
    }
  }
}
</script>

<style>
</style>
