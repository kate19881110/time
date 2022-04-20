<template>
  <div></div>
</template>
<script>
export default {
  name: "alertWord",
  created() {
    this.$bus.$on("alert:message", (msg) => {
      this.showAlert(msg);
    });
    this.$bus.$on("stopAlertBus", () => {
      this.stopAlertBus();
    });
    //只監聽一次
    this.$bus.$on("onceBus", () => {
      console.log("I only execute once");
    });
  },
  methods: {
    showAlert(msg) {
      alert(msg);
    },
    stopAlertBus() {
      //停只監聽
      this.$bus.$off("alert:message");
    },
  },
  beforeDestroy: function () {
    this.$bus.$off("alert:message");
  },
};
</script>
<style lang=""></style>
