<template>
  <div id="app">
    <TimePicker/>
  </div>
</template>

<script>
import TimePicker from "@/views/TimePicker.vue";
export default {
  name: 'App',
  components: {
    TimePicker
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
