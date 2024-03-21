// Importing main CSS file
import './assets/main.css'

// Importing necessary modules
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Importing Bootstrap's JavaScript and VueSweetalert2 CSS
import 'bootstrap';
import 'sweetalert2/dist/sweetalert2.min.css';

// Importing VueSweetalert2 plugin
import VueSweetalert2 from 'vue-sweetalert2';

// Add global options like button colors
const options = {
    confirmButtonColor: 'rgb(54, 201, 95)',
    cancelButtonColor: '#ff7674',
};
import VueApexCharts from "vue3-apexcharts";

// Creating Vue app instance
const app = createApp(App)


// Adding plugins to the Vue app instance
app.use(router); // Vue Router
app.use(createPinia); // Pinia for state management
app.use(VueSweetalert2, options); // VueSweetalert2 for sweet alerts
// The app.use(VueApexCharts) will make <apexchart> component available everywhere.
app.use(VueApexCharts);
// Mounting the Vue app to the specified element
app.mount('#app')
