import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronCircleUp, faChevronCircleDown, faTrashAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faChevronCircleUp);
library.add(faChevronCircleDown);
library.add(faTrashAlt);
library.add(faTimesCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon);

import './scss/reset.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
