<template>
    <div class="navBar">
        <div class="menu">
            
            <router-link :to="{name: 'phome'}"><span :style="{color:getColor}">Inicio</span> <br>
                <font-awesome-icon icon="fa-solid fa-house-user" size="2x" :style="{color: currentMode.color3}" class="icono"/>
            </router-link>

            <router-link :to="{name: 'pabout'}"><span :style="{color:getColor}">Acerca</span> <br>
                <font-awesome-icon icon="fa-solid fa-user" size="2x" :style="{color: currentMode.color3}" class="icono"/>
            </router-link> 

            <router-link :to="{name: 'pformation'}"><span class="folio" :style="{color:getColor}">Portafolio</span> <br>
                <font-awesome-icon icon="fa-solid fa-briefcase" size="2x" :style="{color: currentMode.color3}" class="icono"/>
            </router-link>

            <router-link :to="{name: 'pcontact'}"><span :style="{color:getColor}">Contacto</span> <br>
                <font-awesome-icon icon="fa-solid fa-phone" size="2x" :style="{color: currentMode.color3}" class="icono"/>
            </router-link>
        </div>
    </div>
  
</template>

<script>

import useThemes from '../composables/useThemes';


export default {
    setup(){
        const {currentMode, getColor} = useThemes()


        return{
            currentMode,
            getColor
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

        a{
            text-align: center;
            text-decoration: none;
            padding: 25px 0px 25px 0px;
            font-size: 20px;
            span{
                visibility: hidden;
                font-size: 22px;
            }
        }

        a:hover {
            color: #ff651c;

            span{
                visibility: visible;
            }

            .folio{
                    font-size: 20px;
            }

        }
        
        a.router-link-active {
            color: #ff651c;

                span{
                    visibility: visible;
                }

                .folio{
                    font-size: 20px;
                }
        }
    }

}

@media (max-width: 800px) {

    .navBar {
        align-self: center;
        width: 100%;
        border-radius: 15px 15px 0 0;
        justify-content: center;
        .menu{
        width: 100%;
        flex-direction: row;
        justify-content: space-evenly;
            a{
                padding: 1px;
                font-size: 13px;
                span{
                    font-size: 14px;
                }

                .router-link-active {
                    span{
                        visibility: visible;
                        font-size: 14;
                    }

                    .folio{
                        font-size: 14px;
                    }
                }
            }
            
            a:hover {
                span{
                    font-size: 14px;
                }

                .folio{
                    font-size: 14px;
                }

            }
        }
    }
}

@media (min-width: 1700px) {

    .navBar{

        .menu{
            padding: 15px;
            a{  
                .icono{
                font-size: 70px;
            }

            span{
                font-size: 30px;
            }
            .folio{
                font-size: 30px;
            }
            }
            a.router-link-active {          
                span{
                    font-size: 30px;
                }
                .folio{
                    font-size: 30px;
                }
            }

            a:hover {
                span{
                    font-size: 30px;
                }
                .folio{
                    font-size: 30px;
                }
            }
        }

    }
  
}

@media (max-width: 1199.98px) {
  
}

</style>