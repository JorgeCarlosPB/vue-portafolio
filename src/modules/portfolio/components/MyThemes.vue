<template>
    <div class="temas">
    <button 
        v-if="mode=='dark'"
      @click="changeToLight" >
      <font-awesome-icon icon="fa-solid fa-sun" size="2x" />
    </button> 

    <button 
        v-else
      @click="changeToDark">
      <font-awesome-icon icon="fa-solid fa-moon" size="2x" />
    </button>

    <div class="colores">
        <button 
            @click="desplegar">
            <font-awesome-icon icon="fa-solid fa-palette" size="2x" />
        </button>
        <ul v-if="despliegue" class="menuColors" >
            <button 
                @click="setColor('orange')">
                <font-awesome-icon icon="fa-solid fa-droplet"  :style="{color: '#ff651c' }"  size="2x"/> 
            </button>

            <button 
                @click="setColor('violet')">
                <font-awesome-icon icon="fa-solid fa-droplet"  :style="{color: '#8315e7' }"  size="2x"/> 
            </button>

            <button 
                @click="setColor('red')">
                <font-awesome-icon icon="fa-solid fa-droplet"  :style="{color: '#ff0000' }"  size="2x"/> 
            </button>

            <button 
                @click="setColor('blue')">
                <font-awesome-icon icon="fa-solid fa-droplet"  :style="{color: '#2753d6' }"  size="2x"/> 
            </button>

            <button 
                @click="setColor('yellow')">
                <font-awesome-icon icon="fa-solid fa-droplet" :style="{color: '#fff000' }"  size="2x"/>
            </button>

            <button 
                @click="setColor('pink')">
                <font-awesome-icon icon="fa-solid fa-droplet" :style="{color: '#ff00f0' }"  size="2x"/>
            </button>

            <button 
                @click="setColor('green')">
                <font-awesome-icon icon="fa-solid fa-droplet" :style="{color: '#00ff00' }"  size="2x"/>
            </button>
            
            <button 
                @click="setColor('darkGreen')">
                <font-awesome-icon icon="fa-solid fa-droplet" :style="{color: '#006600' }"  size="2x"/> 
            </button>

            <button
                @click="setColor('ligthBlue')">
                <font-awesome-icon icon="fa-solid fa-droplet" :style="{color: '#00FFFF' }"  size="2x"/> 
            </button>
            
        </ul>
    </div>

  </div>
  
</template>

<script>
import { ref } from 'vue';
import useThemes from '../composables/useThemes';
import { useRouter } from 'vue-router'
export default {

     setup(){
        const router = useRouter()     
        const {currentMode, getColor, changeD, changeL, setColor} = useThemes()
        let mode = localStorage.getItem("mode");
        let despliegue = ref(false) 

        //console.log(getColor.value)
        //console.log(currentMode.value)
             
        return{
            currentMode,
            getColor,
            mode,      
            changeToLight:()=>{
                changeL()
                location.reload()
            },
            changeToDark:()=>{
                changeD()
                location.reload()
            },

            desplegar:()=>{
                despliegue.value = !despliegue.value
            },
            despliegue,
            setColor, 

        }
    }

}
</script>

<style scoped  lang="scss">

.temas{
  position: fixed;
  margin-top: 3%;
  z-index: 3;
}

.colores{
    margin-top: 10px;
}

</style>