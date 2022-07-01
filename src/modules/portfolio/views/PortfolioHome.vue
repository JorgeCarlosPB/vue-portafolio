<template>
<br>
  Este es el home de mi portafolio
  <!-- {{funcionarios}} -->
</template>

<script>
import { ref } from 'vue'
import hojaVidaApi from '@/api/hojaVidaApi.js'
import dataFuncionarios from '@/modules/portfolio/helpers/dataFuncionarios.json'
import axios from 'axios'

export default {
  setup(){
    
    //console.log(JSON.parse(dataFuncionarios))
    //console.log(JSON.stringify(dataFuncionarios)) esto vuelve un JSON en un objeto
    console.log(dataFuncionarios)

    //const funcionario = ref({}) 
    

    return{
      
    }

  }

}
</script>

<style>

</style>