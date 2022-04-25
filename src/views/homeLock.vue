<template lang="">
    <!--首次登陆设置手势密码-->
    <div class="createGesture">
        <div class="picture">
            <img :src='logoImg' alt="">
        </div>
        <div class="words">
            <p v-if="!isShowConfirm">{{$t('createGesture.createGesture')}}</p>
            <p v-if="!isShowConfirm">{{$t('createGesture.drawTips')}}.</p>
            <p v-if="isShowConfirm">{{$t('createGesture.confirmGesture')}}</p>
            <p v-if="isShowConfirm">{{$t('createGesture.drawTips2')}}.</p>
        </div>
        <!--下面这是模拟登录时传密码过去-->
        <!-- <gestureUnlock @firstDown="onceDraw" @onDrawDone='fromNinePoint' :fatherPassword="[1,2,3,4,5]"></gestureUnlock> -->
        <!--此页面是创建密码，需要输入两次，组件不传值，fatherPassword默认是一个空数组-->
        <gestureUnlock @firstDown="onceDraw" @onDrawDone='fromNinePoint'></gestureUnlock>
        <!-- @firstDown="onceDraw"是第一次输入密码的事件  @onDrawDone='fromNinePoint'第二次完成密码的事件 -->
        <div class="bottom">
            <p>{{$t('createGesture.bottomTips')}}.</p>
            <div>
                <a class="btn_text" @click="skip"> {{$t('createGesture.skip')}} </a>
            </div>
        </div>
    </div>
</template>

<script>
import gestureUnlock from '@/views/gestureUnlock.vue'

export default {
    name: "createGesture",
    components:{
        gestureUnlock
    },
    data() {
        return {
          logoImg: require('./logo.png'),
          firstPwd: '', // 用来存创建密码时第一次输入的密码，便于和第二次比较
          regOrLogin: 'reg', // 传给子组件用于判断是注册还是登陆
          isShowConfirm: false, // 是否显示confirm密码
        }
    },
    methods: {
        onceDraw (e) {
            if (e.success) {
                console.log('第一次')
                this.isShowConfirm = true
            }
       },
       fromNinePoint (e) {
            if(e.success) {
                console.log('父组件：', e.pwd, '手势密码设置完成，登录')
                this.send(e.pwd.join(''))
            }
       },
       send (gesPwd) {
            console.log('手势密码：', gesPwd)
            this.$axios.post('http://*****/*****/****/gesturePasswordSetup', {
            username: '123',
            gesturePassword: gesPwd, // 手势密码
            })
            .then((res) => {
            console.log('返回的数据：', res)
            let flag = res.data.flagStr
            if (flag === 'Succ') {
                console.log('设置成功')
            }
            })
            .catch((res) => {
            console.log('报错：', res)
            })
       },
       // 跳过
       skip () {
         this.$router.push({name: '/'})
       }
     }
   
}
</script>
<style lang="sass" scoped>
.createGesture
    height: 100%
.picture
    padding-top: 0.533rem
    text-align: center
    img
        height: 3rem
.words
    text-align: center
    color: #498bcb
    p:nth-child(1)
        margin: 0.267rem 0
        font-size: 0.723rem
    p:nth-child(2)
        font-size: 0.373rem
.bottom
    z-index: 2000
    margin-top: .3rem /* 30/37.5 */
    width: 100%
    p 
        padding: 0 0.5rem
        font-size: inherit
    div
        margin: 0.353rem 0 0.337rem
</style>