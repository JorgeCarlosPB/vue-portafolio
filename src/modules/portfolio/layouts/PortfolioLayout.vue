<template>

    <div class="temas">
    <button 
      v-if="currentMode.mode == 'dark'"
      @click="change">
      <font-awesome-icon icon="fa-solid fa-sun" size="2x" />
      aclarar
    </button> 

    <button 
      v-else
      @click="change">
      <font-awesome-icon icon="fa-solid fa-moon" size="2x" />
      oscurecer
    </button>

  </div>

  <div class="cuerpo" :style="{backgroundColor: currentMode.color1}">

    <div class="homecolor-box"></div>

    <!--Barra de navegación-->
    <NavBar :style="{backgroundColor: currentMode.color2}"/>

    <!--Contenido de cada menú-->
    <div class="content" :style="{backgroundColor: currentMode.color2}">       
         
        <router-view v-slot="{Component, route}">
          <keep-alive>
            <component :is="Component" :key="route.name"/>
          </keep-alive>
        </router-view>   
    </div>
  </div>
  
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { ref } from 'vue';
import useThemes from '../composables/useThemes';
import { useRouter, useRoute } from 'vue-router'


export default {
    components: { 
      NavBar: defineAsyncComponent(()=>import('../components/NavBar.vue')),
    },

    setup(){
      const router = useRouter()     
      const {all,currentMode, light,dark , changeTheme} = useThemes()
      const rojo = ref('red')
      //rootElement.style.setProperty(“--rojo”, color);



      return{
        
       
        currentMode,
        all,       
        change:()=>{
          changeTheme()
        }, 
        rojo        

      }
    }

}
</script>

<style lang="scss">

.temas{
  position: fixed;
  margin-top: 7%;
  z-index: 3;
}

.cuerpo{
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;  /*Con esto centramos todo verticalmente*/
    /* justify-content: center; Con esto centramos todo horizontalmente */
    flex-direction: row;
    //justify-content: space-around;
    
}

.homecolor-box{
  background-color: #ff651c;
  position: fixed;
  height: 138%;
  width: 136%;
  transform: rotate(-57deg);
  left: -91%;
  top: -48%;
  z-index: 1;
  box-shadow: 0 0 10px rgb(0 0 0 / 40%);
  outline: 0 !important;
}

.content{
    margin: auto;
    overflow: auto;
    width: 85%;
    height: 80%;
    order: 1;
    border-radius: 30px;
    z-index: 2;
    padding: 2% 2% 2% 2%;
}


@media (max-width: 800px) {
    .cuerpo{
        flex-direction: column;
    }
    .content{
        flex-direction: column;
    }
}

</style>