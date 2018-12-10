<template>
   <q-page class="mp">
      <div style="width: 800px; max-width:90vw;">
         <slot name="conteudo"></slot>
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageWrapper',
  data () {
    return {}
  }
}
</script>

<style>
 .mp {
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
