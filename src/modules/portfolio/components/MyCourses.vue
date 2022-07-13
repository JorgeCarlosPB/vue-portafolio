<template>
    <div class="course">
        <h1  :style="{color:currentMode.color3}">Cursos y talleres</h1>

        <div class="courses">
            <div class="courseItem" v-for="course in persona.cursos" :style="{backgroundColor:currentMode.color2}">
                <h4 :style="{color:currentMode.color3}">{{course.nombre}}</h4>
                <h5 :style="{color:'#ff651c'}">{{course.institucion}}</h5>
                <p>Realizado en {{course.ubicacion}} en la fecha {{course.fecha}} con una duración de {{course.duracion}}</p>
            </div>
        </div>    
    </div>


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

<style scoped lang="scss">

.course{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    h1{
        text-align: center;
    }

    .courses{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        p{
            color: #888888;
        }

        .courseItem{
            padding: 15px;
            width: 48%;
            background-color: white;
            border-radius: 15px;
            border-left: 2px solid #ff651c;
            box-shadow: 0 0 10px black;
            margin-bottom: 30px;
        }
    }
}

@media (max-width: 650px) {
    .course{

        .courses{
            flex-direction: column;

            .courseItem{
                width: 100%;
            }
        }
    }

}

@media (min-width: 1700px) {
    .course{
        .courses{
            .courseItem{
                width: 32%;
            }
        }
    }

}





</style>