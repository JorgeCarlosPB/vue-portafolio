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
}

.navBar{
    margin-left: auto;  
    order: 2;
    /* max-width: 15%;
    min-width: 10%; */
}

.navBar ul {
    display: flex;
    flex-direction: column;
    border-radius: 20px 0 0 20px;
    list-style-type: none;
    overflow: hidden;
}

.navBar li{
    background-color: orange;
}

.navBar li  a{
    display: block;
    color: white;
    text-align: center;
    text-decoration: none;
    padding: 25px 0px 25px 0px;
}

.navBar li a span{
    visibility: hidden;
    font-size: 25px;
}

.navBar li a:hover span{
    visibility: visible;
}

.navBar li:hover{
    background-color: black;
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