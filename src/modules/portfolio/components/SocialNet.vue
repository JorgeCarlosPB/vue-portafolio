<template>
  <div class="redes"
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
        const {currentMode} = useThemes()
        const {persona} = getPerson()

        return{
            persona,
            currentMode
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
      background-color: #ff651c;
      //border-radius: 50px;

    }
  }
    
}

</style>