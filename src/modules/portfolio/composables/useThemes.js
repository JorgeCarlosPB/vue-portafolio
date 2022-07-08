
import { computed, ref} from 'vue'
import { useStore } from 'vuex'

const useThemes = () => {
    const store = useStore()

    const changeTheme = () =>{store.commit('portfolio/changeTheme')}
        

        return{
            //Tipos de modos oscuro, claro
            all: computed(()=>store.getters['portfolio/allMode']),
            light: computed(()=>store.getters['portfolio/lightMode']),
            dark: computed(()=>store.getters['portfolio/darkMode']),
            currentMode: computed(()=>store.getters['portfolio/currentMode']),
            
            changeTheme
            //Methods mutations
            //changeTheme:() =>store.commit('portfolio/changeTheme'),
        }
}
export default useThemes