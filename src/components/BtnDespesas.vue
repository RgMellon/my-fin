<template>
  <q-btn  icon-right="send" class="btn-adiciona"
                    style="background: white;" to="/adiciona/despesas"
                    label="Adicionar despesa"
                    color="purple"
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
</style>
