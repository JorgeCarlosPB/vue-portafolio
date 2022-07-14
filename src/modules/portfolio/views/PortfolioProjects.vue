<template>
  <MySkills/>

  <MyPostgrades/>

  <MyCourses/>

</template>

<script>
import { defineAsyncComponent } from 'vue';
import getPerson from '../composables/getPerson';
import useThemes from '../composables/useThemes';
export default {
  components: { 
      SocialNet: defineAsyncComponent(()=>import('../components/SocialNet.vue')),
      MyResume: defineAsyncComponent(()=>import('../components/MyFormation.vue')),
      MySkills: defineAsyncComponent(()=>import('../components/MySkills.vue')),
      MyCourses: defineAsyncComponent(()=>import('../components/MyCourses.vue')),
      MyPostgrades: defineAsyncComponent(()=>import('../components/MyPostgrades.vue'))
  },

  setup(){
    const {currentMode} = useThemes()
    const {persona}=getPerson()
   

    //console.log(typeof(persona.value.habilidades[0].porcentaje))

    return{
      currentMode,
      persona
      
    }
  }
}
</script>



<style>

</style>