
import { computed, ref} from 'vue'
import { useStore } from 'vuex'

const useThemes = () => {
    const store = useStore()
    const changeTheme = () =>{store.commit('portfolio/changeTheme')}
    const changeL = ()=>{store.commit('portfolio/changeL')}
    const changeD = ()=>{store.commit('portfolio/changeD')} 

        return{
            //Tipos de modos oscuro, claro
            all: computed(()=>store.getters['portfolio/allMode']),
            light: computed(()=>store.getters['portfolio/lightMode']),
            dark: computed(()=>store.getters['portfolio/darkMode']),
            currentMode: computed(()=>store.getters['portfolio/currentMode']),
            getColor: computed(()=>store.getters['portfolio/getColor']),
            
            
            //Methods mutations
            changeTheme,
            changeD,
            changeL,
            setColor: (col)=>store.commit('portfolio/putColor', col),

        }
}
export default useThemes