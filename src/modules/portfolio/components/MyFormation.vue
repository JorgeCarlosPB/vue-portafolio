<template>
  <div class="formacion"
    v-if="persona.educacion">
        <h2 :style="{color:currentMode.color3}">Formación Académica</h2> <br>
        <div class="education">
            <div class="educationItem" v-for="educacion in persona.educacion" :style="{backgroundColor:currentMode.color2, borderLeft:'2px solid'+getColor}">
                <h4 :style="{color:getColor}">{{educacion.nombre}}</h4>
                <h5 :style="{color:currentMode.color3}">{{educacion.institucion}}</h5>
                <h6 :style="{color:currentMode.color3}">{{educacion.fechaInicio}} hasta {{educacion.fechaFin}}</h6>
                <p>{{educacion.descripcion}}</p>
            </div>
        </div>
    
  </div>
</template>

<script>
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
.formacion{
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

.education{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    p{
        color: #888888;
    }
}

.educationItem{
    padding: 15px;
    width: 48%;
    //width: 450px;
    background-color: white;
    border-radius: 15px;
    border-left: 2px solid #ff651c;
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