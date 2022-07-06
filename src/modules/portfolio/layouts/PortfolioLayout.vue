<template>
  <div class="temas">
    <button 
      v-if= "!mode"
      @click="changeToLight">
      <font-awesome-icon icon="fa-solid fa-sun" size="2x" />
    </button> 

    <button 
      v-if="mode"
      @click="changeToDark"> 
      <font-awesome-icon icon="fa-solid fa-moon" size="2x" />
    </button>

  </div>

  <div class="cuerpo">

    <div class="homecolor-box"></div>

    <!--Barra de navegación-->
    <NavBar />

    <!--Contenido de cada menú-->
    <div class="content" :style="{backgroundColor: styles.contenido}">            
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

export default {
    components: { 
      NavBar: defineAsyncComponent(()=>import('../components/NavBar.vue')),
    },

    setup(){
      const mode=ref(true)
      const styles = ref ({cuerpo: '#eeeeee', contenido: 'white' })

      const changeToDark = ()=>{
        mode.value = false
        styles.value = {cuerpo: 'black', contenido: '#212121' }
      }

      const changeToLight = ()=>{
        mode.value = true
        styles.value = {cuerpo: '#eeeeee', contenido: 'white' }
      }

      return{
        mode,
        
        changeToLight,
        changeToDark,
        styles,


      }
    }

}
</script>

<style>

.temas{
  position: fixed;
  margin-top: 10%;
  z-index: 3;
}

.cuerpo{
    background-color: gray;
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;  /*Con esto centramos todo verticalmente*/
    /* justify-content: center; Con esto centramos todo horizontalmente */
    flex-direction: row;
    justify-content: space-around;
    
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
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    order: 1;
    border-radius: 30px;
    background-color:  #212121;
    width: 85%;
    height: 80%;
    z-index: 2;
    padding: 2% 2% 2% 2%;
 
    align-items: center;
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