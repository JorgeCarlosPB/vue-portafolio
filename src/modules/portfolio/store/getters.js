export const allMode=(state, getters, rootState)=>{
    return state.modos    
}

export const lightMode=(state, getters, rootState)=>{
    return state.modos[1]
    //return state.colores.filter(color => color.mode == 'light')   
    //return state.colores.filter(colores => colores.activo)
}

export const darkMode= (state, getters, rootState)=>{
    return state.modos[0]      
}


export const currentMode = (state, getters, rootState)=>{ 
    //return state.colores.filter(colores => colores.active)
    // for (const element of state.colores) {
    //     if(element.active)
    //         return element   
    // }
    let mode = localStorage.getItem("mode");
    if(mode=='dark'){
        return state.modos[0]
    }

    else{
        return state.modos[1]
    }
}

export const getColor = (state, getters, rootState)=>{ 

    let color = localStorage.getItem("color");
    //console.log(state.colores)
    if(color=='orange'){
        return state.colores[0].color
    }

    else if(color=='violet'){
        return state.colores[1].color
    }

    else if(color=='red'){
        return state.colores[2].color
    }

    else if(color == 'blue'){
        return state.colores[3].color
    }

    else if(color == 'yellow'){
        return state.colores[4].color
    }

    else if(color == 'pink'){
        return state.colores[5].color 
    }

    else if(color == 'green'){
        return state.colores[6].color
    }

    else if(color == 'darkGreen'){
        return state.colores[7].color
    }

    else if(color == 'ligthBlue'){
        return state.colores[8].color
    }

    else{
        return state.colores[0]
    }
}
