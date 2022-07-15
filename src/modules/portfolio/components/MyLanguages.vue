<template>

<div class="idiomas">
    <h1 class="titulo">Idiomas</h1>
    <table class="tabla">
        <tr class="cabecera">
            <th>Idiomas</th>
            <th>Habla</th>
            <th>Escribe</th>
            <th>Lee</th>
        </tr>
        <tr class="separador">
            <th colspan="4"> <div class="linea" :style="{backgroundColor:currentMode.color3}"></div></th>  
        </tr> 
        

        <tr v-for="idioma in persona.idiomas" class="contenido">
            <td class="nombre">{{idioma.nombre}}</td>
            <td class="check"><font-awesome-icon icon="fa-solid fa-check" v-if="idioma.habla" :style="{color:getColor}"/></td>
            <td class="check"><font-awesome-icon icon="fa-solid fa-check" v-if="idioma.escribe" :style="{color:getColor}"/></td>
            <td class="check"><font-awesome-icon icon="fa-solid fa-check" v-if="idioma.lee" :style="{color:getColor}"/></td>
        </tr>

        <tr> <td colspan="4"> <div class="espacio"> </div></td></tr>
    </table>
</div>
  
</template>

<script>
import getPerson from '../composables/getPerson';
import useThemes from '../composables/useThemes';

export default {
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

.idiomas{
    display: flex;
    flex-direction: column;
    margin: 30px 0;

    .titulo{
        text-align: center;
        margin-bottom: 30px;

    }
    .tabla{
        width: 80%;
        align-self: center;
        box-shadow: 0 0 10px black;
        padding-bottom: 40px;
        border-radius: 20px;

        th{
            width: 25%;
        }

        
        .cabecera{ 
            th{
            font-size: 25px;
            font-weight: bold;
            text-align: center;
            padding-top: 30px;
            }
        }

        .separador{
              
            .linea{
                width: 90%;
                height: 2px;
                text-align: center;
                margin: 10px 0 15px 5%;
    
            }
        }
        .contenido{
            .nombre{
                text-align: center;
            }
            .check{
                //display: flex;
                //justify-content: center;
                text-align: center;
                padding: 8px 0 15px 0;
            }
        }
        .espacio{
                height: 20px;

            }
        
    }


}

</style>