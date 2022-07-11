<template>
  <div class="contenido">
    <div class="imagen">
        <img :src="persona.fotografia" alt="fotografia" class="foto">
    </div>

    <div class="description">
      <div class="titulo">
        <h1 :style="{color: currentMode.color3}"> 
          {{persona.nombre}} {{persona.primerApellido}} {{persona.segundoApellido}}
        </h1>
        <hr class="linea">
      </div>

      <SocialNet/>

      <div class="detalle">
        <p>{{persona.descripcion}}</p>
      </div>
      
    
      <div class="buttons">
        <button class="btn btn-lg btn primary active"
            @click="$router.push({name:'pcontact'})">
          Contáctame
        </button>

        <button class="btn"
             @click="$router.push({name:'pabout', params: {ci: persona.numeroDocumento}})">
          Acerca de mí
        </button>
      </div>
      
    </div>
  </div>
  
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { ref } from 'vue'
import useThemes from '../composables/useThemes';

import getPerson from '../composables/getPerson';

export default {
  components: { 
      SocialNet: defineAsyncComponent(()=>import('../components/SocialNet.vue')),
  },

  setup(){
    const {currentMode} = useThemes()
    const {persona} = getPerson()
    //console.log(persona.value.redes[0].facebook)

    return{
   
      persona,
      currentMode,
    }

  }

}
</script >

<style lang="scss" scoped>
.contenido{
    //@includemargin: auto;
    //overflow: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: auto;
    //height: 100vh;
    height: 100%;
    //background-color:  #212121;
}

.contenido .imagen{
    width: 35%;
    display: flex;
    justify-items: center;
    align-items: center;

}

.imagen .foto{
    width: 100%; 
    border-radius: 10px;
}

.description{ 
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .titulo{
      display: flex;
      flex-direction: column;
      justify-items: center;  
        h1{
          font-size: 60px;
          text-align: center;
          color: white;
        }
        .linea{
          align-self: center;
          justify-self: center;
          background-color: white;
          border-color: white;
          color: white;
          width: 200px;
          height: 3px;
          border-radius: 2px;
          z-index: 5;
          
        }
    }

    .detalle p{
      color: #888888;
    text-align: center;
    }
}

.buttons{
    display: flex;
    justify-content: center;

    button{
      background-color: #ff651c;
      color: white;
      font-size: medium;
      margin: 5px;
    }
}

@media (max-width: 575.98px) { 
 .contenido{
    flex-direction: column;
    height: auto;

    .imagen{
      width: 70%;
    }

  
 }

 .description{
    .titulo{
      font-size: 20px;
      h1{
        font-size:larger;
      } 
    }

    .buttons{

      button{
        font-size: small;
        margin: 5px;
        padding: 5px;
      }
    }
 }
}

// `md` applies to small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
  
 }

// `lg` applies to medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {
  
 
 }

// `xl` applies to large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {
  
}

// `xxl` applies to x-large devices (large desktops, less than 1400px)
@media (max-width: 1399.98px) { 
  
}

</style>