<template lang="">
    <div>
        <li v-for="(item,index) in num" :key="index">
            <RoundCheckbox  v-model="roundBox" :checkBox="roundBox"/> 1
        </li>
        <RoundCheckbox v-model="allChecked" @change="changeAllCheck"/> 全選


    </div>
</template>
<script>
import RoundCheckbox from "@/components/RoundCheckbox.vue";
export default {
    name:'SelectedChkBox',
    components:{
        RoundCheckbox
    },
    data(){
        return{
            allChecked:false,//全選
            roundBox:false,//單個 choice
            num:5
        }
    },
    methods: {
        changeAllCheck(){
            console.log(3);
            if(this.allChecked){
                this.roundBox=false;
            }else{
                this.roundBox=true;
                this.allChecked=true;
            }
        }
    },
    
}
</script>
<style lang="">
    
</style>