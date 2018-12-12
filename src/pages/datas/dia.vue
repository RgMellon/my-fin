<template>
    <page-wrapper>
      <template slot="conteudo">
          <section class="grafico row justify-center">
            <knob :maximo="20" :minimo="0" :atual="1"> </knob>
          </section>
          <slider gasto="20,00" sobra="10,00" total="50,00"> </slider>
          <div class="btn-adiciona">
            <btn-despesas></btn-despesas>
          </div>
      </template>
    </page-wrapper>
</template>

<script>

import wrapper from '../../components/wrapper';
import Slider from '../../components/Slider';
import Knob from '../../components/Knob';
import BtnDespesas from '../../components/BtnDespesas';

export default {
  components: {
    'page-wrapper': wrapper,
    'slider': Slider,
    'knob': Knob,
    'btn-despesas' : BtnDespesas
  },
  name: 'PageDia'
}
</script>

<style>
.btn-adiciona {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
}
</style>
