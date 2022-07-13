<template>
  <div class="contenido">
    <div class="titulo">
      <h1 :style="{color:currentMode.color3}">Acerca de <span >mí</span></h1> 
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
              soy <span :style="{color:'#ff651c'}">{{persona.profesion}}</span>
          </h2>
          <p>{{persona.descripcion}}</p>
        </div>

        <PersonalInformation class="pinfo"/>

        <button class="descarga">Descargar CV  <font-awesome-icon icon="fa-solid fa-download" /></button>
        
        <SocialNet/>

      </div>
    </div>

    <MyResume/>

    <MySkills/>

  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import getPerson from '../composables/getPerson';
import useThemes from '../composables/useThemes';

export default {
  components: { 
      SocialNet: defineAsyncComponent(()=>import('../components/SocialNet.vue')),
      MyResume: defineAsyncComponent(()=>import('../components/MyResume.vue')),
      MySkills: defineAsyncComponent(()=>import('../components/MySkills.vue')),
      PersonalInformation: defineAsyncComponent(()=>import('../components/PersonalInformation.vue'))
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
        color: white;
      }

      .descarga:hover{
        border: solid 2px #ff651c;
        background-color: white;
        color: black;
      }
    }

    
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