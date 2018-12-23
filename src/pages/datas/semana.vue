<template>
  <page-wrapper>
    <template slot="conteudo">
      <section class="grafico row justify-center">
        <knob :maximo="max" :minimo="0" :atual="0"> </knob>
      </section>

      <div class="balanco">
        <slider gasto="200,00" sobra="100,00" :total="max"> </slider>
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
import Controle from '../../services/Controle';

export default {
  components: {
    'page-wrapper' : wrapper,
    'slider': Slider,
    'knob': Knob,
    'btn-despesas' : BtnDespesas
  },

  mounted() {
    let c = new Controle()
    c.semana()
      .then(res => {
        this.max = res.mediaSemana
      })
  },
  data () {
    return {
      model: 0,
      min: 0,
      max: 0,
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
  background: #5c4679 !important;
  color: white;
  height: 186px;
}

.info {
  font-size: 1rem;
  color: #fda900;
  padding-top: 1rem;
  border-top: 1px solid #fda900;
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
