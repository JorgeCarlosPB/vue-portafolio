<template>
<h1 v-if="persona.habilidades" :style="{color:currentMode.color3}">Otros conocimientos</h1>
<div class="contenedor"
    v-if="persona.habilidades">
    
    <div class="habilidades">
        
        <div class="herramienta"
            v-for="herramienta in persona.habilidades">
            <div class="detalle">
                <label :style="{color:currentMode.color3}"> {{herramienta.nombre}}</label>   <span class="años">Experiencia: {{herramienta.años}} años</span>
            </div>

            <div class="porcentaje">
                <meter
                    min="0" max="100" low="1" high="99" optimum="50"
                    :value=herramienta.porcentaje>
                </meter> <span :style="{color:currentMode.color3}">{{herramienta.porcentaje}}%</span>

            </div>
            
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

    //console.log(typeof(persona.value.habilidades[0].porcentaje))

    return{
      currentMode,
      persona
      
    }
  }
}
</script>

<style scoped lang="scss">

h1{
        text-align: center;
        margin-bottom: 30px;
}

.contenedor{
    display: flex;
    justify-content: center;

    
    
}


.habilidades{
    box-shadow: 0 0 10px black;
    width: 90%;
    padding: 4%;
    justify-self: center;
}
.herramienta{
    padding-bottom: 20px;
      

    .detalle{
        display: flex;
        justify-content: space-between;
    }

    .porcentaje{
        display: flex;
        justify-content: space-between;
    }

    .años{
        text-align: center;
        color: #ff651c;
    }

    meter{
        width: 92%;
        
    }
    ::-webkit-meter-bar{
        background: white;   
    }

    ::-webkit-meter-optimum-value{
        background: #ff651c;
    }
}


@media (max-width: 700px) {
  
} 

</style>