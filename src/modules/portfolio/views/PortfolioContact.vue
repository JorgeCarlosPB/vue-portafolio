<template>
  <h1>Mi contacto</h1>
  <div class="contenedor">
    <div class="formulario">
      <h3>Contáctame</h3>
      <form action="">
        <label for="">Name</label>
        <input type="text">

        <label for="">Email</label>
        <input type="text">     <br>

        <label for="">Tema</label>
        <input type="text"> <br>


        <label for="">Mensaje</label>
        <input type="text"> <br>

        <button :style="{backgroundColor:getColor} ">Enviar mensaje</button>
      </form>

    </div>

    <div class="datos">
      <h3>Información de contacto</h3>

      <div class="item">
        <div><font-awesome-icon icon="fa-solid fa-user"  size="2x"/></div>
        <div>
          <h5>Nombre</h5>
          <h6>{{persona.nombre}} {{persona.primerApellido}} {{persona.segundoApellido}}</h6>
        </div>
      </div>

      <div class="item">
        <div><font-awesome-icon icon="fa-solid fa-location-dot" size="2x" /></div>
        <div>
          <h5>Dirección domicilio</h5>
          <h6>{{persona.domicilio}}</h6>
        </div>
      </div>

      <div class="item">
        <div><font-awesome-icon icon="fa-solid fa-phone" size="2x"/></div>
        <div>
          <h5>Llámame</h5>
          <h6>{{persona.celular}}</h6>
        </div>

      </div>

      <div class="item">
        <div><font-awesome-icon icon="fa-solid fa-envelope" size="2x"/></div>
        <div>
          <h5>Envíame un correo</h5>
          <h6><a href="{{persona.correo}}">{{persona.correo}}</a></h6>
        </div>

      </div>

      <SocialNet/>

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
    

        return{
        currentMode,
        getColor,
        persona
        
        }
    }
}
</script>

<style scoped lang="scss">

.contenedor{
  display: flex;

  .formulario{

  }

  .datos{
    .item{
      display: flex;
      margin-bottom: 5px;
    }
  }

}

</style>