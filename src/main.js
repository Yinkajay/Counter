import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import UserButton from './components/UI/UserButton.vue'

const app = createApp(App)

app.component('user-button', UserButton)

app.mount('#app')
