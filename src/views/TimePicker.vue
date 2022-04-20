<template>
    <div class="dropDown_modal">
        <div class="bg">
            <div class="date_row">
                <div class="word">
                    <p>起</p>
                    <p>---------------</p>
                    <p>止</p>
                </div>
                <div class="time">
                    <date-time-picker
                        v-model="startTime"
                        type="date"
                        :pattern="{
                            year: 'YYYY年',
                            month: 'M月',
                            date: 'D日',
                        }"
                        height="98px"
                    />
                    <hr />
                    <date-time-picker
                        v-model="endTime"
                        type="date"
                        :pattern="{
                            year: 'YYYY年',
                            month: 'M月',
                            date: 'D日',
                        }"
                        height="98px"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {DateTimePicker} from "vue-drumroll-datetime-picker";
import "vue-drumroll-datetime-picker/dist/style.css";
export default {
    components: {
        DateTimePicker,
    },
    data() {
        return {
            startTime: "",
            endTime: "",
            cancelBtn: true,
        };
    },
};
</script>
<style lang="sass" scoped>
@import @/styles/common.sass
.dropDown_modal
    top: 120px
    .bg
        padding: 20px 8px 16px
        @extend .flex__column
        .date_row
            @extend .flex__row
            .word
                background: linear-gradient(180deg, #FFEABA 0%, #FDFCF9 100%)
                border-radius: 32px
                width: 56px
                // height: 196px
                writing-mode: vertical-lr
                margin-right: 24px
                margin-left: 16px
                @extend .flex__row
                @extend .flex__row--center
                @extend .flex__column--center
                p
                    color: #AE8330
                    text-align: center
                p:nth-child(1)
                    padding-bottom: 10px
                p:nth-child(3)
                    padding-top: 10px
            .time
                width: 100%
                hr
                    background: grey
                    height: 1px
                    margin-right: 16px
                .v-drumroll-picker
                    font-size: 25px
                    font-weight: 600
                    --selected-color: black
                     /deep/.vue-scroll-picker-layer > /deep/.top
                        border-bottom: none !important
        .word_row
            text-align: left
            padding-left: 20px
            padding-top: 8px
            padding-bottom: 30px
        .btn_row
            @extend .flex__row
            padding: 0px 16px
            .blank
                width: 23px
</style>
