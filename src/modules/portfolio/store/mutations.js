import {ref} from 'vue';

let mode = ref('')
let color = ref('')
export const changeTheme = (state, id)=>{
    // const temaIdx = state.colores.findIndex(color => color.id === id)
    //   state.colores[temaIdx].active = !state.colores[temaIdx].active

    // for (const tema of state.colores) {
    //     //state.colores[tema].active = !state.colores[tema].active
    //     console.log(tema.mode)
    // }
    // console.log((state.colores).length)
    // for(let i=0; i< (state.colores).length; i++ ){
        
    // }
    state.modos[0].active = !state.modos[0].active
    state.modos[1].active = !state.modos[1].active
  }

export const changeL = (state) =>{
  let mode = 'ligth'
  localStorage.setItem("mode", mode)
}

export const changeD = (state) =>{
  let mode = 'dark'
  localStorage.setItem("mode", mode)
}


export const putColor = (state, col) =>{
  let color  = col
  localStorage.setItem("color", color)
  location.reload()
}
