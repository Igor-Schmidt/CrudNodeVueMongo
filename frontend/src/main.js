import { createApp } from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';
import router from './router';

import 'sweetalert2/dist/sweetalert2.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'nprogress/nprogress.css';

// createApp(App).use(router, Swal).mount('#app');

// -------------------------------------------------
const app = createApp(App);

app.use(router);

app.use(VueSweetalert2);

app.mount('#app');
