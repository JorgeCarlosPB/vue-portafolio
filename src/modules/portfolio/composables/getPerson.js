import { computed, ref} from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';
import dataFuncionarios from '@/modules/portfolio/helpers/dataFuncionarios.json'

const getPerson = () => {
    const store = useStore()

    const route = useRoute()
    const ci = route.params.ci;

    
    const persona = ref()
    
    dataFuncionarios.forEach(element => {
        if(element.numeroDocumento == ci)
        persona.value = element
    });

    //console.log(persona.value)
    
    //const changeTheme = () =>{store.commit('portfolio/changeTheme')}
        return{
            persona,
            //Tipos de modos oscuro, claro
            // all: computed(()=>store.getters['portfolio/allMode']),
            // light: computed(()=>store.getters['portfolio/lightMode']),
            // dark: computed(()=>store.getters['portfolio/darkMode']),
            // currentMode: computed(()=>store.getters['portfolio/currentMode']),
            
            // changeTheme
            //Methods mutations
            //changeTheme:() =>store.commit('portfolio/changeTheme'),
        }
}
export default getPerson