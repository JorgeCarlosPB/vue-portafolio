<template>

    <div class="contenedor">
        <h2 :style="{color:currentMode.color3}">Información personal</h2>

        <div class="info">
            
            <div class="info1">
                <div class="item" v-if="persona.nombre">
                <span class="clave">Nombre : </span>            
                <span class="valor" :style="{color:currentMode.color3}">{{persona.nombre}}</span>    
                </div>
                    

                <div class="item" v-if="persona.primerApellido">
                <span class="clave">Apellido Paterno : </span>  
                <span class="valor" :style="{color:currentMode.color3}">{{persona.primerApellido}}</span> 
                </div>

                <div class="item" v-if="persona.segundoApellido">
                <span class="clave">Apellido Materno : </span>  
                <span class="valor" :style="{color:currentMode.color3}">{{persona.segundoApellido}}</span> 
                </div>

                <div class="item" v-if="persona.sexo">
                <span class="clave">Sexo : </span>          
                <span class="valor" :style="{color:currentMode.color3}">{{persona.sexo}}</span>
                </div>

                <div class="item" v-if="persona.celular">
                <span class="clave">Celular : </span>   
                <span class="valor" :style="{color:currentMode.color3}">{{persona.celular}}</span>
                </div> 

                
            </div>

            <div class="info1">

                <div class="item" v-if="persona.fechaNacimiento">
                <span class="clave">Fecha nacimiento : </span>            
                <span class="valor" :style="{color:currentMode.color3}">{{persona.fechaNacimiento}}</span>
                </div>
                
                <div class="item" v-if="persona.lugarNacimiento">
                <span class="clave">Lugar de Nacimiento : </span>  
                <span class="valor" :style="{color:currentMode.color3}">{{persona.lugarNacimiento}}</span>
                </div>

                <div class="item" v-if="persona.nacionalidad">
                <span class="clave"> Nacionalidad : </span>  
                <span class="valor" :style="{color:currentMode.color3}">{{persona.nacionalidad}}</span>
                </div>

                <div class="item" v-if="persona.correo">
                <span class="clave">Correo : </span>         
                <span class="valor" :style="{color:currentMode.color3}">{{persona.correo}}</span>
                </div>

                <div class="item" v-if="persona.domicilio">
                <span class="clave">Domicilio : </span>  
                <span class="valor" :style="{color:currentMode.color3}">{{persona.domicilio}}</span>
                </div>

            </div>
        </div>


    </div>
  
    
</template>

<script>
import { defineAsyncComponent } from 'vue';
import getPerson from '../composables/getPerson';
import useThemes from '../composables/useThemes';

export default {
  components: { 
      SocialNet: defineAsyncComponent(()=>import('../components/SocialNet.vue')),
      MyResume: defineAsyncComponent(()=>import('./MyFormation.vue')),
      MySkills: defineAsyncComponent(()=>import('../components/MySkills.vue')),
  },
  
  setup(){
      const {currentMode} = useThemes()
      const {persona}=getPerson()

    return{
      currentMode,
      persona
      
    }
  }
}
</script>

<style scoped lang="scss">

.contenedor{
    .info{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    
        .info1{
          width: 47%;

          .item{
            margin-bottom: 8px;
          }

          .clave{
          color: #888888;         
          }
        }
      }
}

@media (max-width: 800px) {
    .contenedor{
        .info{
          flex-direction: column;

          .info1{
            width: 100%;
          }
        }
    }
}


</style>