
export const allMode=(state, getters, rootState)=>{
    return state.colores    
}

export const lightMode=(state, getters, rootState)=>{
    return state.colores[1]
    //return state.colores.filter(color => color.mode == 'light')   
    //return state.colores.filter(colores => colores.activo)
}

export const darkMode= (state, getters, rootState)=>{
    return state.colores[0]      
}


export const currentMode = (state, getters, rootState)=>{ 
    //return state.colores.filter(colores => colores.active)
    for (const element of state.colores) {
        if(element.active)
            return element   
    }
}