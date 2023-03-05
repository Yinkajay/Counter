import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import UserButton from './components/UI/UserButton.vue'
import PageFooter from './components/PageFooter.vue'

const app = createApp(App)

app.component('user-button', UserButton)
app.component('page-footer', PageFooter)



app.mount('#app')
