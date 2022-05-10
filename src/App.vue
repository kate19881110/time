<template>
  <div id="app">
    <AllSelected/>
    <SelectedChkBox/>
  </div>
</template>

<script>
import AllSelected from "@/views/AllSelected.vue";
import SelectedChkBox from "@/views/SelectedChkBox.vue";
export default {
  name: 'App',
  components: {
    AllSelected,
    SelectedChkBox
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
