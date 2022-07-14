<template>
  <div v-if="persona.redes" class="redes"
  >
        <a v-if="persona.redes[0].facebook" 
          :href="persona.redes[0].facebook" target="_blank">
            <font-awesome-icon class="icon" icon="fa-brands fa-facebook" size="2x" inverse :style="{color: currentMode.color3}"/></a>
        <a v-if="persona.redes[0].instagram" 
          :href="persona.redes[0].instagram" target="_blank">
          <font-awesome-icon class="icon" icon="fa-brands fa-instagram-square" size="2x" inverse :style="{color: currentMode.color3}"/></a>
        <a v-if="persona.redes[0].linkedin" 
          :href="persona.redes[0].linkedin" target="_blank">
          <font-awesome-icon class="icon" icon="fa-brands fa-linkedin" size="2x" inverse :style="{color: currentMode.color3}"/></a>

        <a v-if="persona.redes[0].twitter" 
          :href="persona.redes[0].twitter" target="_blank">
          <font-awesome-icon class="icon" icon="fa-brands fa-twitter" size="2x" inverse :style="{color: currentMode.color3}"/></a>

        <a v-if="persona.redes[0].github" 
          :href="persona.redes[0].github" target="_blank">
          <font-awesome-icon class="icon" icon="fa-brands fa-github" size="2x" inverse :style="{color: currentMode.color3}"/></a>

</div>
</template>

<script>

import getPerson from '@/modules/portfolio/composables/getPerson';
import useThemes from '../composables/useThemes';


export default {
    setup(){
        const {currentMode, getColor} = useThemes()
        const {persona} = getPerson()

        return{
            persona,
            currentMode,
            getColor
        }
    }

}
</script>

<style scoped lang="scss">

.redes{
  display: flex;
  justify-content: center;
  align-content: center;

  a{
    margin: 0 15px 0 15px;

    .icon:hover {
      color: #ff651c;
      font-size: 35px;
      //border-radius: 50px;

    }
  }
    
}

@media (min-width: 1700px) {
  .redes{
    a{
      margin: 0 25px 0 25px;
      .icon{
        font-size: 60px;
      }

      .icon:hover {
        font-size: 55px;

      }
    }

  }
}

@media (max-width: 800px) {
  .redes{
    a{
      margin: 0 10px 0 10px;
      .icon{
        font-size: 27px;
      }
      .icon:hover {
        font-size: 28px;
      }
    }
  }
  
 }


@media (max-width: 991.98px) {
  
 
 }


@media (max-width: 1199.98px) {
  
}

@media (max-width: 1399.98px) { 
  
 }

</style>