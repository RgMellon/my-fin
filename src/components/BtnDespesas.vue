<template>
  <q-btn  icon-right="send" class="btn-adiciona"
                    style="background: white;" to="/adiciona/despesas"
                    label="Adicionar despesa"

                    />
</template>

<script>
export default {
  name: 'ComponentBtnDespesas',
  data () {
    return {}
  }
}
</script>

<style>
.btn-adiciona {
  z-index: 99999;
}

.q-btn {
   background: #5c4679 !important;
   color: white;
}
</style>
