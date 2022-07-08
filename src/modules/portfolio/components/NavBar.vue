<template>
    <div class="navBar">
        <div class="menu">
            <router-link :to="{name: 'phome'}"><span>Inicio</span> <br>
                <font-awesome-icon icon="fa-solid fa-house-user" size="2x" :style="{color: currentMode.color3}"/>
            </router-link>

            <router-link :to="{name: 'pabout'}"><span>Acerca</span> <br>
                <font-awesome-icon icon="fa-solid fa-user" size="2x" :style="{color: currentMode.color3}"/>
            </router-link> 

            <router-link :to="{name: 'pprojects'}"><span>Portafolio</span> <br>
                <font-awesome-icon icon="fa-solid fa-briefcase" size="2x" :style="{color: currentMode.color3}"/>
            </router-link>

            <router-link :to="{name: 'pcontact'}"><span>Contacto</span> <br>
                <font-awesome-icon icon="fa-solid fa-phone" size="2x" :style="{color: currentMode.color3}"/>
            </router-link>
        </div>
        <!-- <ul>
            <li :style="{backgroundColor: currentMode.color2}">
              <router-link :to="{name: 'phome'}"><span>Inicio</span> <br>
                <font-awesome-icon icon="fa-solid fa-house-user" size="2x" :style="{color: currentMode.color3}"/></router-link>   
            </li>

            <li>
              <router-link :to="{name: 'pabout'}"><span>Acerca</span> <br>
                <font-awesome-icon icon="fa-solid fa-user" size="2x" :style="{color: currentMode.color3}"/></router-link>
            </li>

            <li>
              <router-link :to="{name: 'pprojects'}"><span>Portafolio</span> <br>
                <font-awesome-icon icon="fa-solid fa-briefcase" size="2x" :style="{color: currentMode.color3}"/></router-link>
            </li>

            <li>
              <router-link :to="{name: 'pcontact'}"><span>Contacto</span> <br>
                <font-awesome-icon icon="fa-solid fa-phone" size="2x" :style="{color: currentMode.color3}"/></router-link>
            </li>
        </ul> -->
    </div>
  
</template>

<script>
import styles from "@/modules/portfolio/layouts/PortfolioLayout.vue"
import useThemes from '../composables/useThemes';


export default {
    setup(){
        const {currentMode} = useThemes()

        console.log(currentMode.value)
        // console.log(styles.value)

        return{
            currentMode,
        }
    }
}
</script>

<style lang="scss">
.navBar{
    
    order: 2;
    width:100px;
    min-width:100px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    

    .menu {
        margin: 0px;
        display: flex;
        flex-direction: column;
        border-radius: 20px 0 0 20px;
        list-style-type: none;
        list-style: none;
        
        overflow: hidden;

        a{
            display: block;
            color: white;
            text-align: center;
            text-decoration: none;
            padding: 25px 0px 25px 0px;
            span{
                visibility: hidden;
                font-size: 20px;
            }
        }

        a:hover span{
            visibility: visible;
        }

        }
        a:hover{
            color: #ff651c;
        }

        a.router-link-active {
  
            color: #ff651c;

                span{
                    visibility: visible;
                }
        }


}

@media (max-width: 800px) {

    .navBar ul{
        flex-direction: row;
        align-self: center;
        border-radius: 20px 20px 20px 20px;
    }

    .navBar {
        align-self: center;
        
        /* max-width: 15%;
        min-width: 10%; */
    }
}
</style>