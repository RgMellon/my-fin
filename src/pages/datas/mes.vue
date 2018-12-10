<template>
  <page-wrapper>
    <template slot="conteudo">
      <section class="grafico row justify-center">
        <q-knob
            v-model="model"
            size="240px"
            :color="medeCor"
            line-width="2px"
            track-color="white"
            :min="min"
            :max="max"
            readonly

          >
            $ {{ model }}
        </q-knob>
      </section>

      <div class="balanco">
        <q-carousel class="text-white">
          <q-carousel-slide class="first-c">
            <p style="font-size:1.6rem;"> R$ 400,00 </p>
            <p class="titulo"> Gasto </p>
            <p class="info"> <q-icon name="info" /> Quantidade que gastou até o momento</p>
          </q-carousel-slide>
          <q-carousel-slide class="first-c">
            <p style="font-size:1.6rem;">  R$ 200,00 </p>
            <p class="titulo"> Sobra </p>
            <p class="info"> <q-icon name="info" /> O valor que sobra para gastar </p>
          </q-carousel-slide>
          <q-carousel-slide class="first-c">
              <p style="font-size:1.6rem;">  R$ 100,00 </p>
            <p class="titulo"> Posso gastar </p>
            <p class="info"> <q-icon name="info" /> Quantidade que posso gastar </p>
          </q-carousel-slide>
      </q-carousel>

        <div class="btn-adiciona">
            <q-btn  icon-right="send" class="btn-adiciona"
                    style="background: white;" to="/adiciona/despesas"
                    label="Adicionar despesa"
                    color="purple"
                    />

        </div>
    </div>
    </template>
  </page-wrapper>
</template>

<script>

import wrapper from '../../components/wrapper';

export default {
  components: {
    'page-wrapper' : wrapper
  },
  data () {
    return {
      model: 200,
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
