<template>
  
  <h1 :style="{color:currentMode.color3}" class="titulo">Mi <span :style="{color:getColor}" >formación</span></h1>

  <MyFormation/>

  <MyPostgrades/>

  <MyExperience/>

  <MyCourses/>

  <MySkills/>

</template>

<script>
import { defineAsyncComponent } from 'vue';
import getPerson from '../composables/getPerson';
import useThemes from '../composables/useThemes';

export default {
  components: { 
      SocialNet: defineAsyncComponent(()=>import('../components/SocialNet.vue')),
      MyFormation: defineAsyncComponent(()=>import('../components/MyFormation.vue')),
      MySkills: defineAsyncComponent(()=>import('../components/MySkills.vue')),
      MyCourses: defineAsyncComponent(()=>import('../components/MyCourses.vue')),
      MyPostgrades: defineAsyncComponent(()=>import('../components/MyPostgrades.vue')),
      MyExperience: defineAsyncComponent(()=>import('../components/MyExperience.vue'))
  },

  setup(){
    const {currentMode, getColor} = useThemes()
    const {persona}=getPerson()
   

    //console.log(typeof(persona.value.habilidades[0].porcentaje))

    return{
      currentMode,
      getColor,
      persona
      
    }
  }
}
</script>



<style scoped lang="scss">

.titulo{
  text-align: center;
  font-size: 50px;
  margin-bottom: 30px;
}


</style>