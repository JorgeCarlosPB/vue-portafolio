<template>
  Este es el about de mi portfolio
  <!-- <p>{{currentMode}}</p> -->
</template>

<script>
import useThemes from '../composables/useThemes';

export default {
  
  setup(){
    const {currentTheme, all, light,dark , changeTheme} = useThemes()

    return{
      
    }
  }

}
</script>

<style>

</style>