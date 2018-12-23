<template>
  <div class="btn-add-despesa">
  <q-btn  icon-right="send" class="btn-adiciona"
                    style="background: white;" to="/adiciona/despesas"
                    label="Adicionar despesa"

                    />
  </div>
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

.btn-add-despesa .q-btn {
   background: #5c4679 !important;
   color: white;
}
</style>
