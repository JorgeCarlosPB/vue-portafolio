<template>
  <h1 :style="{color:currentMode.color3}">Mi <span :style="{color:getColor}">contacto</span></h1>
  <div class="contenedor">
    <div class="formulario">
      <h3 :style="{color:currentMode.color3}">Contáctame</h3>
      <form  @submit="sendEmail" :action="'https://formsubmit.co/'+persona.correo" method="POST" class="form">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="http://localhost:3000/portfolio/9702283/home">

        <div class="campo">
          <label for="Nombre" :style="{color:currentMode.color3}">Nombre: </label>
          <input type="text" name="nombre" placeholder="Tu nombre" :style="{border:'1px solid '+getColor}">
        </div>
        
        <div class="campo">
          <label for="Correo" :style="{color:currentMode.color3}">Email: </label>
          <input type="text" name="email" placeholder="email" :style="{border:'1px solid '+getColor}">  
        </div>
           

        <div class="campo">
          <label for="Tema" :style="{color:currentMode.color3}">Tema: </label>
          <input type="text" name="tema" placeholder="Tema objetivo" :style="{border:'1px solid '+getColor}"> 
        </div>
        

        <div class="campo">
          <label for="" :style="{color:currentMode.color3}">Mensaje: </label>
          <textarea name="mensaje" id="" cols="30" rows="10" placeholder="Mensaje" :style="{border:'1px solid '+getColor}"></textarea>
        </div>

        <input class="boton" type="submit" value="Enviar mensaje" :style="{backgroundColor:getColor, border:'2px solid '+currentMode.color3}" >

      </form>

    </div>

    <div class="datos">
      <h3 :style="{color:currentMode.color3}">Información de contacto</h3>

      <div class="item" v-if="persona.nombre">
        <div class="icono"><font-awesome-icon icon="fa-solid fa-user"  size="2x" :style="{color:currentMode.color3}"/></div>
        <div class="detalle">
          <h5 :style="{color:getColor}">Nombre</h5>
          <h6 :style="{color:currentMode.color3}">{{persona.nombre}} {{persona.primerApellido}} {{persona.segundoApellido}}</h6>
        </div>
      </div>

      <div class="item" v-if="persona.domicilio">
        <div class="icono"><font-awesome-icon icon="fa-solid fa-location-dot" size="2x" :style="{color:currentMode.color3}"/></div>
        <div class="detalle">
          <h5 :style="{color:getColor}">Dirección domicilio</h5>
          <h6 :style="{color:currentMode.color3}">{{persona.domicilio}}</h6>
        </div>
      </div>

      <div class="item" v-if="persona.celular">
        <div class="icono"><font-awesome-icon icon="fa-solid fa-phone" size="2x" :style="{color:currentMode.color3}"/></div>
        <div class="detalle">
          <h5 :style="{color:getColor}">Llámame</h5>
          <h6 :style="{color:currentMode.color3}">{{persona.celular}}</h6>
        </div>

      </div>

      <div class="item" v-if="persona.correo">
        <div class="icono"><font-awesome-icon icon="fa-solid fa-envelope" size="2x" :style="{color:currentMode.color3}"/></div>
        <div class="detalle">
          <h5 :style="{color:currentMode.color3}">Envíame un correo</h5>
          <h6 :style="{color:currentMode.color3}"><a href="mailto:jorgito.prz.18@gmail.com">{{persona.correo}}</a></h6>
        </div>

      </div>

      <SocialNet class="redes"/>

    </div>

  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import getPerson from '../composables/getPerson';
import useThemes from '../composables/useThemes';

export default {
  components: { 
      SocialNet: defineAsyncComponent(()=>import('../components/SocialNet.vue')),
      
  },
    
    setup(){
        const {currentMode, getColor} = useThemes()
        const {persona}=getPerson()
        const direccion = window.location
        const dactual = `${direccion.origin}/portfolio/${persona.value.numeroDocumento}/home`
 
        console.log(dactual)
        

        return{
        currentMode,
        getColor,
        persona,

        
        }
    }
}
</script>

<style scoped lang="scss">

h1{
  text-align: center;
  margin-bottom: 35px;
  font-size: 50px;
}

.contenedor{
  display: flex;
  justify-content: space-between;

  .formulario{
    width: 60%;

    h3{
      margin-bottom: 25px;
    }

    .form{
      display: flex;
      flex-direction: column;
      .campo{
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;

        label{
          margin-right: 15px;
        }

        input{
          width: 83%;
          padding-left: 5px;
        }

        textarea{
          width: 83%;
          padding-left: 5px;
        }
      }
      .boton{
        justify-self: center;
        align-self: center;
        padding: 5px;
        border-radius: 5px;
        text-align: center;
        color: black;
      }

      .boton:hover{
        background-color: white;
        color: black;
        padding: 6px;
        
      }
    }
  }

  .datos{
    width: 35%;

    h3{
      margin-bottom: 25px;
    }
    .item{
      display: flex;
      margin-bottom: 20px;
      justify-content: space-between;

      .icono{
        align-self: center;

        
      }

      .detalle{
        width: 85%;
      }
    }

    .redes{
      margin-top: 40px;
    }
  }
}

@media (max-width: 800px) {
  h1{
    font-size: 35px;
  }
  .contenedor{
    flex-direction: column;

    .formulario{
      width: 95%;
    }

    .datos{
      margin-top: 40px;
      width: 90%;
      

      .item{
        justify-content: space-evenly;
        .detalle{
        width: 80%;
      }
      }


      
    }
  }

}

</style>