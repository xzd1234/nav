import { createApp } from 'vue'
import { setupProdMockServer } from '../mock';
import App from './App.vue'
import 'normalize.css';
setupProdMockServer();
createApp(App).mount('#app')
