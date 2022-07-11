<template>
  <div class="formacion"
    v-if="persona.educacion">
    <h1 :style="{color:currentMode.color3}">Mi <span :style="{color:'#ff651c'}">formación</span></h1>
    
        <h2 :style="{color:currentMode.color3}">Educación</h2> <br>
        <div class="education">
            <div class="educationItem" v-for="educacion in persona.educacion" :style="{backgroundColor:currentMode.color2}">
                <h4 :style="{color:'#ff651c'}">{{educacion.nombre}}</h4>
                <h5 :style="{color:currentMode.color3}">{{educacion.institucion}}</h5>
                <h6 :style="{color:currentMode.color3}">{{educacion.fechaInicio}} hasta {{educacion.fechaFin}}</h6>
                <p>{{educacion.descripcion}}</p>
            </div>
        </div>

        <h2 :style="{color:currentMode.color3}">Experiencia</h2> <br>
        <div class="education">
            <div class="educationItem" v-for="experiencia in persona.experiencia" :style="{backgroundColor:currentMode.color2}">
                <h4 :style="{color:'#ff651c'}">{{experiencia.nombre}}</h4>
                <h5 :style="{color:currentMode.color3}">{{experiencia.institucion}}</h5>
                <h6 :style="{color:currentMode.color3}">{{experiencia.fechaInicio}} hasta {{experiencia.fechaFin}}</h6>
                <p>{{experiencia.descripcion}}</p>
            </div>
        </div>
    
  </div>
</template>

<script>
import getPerson from '../composables/getPerson';
import useThemes from '../composables/useThemes';

export default {
    setup(){
      const {currentMode} = useThemes()
      const {persona}=getPerson()
    //   console.log((persona.value.educacion).length)
    //   console.log(persona.value.educacion[0].nombre)

    return{
      currentMode,
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

</style>