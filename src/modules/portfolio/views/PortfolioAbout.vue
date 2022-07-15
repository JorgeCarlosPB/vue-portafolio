<template>
  <div class="contenido">
    <div class="titulo">
      <h1 :style="{color:currentMode.color3}">Acerca de <span :style="{color:getColor}">mí</span></h1> 
      <hr>
    </div>
    
    <div class="description">
      <div class="imagen">
        <img :src="persona.fotografia" alt="fotografia" class="foto">
      </div>
      
      <div class="contenedor">
        <div class="detalle">
          <h3 :style="{color:currentMode.color3}">¿Quién soy?</h3>
          <h2 :style="{color:currentMode.color3}">Mi nombre es {{persona.nombre}} {{persona.primerApellido}} {{persona.segudnoApellido}},
              soy <span :style="{color:getColor, textTransform:'lowercase'}">{{persona.profesion}}</span>
          </h2>
          <p>{{persona.descripcion}}</p>
        </div>

        <PersonalInformation class="pinfo"/>

        <button class="descarga" :style="{backgroundColor:getColor, border:'2px solid '+currentMode.color3}">Descargar CV  <font-awesome-icon icon="fa-solid fa-download" /></button>
        
        <SocialNet class="redes"/>

      </div>
    </div>


    <h1 v-if="persona.habilidades" :style="{color:currentMode.color3}" class="tituloSkills">Mis conocimientos</h1>
    <MySkills class="skills"/>

    <MyLanguages class="idiomas"/>

  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import getPerson from '../composables/getPerson';
import useThemes from '../composables/useThemes';


export default {
  components: { 
      SocialNet: defineAsyncComponent(()=>import('../components/SocialNet.vue')),
      MyFormation: defineAsyncComponent(()=>import('../components/MyFormation.vue')),
      MySkills: defineAsyncComponent(()=>import('../components/MySkills.vue')),
      PersonalInformation: defineAsyncComponent(()=>import('../components/PersonalInformation.vue')),
      MyPostgrades: defineAsyncComponent(()=>import('../components/MyPostgrades.vue')),
      MyLanguages: defineAsyncComponent(()=>import('../components/MyLanguages.vue'))
  },
  
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

.contenido{
  display: flex;
  flex-direction: column;
  .titulo{
    display: flex;
    justify-content: center;
    h1{
      font-size: 60px; 
    }
    hr{
      color: black;
    }
  }
  .description{
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .imagen{
      width: 27%;
      .foto{
        width: 100%;
      }
    }
    .contenedor{
      width: 70%;
      .detalle{
        p{
          color: #888888;
        }
      }

      .pinfo{
        width: 100%;
      }

      .descarga{
        padding: 5px;
        border-radius: 5px;
        background-color: #ff651c;
        color: black;
      }

      .descarga:hover{
        padding: 7px;
        background-color: white;
        color: black;
      }

      .redes{
        margin: 15px 0;
      }

      
    }
  }

  .tituloSkills{
    text-align: center;
    margin: 25px 0px;
  }
}


@media (max-width: 700px) {
  .contenido{

    .titulo{
      h1{
        font-size: 40px;
      }
    
    }

    .description{
      flex-direction: column;
      .imagen{
        width: 60%;   
        align-self: center;
        .foto{
          justify-self: center;
        }
      }

      .contenedor{
        width: 100%;
        margin: 20px 0 20px 0;

        
      }
    }
  }
} 

</style>