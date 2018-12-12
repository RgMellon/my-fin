<template>
<div>
  <transition appear
          enter-active-class="animated slideInUp"
          leave-active-class="animated slideInUp">

  <q-layout>
    <q-page-container>
        <q-btn to="/" style="background:white; box-shadow: none;"
               color="purple" size="2rem" icon="keyboard_arrow_up" />
        <router-view />
         <div class="page-config">
        </div>
    </q-page-container>

</q-layout>
 </transition>
</div>
</template>

<script>
export default {
  name: 'LayoutConfig',

}
</script>

<style>

</style>
