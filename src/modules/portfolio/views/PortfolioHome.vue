<template>
  <!-- <div class="content"> -->
    <div class="foto">
        <img :src="persona.fotografia" alt="fotografia">
    </div>

    <div class="description">
      <div class="titulo">
        <h1> {{persona.nombre}} {{persona.primerApellido}} {{persona.segundoApellido}}</h1>
        <hr class="linea">
      </div>

      <div class="redes">
        <a v-if="persona.facebook" 
          :href="persona.facebook" target="_blank"><font-awesome-icon class="icon" icon="fa-brands fa-facebook" size="2x" inverse/></a>
        <a v-if="persona.instagram" 
          :href="persona.instagram" target="_blank"><font-awesome-icon class="icon" icon="fa-brands fa-instagram-square" size="2x" inverse/></a>
        <a v-if="persona.linkedin" 
          :href="persona.linkedin" target="_blank"><font-awesome-icon class="icon" icon="fa-brands fa-linkedin" size="2x" inverse/></a>
      </div>

      <div class="detalle">
        <p>{{persona.descripcion}}</p>
      </div>
      
    
      <div class="buttons">
        <button class="btn btn-lg btn primary active"
            @click="$router.push({name:'pcontact'})">
          Contáctame
        </button>

        <button class="btn btn-lg btn primary"
             @click="$router.push({name:'pabout', params: {ci: persona.numeroDocumento}})">
          Acerca de mí
        </button>
      </div>
      
    </div>
  <!-- </div> -->
  
</template>

<script>
import { ref } from 'vue'
import dataFuncionarios from '@/modules/portfolio/helpers/dataFuncionarios.json'
import { useRoute } from 'vue-router';

export default {
  setup(){
    const route = useRoute()
    const ci = route.params.ci;
    const persona = ref()
   
    dataFuncionarios.forEach(element => {
      if(element.numeroDocumento == ci)
        persona.value = element
    });
    
    //console.log(persona.value)

    return{
      ci,
      persona
    }

  }

}
</script >

<style scope lang="scss">
.content .foto{
    width: 35%;
    justify-items: center;
    display: flex;
    align-items: center;
}

.content .foto img{
    width: 90%; 
    // height: auto;
    // margin-top: 10%;
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
          height: 10px;
          border-radius: 2px;
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

.redes{
  display: flex;
  justify-content: center;
  justify-content: center;

  a{
    margin: 0 15px 0 15px;

    .icon:hover{
      color: #ff651c;
    }
  }
  
}

</style>