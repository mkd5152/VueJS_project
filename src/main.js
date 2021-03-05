import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Assigned from './components/Assigned.vue'
import Pending from './components/Pending.vue'
import VueFilterDateFormat from 'vue-filter-date-format';

Vue.use(VueRouter);

const routes = [
  {
    path: '/assigned', compoment: Assigned
  },
  {
    path: '/pending', compoment: Pending
  }
];

const router = new VueRouter({routes: routes})

Vue.config.productionTip = false

Vue.use(VueFilterDateFormat, {
  dayOfWeekNames: [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday'
  ],
  dayOfWeekNamesShort: [
    'Su', 'Mo', 'Tu', 'We', 'Tr', 'Fr', 'Sa'
  ],
  monthNames: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ],
  monthNamesShort: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
