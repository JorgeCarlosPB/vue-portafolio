<template>
  <div class="cuerpo">
    <!--Barra de navegación-->
    <NavBar />

    <!--Contenido de cada menú-->
    <div class="content">          
        
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

export default {
    components: { 
      NavBar: defineAsyncComponent(()=>import('../components/NavBar.vue')),
    }

}
</script>

<style>
.cuerpo{
    background-color: black;
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;  /*Con esto centramos todo verticalmente*/
    /* justify-content: center; Con esto centramos todo horizontalmente */
    flex-direction: row;
    justify-content: space-around;
}

.content{
    margin: auto;
    overflow: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    order: 1;
    border-radius: 30px;
    background-color:  orange ;
    width: 80%;
    height: 70%;
    /*padding: 3% 3% 3% 3%;*/
 
    align-items: center;
}

@media (max-width: 800px) {
    .cuerpo{
        flex-direction: column;
    }
    .content{
        flex-direction: column;
    }

    .navBar ul{
        flex-direction: row;
        border-radius: 20px 20px 0 0;
    }

    .navBar {
        align-self: center;
        margin-left: 0%;
        /* max-width: 15%;
        min-width: 10%; */
    }
}

</style>