<template>
    <div class="navBar">
        <ul>
            <li>
              <router-link :to="{name: 'phome'}"><span>Inicio</span> <br>
                <font-awesome-icon icon="fa-solid fa-house-user" size="2x"/></router-link>   
            </li>

            <li>
              <router-link :to="{name: 'pabout'}"><span>Acerca</span> <br>
                <font-awesome-icon icon="fa-solid fa-user" size="2x"/></router-link>
            </li>

            <li>
              <router-link :to="{name: 'pprojects'}"><span>Portafolio</span> <br>
                <font-awesome-icon icon="fa-solid fa-briefcase" size="2x"/></router-link>
            </li>

            <li>
              <router-link :to="{name: 'pcontact'}"><span>Contacto</span> <br>
                <font-awesome-icon icon="fa-solid fa-phone" size="2x"/></router-link>
            </li>
        </ul>
    </div>
  
</template>

<script>
import styles from "@/modules/portfolio/layouts/PortfolioLayout.vue"

export default {
    setup(){
        // console.log('estilos')
        // console.log(styles.value)
    }
}
</script>

<style lang="scss">
.navBar{
    justify-self: end;  
    order: 2;
    /* max-width: 15%;
    min-width: 10%; */

    ul {
        display: flex;
        flex-direction: column;
        border-radius: 20px 0 0 20px;
        list-style-type: none;
        overflow: hidden;

        li{
            background-color: #212121;

            a:hover span{
                visibility: visible;
            }

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

        }
        a:hover{
            color: #ff651c;
        }

    }
}

.navBar a.router-link-active {
  
  color: #ff651c;

    span{
        visibility: visible;
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