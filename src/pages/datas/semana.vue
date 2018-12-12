<template>
  <page-wrapper>
    <template slot="conteudo">
      <section class="grafico row justify-center">
        <knob :maximo="40" :minimo="0" :atual="10"> </knob>
      </section>

      <div class="balanco">
        <slider gasto="200,00" sobra="100,00" total="600,00"> </slider>
        <div class="btn-adiciona">
          <btn-despesas></btn-despesas>
        </div>
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
    'page-wrapper' : wrapper,
    'slider': Slider,
    'knob': Knob,
    'btn-despesas' : BtnDespesas
  },
  data () {
    return {
      model: 300,
      min: 0,
      max: 400,
    }
  },


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
.info {
  color: gray;
}

.titulo {
  color: #9c27b0;
  margin-top: 1.3rem;
}
.first-c {
  margin-top: 2.4rem;
  border-radius: 10px;
  background: white;
  color: black;
  height: 186px;
}

.info {
  font-size: 1rem;
}
.s-c {
  border-radius: 10px;
  background: #9c27b0;
}
.titulo  {
  color: #9c27b0;
  font-size: 1srem;
}

.grafico {
  margin-top: 2rem;
}

.meio {
  background: #9c27b0;
}


</style>
