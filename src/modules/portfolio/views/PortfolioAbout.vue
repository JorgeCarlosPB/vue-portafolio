<template>
  <div class="contenido">
    <div class="titulo">
      <h1 :style="{color:currentMode.color3}">Acerca de <span >mí</span></h1> 
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

        <h2 :style="{color:currentMode.color3}">Información personal</h2>
        <div class="info">
          
          <div class="info1">
            <span class="clave">Nombre :</span>            <span class="valor" :style="{color:currentMode.color3}">{{persona.nombre}}</span>          <br>
            <span class="clave">Apellido Paterno :</span>  <span class="valor" :style="{color:currentMode.color3}">{{persona.primerApellido}}</span>  <br>
            <span class="clave">Apellido Materno :</span>  <span class="valor" :style="{color:currentMode.color3}">{{persona.segundoApellido}}</span> <br>
            <span class="clave">Dirección :</span>         <span class="valor" :style="{color:currentMode.color3}">{{persona.primerApellido}}</span>  <br>
            <span class="clave">Lugar nacimiento :</span>  <span class="valor" :style="{color:currentMode.color3}">{{persona.primerApellido}}</span>  <br>
          </div>

          <div class="info1">
            <span class="clave">Nombre :</span>            <span class="valor" :style="{color:currentMode.color3}">{{persona.nombre}}</span>          <br>
            <span class="clave">Apellido Paterno :</span>  <span class="valor" :style="{color:currentMode.color3}">{{persona.primerApellido}}</span>  <br>
            <span class="clave">Apellido Materno :</span>  <span class="valor" :style="{color:currentMode.color3}">{{persona.segundoApellido}}</span> <br>
            <span class="clave">Dirección :</span>         <span class="valor" :style="{color:currentMode.color3}">{{persona.primerApellido}}</span>  <br>
            <span class="clave">Lugar nacimiento :</span>  <span class="valor" :style="{color:currentMode.color3}">{{persona.primerApellido}}</span>  <br>
          </div>
        </div>

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
  
}

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
  }

  .info{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
 
    .clave{
      color: #888888;

    }
    .info1{
      width: 40%;
    }
  }
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

</style>