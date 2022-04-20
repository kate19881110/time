<template lang="">
    <div>
        <button @click="doShowAlert(message)">doShowAlert</button>
        <button @click="stopShowAlert()">stopShowAlert</button>
        <button @click="onceShowAlert()">onceShowAlert</button>
    </div>
</template>
<script>
export default {
    name:"goodJob",
    data(){
        return{
            message:"我寫在goodJob.vue訊息",
        }
    },
    methods:{
        doShowAlert(msg){
            this.$bus.$emit("alert:message",msg)
        },
        stopShowAlert(){
            this.$bus.$emit("stopAlertBus")
        },
        onceShowAlert(){
            this.$bus.$emit("onceBus")
        }
    }
    
}
</script>
<style lang="">
    
</style>