<template>

  <MyThemes/>    

  <div class="cuerpo" :style="{backgroundColor: currentMode.color1}">
    <div class="homecolor-box" :style="{backgroundColor:getColor}"></div>

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
      MyThemes: defineAsyncComponent(()=>import('../components/MyThemes.vue')),
    },

    setup(){
      const router = useRouter()     
      const {all,currentMode,getColor, light,dark , changeTheme} = useThemes()
      const rojo = ref('red')
      //rootElement.style.setProperty(“--rojo”, color);



      return{
        
       
        currentMode,
        getColor,
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
  top: -50%;
  z-index: 1;
  box-shadow: 0 0 10px rgb(0 0 0 / 40%);
  outline: 0 !important;
}

.content{
    margin: auto;
    overflow: auto;
    width: 88%;
    height: 88%;
    order: 1;
    border-radius: 30px;
    z-index: 2;
    padding: 3% 3% 3% 3%;
}


@media (max-width: 800px) {

  .homecolor-box{
    left: -110%;
    top: -65%;
  }
    .cuerpo{
        flex-direction: column;

    }
    .content{
        flex-direction: column;
        width: 93%;
        //height: 85%;
    }
}

@media (max-width: 575.98px) { 
  .homecolor-box{
    height: 180%;
    width: 110%;
    left: -80%;
    top: -50%;
    transform: rotate(25deg);
  } 
}

// `md` applies to small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
  
 }

// `lg` applies to medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {
  
 
 }

// `xl` applies to large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {
  
}

// `xxl` applies to x-large devices (large desktops, less than 1400px)
@media (max-width: 1399.98px) { 
  
 }

</style>