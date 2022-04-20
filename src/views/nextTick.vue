<template>
    <div>
        <p ref="text">{{text}}</p>
        <input type="button" @click="send" :value="btnName">
    </div>
</template>
<script>
export default {
    name:'nextTick',
    data(){
        return{
            text: "送出前",
            btnName: "送出"
        }
    },
    methods: {
        send(){
            this.text="送出後";
            this.$nextTick(function(){
                console.log('nextTick:'+this.$refs.text.innerHTML);
            });
            console.log('function run end:'+this.$refs.text.innerHTML);
        }
    },

}
</script>
<style lang="">
    
</style>