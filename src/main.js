import { createApp } from 'vue'
import App from './App.vue'
// import AdminApp from './AdminApp.vue'
import router from './router'
import store from './store'
import uiComponents from './ui-components'

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import bootstrap from  'bootstrap/dist/js/bootstrap.bundle'
const app = createApp(App)
// const app = createApp(AdminApp)


uiComponents.map(component => app.component(component.name, component))
app.use(bootstrap)
app.use(router)
app.use(store)
app.mount('#app')
