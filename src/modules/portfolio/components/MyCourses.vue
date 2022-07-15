<template>
    <div class="course">
        <h2  :style="{color:currentMode.color3}">Cursos y talleres</h2>

        <div class="courses">
            <div class="courseItem" v-for="course in persona.cursos" :style="{backgroundColor:currentMode.color2, borderLeft:'2px solid'+getColor}">
                <h4 :style="{color:currentMode.color3}">{{course.nombre}}</h4>
                <h5 :style="{color:getColor}">{{course.institucion}}</h5>
                <p>Realizado en {{course.ubicacion}}, el {{course.fecha}} con una duración de {{course.duracion}}</p>
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
        MyResume: defineAsyncComponent(()=>import('./MyFormation.vue')),
        MySkills: defineAsyncComponent(()=>import('../components/MySkills.vue')),
     },

    setup(){
        const {currentMode, getColor} = useThemes()
        const {persona}=getPerson()


        return{
        currentMode,
        getColor,
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
    h2{
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
            padding: 25px;
            padding-bottom: 2px;
            width: 32%;
            background-color: white;
            border-radius: 80px;
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