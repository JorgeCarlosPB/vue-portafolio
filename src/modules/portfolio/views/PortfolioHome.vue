<template>
  <!-- <div class="content"> -->
    <div class="foto">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhWmcSb9CH1TeQsd_SoRDx8d4Ab72lfaNWwg_QVoLM87oggu9Z-DY1px63LXCsHRBdls&usqp=CAU" alt="foto">
    </div>

    <div class="description">
      <h1> {{persona.nombre}} {{persona.primerApellido}} {{persona.segundoApellido}}</h1>
      <hr>

      <P>{{persona.descripcion}}</P>


      <div class="buttons">
        <button class="btn btn-lg btn primary active">
          Contáctame
        </button>

        <button class="btn btn-lg btn primary">
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
    
    console.log(persona.value)

    return{
      ci,
      persona
    }

  }

}
</script>

<style>
.content .foto{
    float: left;
    /* width: 30%;
    margin: 5px; */
}

.content .foto img{
    width: 100%;
    height: auto;
    margin-top: 10%;
}

.content .description{
    float: right;
    width: 60%;
    display: flex;
    flex-direction: column;

}

.content h1{
    font-size: 200%;
    text-align: center;
}

.content p{

}

.buttons{
    display: flex;
    justify-content: center;
}




</style>