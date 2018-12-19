<template>
  <page-wrapper>
    <template slot="conteudo">
      <section class="grafico row justify-center">
        <knob :maximo="max" :minimo="0" :atual="model"> </knob>
      </section>

      <div class="balanco">
        <slider :gasto="model" :sobra="calculaSobra" :total="max"> </slider>
        <div class="btn-adiciona">
          <btn-despesas></btn-despesas>
        </div>
      </div>

      <div class="page-config">
        <q-btn to="/config" style="background:white; box-shadow: none;"
               color="purple" size="2rem" icon="keyboard_arrow_down" />
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
    let c = new Controle();
    c.dia()
      .then(res => {
        this.max = res.mediaDia
        this.model = res.gastoDia
      });
  },

  data () {
    return {
      model: 0,
      min: 0,
      max: 0,
    }
  },

  computed: {
    calculaSobra() {
      if(this.max - this.model < 0 ) return 0
      else return this.max - this.model
    }
  }


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

.page-config{
    display: flex;
    justify-content: center;
    margin-top: 3rem;
}

</style>
