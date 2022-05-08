import Vue from 'vue'
import App from './App.vue'
import DateTimePicker, { DatePicker, TimePicker } from 'vue-drumroll-datetime-picker'
import 'vue-drumroll-datetime-picker/dist/style.css'
// import 'vant/lib/index.css'
// import { Grid, GridItem } from 'vant'
// Vue.use(Grid).use(GridItem)
Vue.component('DateTimePicker', DateTimePicker)
Vue.component('DatePicker', DatePicker)
Vue.component('TimePicker', TimePicker)
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
