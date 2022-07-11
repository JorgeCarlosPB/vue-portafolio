<template>
  <MySkills/>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import getPerson from '../composables/getPerson';
import useThemes from '../composables/useThemes';
export default {
  components: { 
      SocialNet: defineAsyncComponent(()=>import('../components/SocialNet.vue')),
      MyResume: defineAsyncComponent(()=>import('../components/MyResume.vue')),
      MySkills: defineAsyncComponent(()=>import('../components/MySkills.vue')),
  },

  setup(){
    const {currentMode} = useThemes()
    const {persona}=getPerson()
   

    console.log(typeof(persona.value.habilidades[0].porcentaje))

    return{
      currentMode,
      persona
      
    }
  }
}
</script>



<style>

</style>