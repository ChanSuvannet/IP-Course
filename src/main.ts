import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import router from './router';
import './Style.css';

const app = createApp(App)
const pinia = createPinia();
app.use(pinia);
app.use(router)

app.mount('#app')
