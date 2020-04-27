import Vue from 'vue'
import App from './App.vue'
import router from './router';
import Vuikit from 'vuikit'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(faEllipsisV);
library.add(faPaperPlane);
library.add(faSearch);
library.add(faCommentDots);
library.add(faUsers);

Vue.use(Vuikit);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');