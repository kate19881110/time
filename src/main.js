import Vue from 'vue'
import App from './App.vue'
import DateTimePicker, { DatePicker, TimePicker } from 'vue-drumroll-datetime-picker'
import 'vue-drumroll-datetime-picker/dist/style.css'

Vue.component('DateTimePicker', DateTimePicker)
Vue.component('DatePicker', DatePicker)
Vue.component('TimePicker', TimePicker)
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
