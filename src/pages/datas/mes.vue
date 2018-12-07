<template>
  <q-page padding>
    <div class="row justify-center" style="margin-top:2rem;">

      <q-knob
            v-model="model"
            size="140px"
            :color="medeCor"
            line-width="2px"
            track-color="white"
            :min="min"
            :max="max"
          >
            $ {{ model }}
      </q-knob>
    </div>

  </q-page>
</template>

<script>
export default {
  data () {
    return {
      model: 2,
      min: 0,
      max: 400,

    }
  },
  computed: {
    medeCor() {
        const umTerco = this.max * 0.33;
        const doisTerco = this.max * 0.66;

        if(this.model <= umTerco) return 'green'
        else if( this.model > umTerco && this.model <= doisTerco) return 'yellow'
        else return 'red'
    }
  }
}
</script>

<style>
</style>
