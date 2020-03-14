import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons'
import {
  faTelegramPlane, faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { VueMasonryPlugin } from 'vue-masonry'

library.add(
  faArrowLeft,
  faTelegramPlane, faTwitter
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueMasonryPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
