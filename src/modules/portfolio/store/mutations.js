
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
    state.colores[0].active = !state.colores[0].active
    state.colores[1].active = !state.colores[1].active
    
  }