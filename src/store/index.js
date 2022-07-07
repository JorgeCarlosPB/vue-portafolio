import { createStore } from 'vuex'

import portfolio from '@/modules/portfolio/store/index.js'

const store = createStore({
    modules:{
        portfolio: portfolio
        
    }

})

export default store