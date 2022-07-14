<template>
  <div class="postgrado"
    v-if="persona.postGrado">
        <h2 :style="{color:currentMode.color3}">PostGrados</h2> <br>
        <div class="postgrados">
            <div class="postgradoItem" v-for="postgrado in persona.postGrado" :style="{backgroundColor:currentMode.color2, borderLeft:'2px solid'+getColor}">
                <h4 :style="{color: getColor}">{{postgrado.nombre}}</h4>
                <h5 :style="{color:currentMode.color3}">{{postgrado.institucion}}</h5>
                <h6 :style="{color:currentMode.color3}">{{postgrado.fechaInicio}} hasta {{postgrado.fechaFin}}</h6>
                <p>{{postgrado.descripcion}}</p>
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

.postgrado{
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
.postgrados{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    p{
        color: #888888;
    }
}

.postgradoItem{
    padding: 15px;
    width: 48%;
    //width: 450px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 0 10px black;
    margin-bottom: 30px;
}

@media (max-width: 650px) {

    .formacion{

        .education{
            flex-direction: column;

            .educationItem{
                width: 100%;
            }
        }
    }


}

</style>