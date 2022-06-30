import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store/index'
import './styles/styles.scss'

//Importación de iconos de fontawesome

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHomeUser } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faHomeUser, faUser, faBriefcase, faPhone );
//


const app = createApp(App)
// app.use(store)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
