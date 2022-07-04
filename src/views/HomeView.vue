<template>
  <div class="align-center">
    Aquí puede generar el portafolio de los funcionarios dependiendo de su carnet <br> <br> <br>

        
    <button 
      @click="showIngenieros"
      class="btn btn-success me-3" mx-3>
      Mostrar a los ingenieros
    </button>


    <button 
      @click="showAbogados"
      class="btn btn-warning me-3" mx-3>
      Mostrar a los abogados
    </button>

    <br> <br>

    <table v-if="isCalled" class="table table-striped table-success table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">CI</th>
          <th scope="col">Celular</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>

        <tr v-for="persona of cargo">
          <td>{{persona.index}}</td>
          <td>{{persona.nombre}}</td>
          <td>{{persona.primerApellido}} {{persona.segundoApellido}}</td>
          <td>{{persona.numeroDocumento}}</td>
          <td>{{persona.celular}}</td>
          <td><button class="btn btn-outline-primary me-3"
                @click="$router.push({name:'phome', params: {ci: persona.numeroDocumento}})">
                Ver portafolio
              </button></td>
        </tr>
      
    </table>


    <!-- <button class="btn btn-warning mx-3" 
      @click="$router.push({name:'phome'})">
      Ver Portafolio
    </button> -->
  </div>
</template>

<script>
import dataFuncionarios from '@/modules/portfolio/helpers/dataFuncionarios.json'
import { ref } from 'vue'



export default{
  setup(){

    //console.log((Object.entries(dataFuncionarios)))
    const funcionarios = dataFuncionarios
    const abogados = ref([])
    const ingenieros = ref([])
    const isCalled = ref(false)
    const cargo = ref()

    //console.log(typeof(dataFuncionarios))
    dataFuncionarios.forEach(element => {
      if(element.esAbogado == 1)
        (abogados.value).push(element)
      if(element.esInformatico == 1)
        (ingenieros.value).push(element)
    });

    console.log(abogados.value)
    console.log(ingenieros.value)
    
    /*
    async function obtenerDatos(){
      const response = await ('dataFuncionarios');
      const json = await response.json();
      console.log(json);
    }
    obtenerDatos()
    */

    return{
      funcionarios,
      abogados,
      ingenieros,
      isCalled,

      showIngenieros: ()=>{
        cargo.value = ingenieros.value
        isCalled.value = true
      },

      showAbogados: () =>{
        cargo.value = abogados.value
        isCalled.value = true
      },

      cargo,

    }

  }

}

</script>


<style lang="scss">

</style>