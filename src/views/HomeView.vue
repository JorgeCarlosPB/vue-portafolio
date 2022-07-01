<template>
  <div class="align-center">
    Aquí puede generar el portafolio de los funcionarios dependiendo de su carnet <br> <br> <br>

    
    <button class="btn btn-success me-3" mx-3>
      Mostrar a los ingenieros
    </button>


    <button class="btn btn-warning me-3" mx-3>
      Mostrar a los abogados
    </button>

    <br> <br>

    <table class="table table-striped table-success table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">CI</th>
          <th scope="col">Celular</th>
          <th scope="col">Opciones</th>
        </tr>

        <tr>

        </tr>


      </thead>

    </table>


    <button class="btn btn-warning mx-3" 
      @click="$router.push({name:'phome'})">
      Ver Portafolio
    </button>
  </div>

</template>

<script>
import dataFuncionarios from '@/modules/portfolio/helpers/dataFuncionarios.json'
import { ref } from 'vue'


export default{
  setup(){
    //console.log((dataFuncionarios.ingenieros))
    console.log((dataFuncionarios.len))
    const funcionarios = ref()
    //funcionarios.value = (JSON.stringify(dataFuncionarios.devs) )
    funcionarios.value = (dataFuncionarios)
    //console.log(funcionarios.length)

    return{
      funcionarios
    }

  }

}

</script>


<style lang="scss">

</style>