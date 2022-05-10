<template>
<div class="round">
    <input type="checkbox" class="checkbox-round" checked="checkBox" v-model="chkBoxValue" @click="$emit('change')">
</div>
</template>
<script>
export default {
    name: "roundChkBox",
    props:{
        checkBox:{
            default:false,
            type:Boolean
        }
    },
    data() {
        return {
            chkBoxValue: false,
        };
    },
    watch: {
        chkBoxValue(newValue) {
            if (newValue) {
                console.log("newValue:" + newValue);
                this.$emit("input", newValue);
            }
        },
        checkBox(value){
            console.log(1);
            if(value){
                this.chkBoxValue=true;
            }else{
                this.chkBoxValue=false;
            }
        }
    },
};
</script>
<style lang="sass">
@import @/styles/variables.sass
@import @/styles/common.sass
.round
    @extend .flex__row
    @extend .flex__column--center
    .checkbox-round
        width: 14px
        height: 14px
        background-color: $light-text-color
        border-radius: 50%
        vertical-align: middle
        appearance: none
        outline: none
        cursor: pointer
        margin-right: 12px
        border: 1px solid $yellow-1600

    .checkbox-round:checked
        background-color: $light-text-color
        vertical-align: middle
        position: relative

    .checkbox-round:checked::before
        content: ''
        text-align: center
        background-color: $yellow-1900
        display: inline-block
        vertical-align: middle
        width: 6px
        height: 6px
        top: 50%
        left: 50%
        position: absolute
        transform: translate(-50%, -50%)
        border-radius: 50%
</style>
