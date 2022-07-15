<template>
  <div class="experiencia"
    v-if="persona.experiencia">

        <h2 :style="{color:currentMode.color3}">Experiencia Laboral</h2> <br>
        <div class="experiencias">
            <div class="experienciaItem" v-for="experiencia in persona.experiencia" :style="{backgroundColor:currentMode.color2, borderLeft:'2px solid'+getColor}">
                <h4 :style="{color:getColor}">{{experiencia.nombre}}</h4>
                <h5 :style="{color:currentMode.color3}">{{experiencia.institucion}}</h5>
                <h6 :style="{color:currentMode.color3}">{{experiencia.fechaInicio}} hasta {{experiencia.fechaFin}}</h6>
                <p>{{experiencia.descripcion}}</p>
            </div>
        </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import getPerson from '../composables/getPerson';
import useThemes from '../composables/useThemes';

export default {
    setup(){
      const {currentMode, getColor} = useThemes()
      const {persona}=getPerson()

    return{
      currentMode,
      getColor,
      persona
      
    }
  }

}
</script>

<style scoped lang="scss">

.experiencia{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    h1{
        text-align: center;
    }

    h2{
        text-align: center;
    }
}
.experiencias{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    p{
        color: #888888;
    }
}

.experienciaItem{
    padding: 15px;
    width: 48%;
    //width: 450px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 0 10px black;
    margin-bottom: 30px;
}

@media (max-width: 650px) {

    .postgrado{

        .postgrados{
            flex-direction: column;

            .postgradoItem{
                width: 100%;
            }
        }
    }


}

</style>