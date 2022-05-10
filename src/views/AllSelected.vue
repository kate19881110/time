<template lang="">
    <div>
        <p>全選</p>
        <input type="checkbox" id="checkbox" v-model="checked" @change="changeAllCheck">
        <label for="checkbox"></label>

        <p>多個複選框</p>
        <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
        <label for="runoob">Runoob</label>
        <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
        <label for="taobao">Taobao</label>
        <input type="checkbox" id="google" value="Google" v-model="checkedNames">
        <label for="google">Google</label>

        <br>
        <span>選擇的值為 {{checkedNames}}</span>
    </div>
</template>
<script>
export default {
    name: "allSelected",
    data(){
        return{
            checked:false,//全選
            checkedNames:[],//單個 choice
            checkedArr:["Runoob","Taobao","Google"]
        }

    },
    methods: {
        changeAllCheck(){
            if(this.checked){
                this.checkedNames=this.checkedArr
            }else{
                this.checkedNames=[]
            }
        }
    },
    watch:{
        "checkNames"(){
            if(this.checkedNames.length===this.checkedArr.length){
                this.checked=true
            }else{
                this.checked=false
            }
        }
    }

}
</script>
<style lang="">
    
</style>