<template>
    <div class="navBar">
        <div class="menu">
            
            <router-link :to="{name: 'phome'}"><span>Inicio</span> <br>
                <font-awesome-icon icon="fa-solid fa-house-user" size="2x" :style="{color: currentMode.color3}"/>
            </router-link>

            <router-link :to="{name: 'pabout'}"><span>Acerca</span> <br>
                <font-awesome-icon icon="fa-solid fa-user" size="2x" :style="{color: currentMode.color3}"/>
            </router-link> 

            <router-link :to="{name: 'pprojects'}"><span class="folio">Portafolio</span> <br>
                <font-awesome-icon icon="fa-solid fa-briefcase" size="2x" :style="{color: currentMode.color3}"/>
            </router-link>

            <router-link :to="{name: 'pcontact'}"><span>Contacto</span> <br>
                <font-awesome-icon icon="fa-solid fa-phone" size="2x" :style="{color: currentMode.color3}"/>
            </router-link>
        </div>
    </div>
  
</template>

<script>
import styles from "@/modules/portfolio/layouts/PortfolioLayout.vue"
import useThemes from '../composables/useThemes';


export default {
    setup(){
        const {currentMode} = useThemes()


        return{
            currentMode,
        }
    }
}
</script>

<style scoped lang="scss">
.navBar{
    
    order: 2;
    z-index: 2;
    
    display: flex;
    //justify-content: center;
    align-items: center;
    border-radius: 10px 0 0 10px;
    

    .menu {
        margin: 0px;
        display: flex;
        flex-direction: column;
        border-radius: 20px 0 0 20px;
        list-style-type: none;
        list-style: none;
        
        // overflow: hidden;

        a{
            //display: block;
            text-align: center;
            text-decoration: none;
            padding: 25px 0px 25px 0px;
            span{
                visibility: hidden;
                font-size: 19px;
            }
        }

        a:hover span{
            visibility: visible;
            
        }

        }
        a:hover{
            color: #ff651c;
            .folio{
                    font-size: 18px;
            }
        }

        a.router-link-active {
  
            color: #ff651c;

                span{
                    visibility: visible;
                }

                .folio{
                    font-size: 18px;
                }
        }


}

@media (max-width: 800px) {

    .navBar {
        align-self: center;
        
        width: 100%;
        border-radius: 15px 15px 0 0;
        justify-content: center;
    }

    .navBar .menu{
        width: 100%;
        flex-direction: row;
        justify-content: space-evenly;

        a{
            padding: 2px;
        }
        
    }

    
}
</style>