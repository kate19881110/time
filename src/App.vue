<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <nextTick/>
    <goodJob/> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <alert/> -->
    <!-- <TimePicker/> -->
    <homeLock/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import nextTick from "@/views/nextTick.vue";
// import alert from "@/views/alertWord.vue";
// import goodJob from "@/views/goodJob.vue";
// import TimePicker from "@/views/TimePicker.vue";
import homeLock from "@/views/homeLock.vue"
export default {
  name: 'App',
  components: {
    // HelloWorld
    // nextTick,
    // goodJob,
    // alert
    // TimePicker
    homeLock
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
