<template> 
    <div class="page-login">   
        <div class="lt-block page-login">
            <h1>请输入账号和密码,测试账号:test test</h1>
            <div class="login">
                <div class="input-row">
                    <input placeholder="请输入账号" v-model.trim="info.username" @input="setBtn()">
                </div>
                <div class="input-row">
                    <input type="password" placeholder="请输入密码" v-model.trim="info.password" @input="setBtn()">
                </div>
            </div>
            <div class="btn">
                <input type="submit" value="立即登录" :class="{'btn-disable' : isLogin != true}" id="submit-btn" @click="login()">
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            isLogin:false,
            info:{
                username:'test',
                password:'test'
            }
        }
    },
    created(){
        this.setBtn();
    },
    methods:{
        //登录
        login(){
            if(this.info.username != 'test'){
                this.$toast('请输入正确的账号');
            }
            else if(this.info.password != 'test'){
                this.$toast('请输入正确的密码');
            }
            else{
                this.$store.dispatch('login',this.info).then(() => {
                    this.$router.push(this.$route.query.redirect || '/');
                });
            }
        },
        setBtn(){
            if(this.info.tel !='' && this.info.password != ''){
                this.isLogin = true;
            }else{
                this.isLogin = false;
            }
        }
    }
}
</script>
<style lang="less" scoped>
@import 'login.less';
</style>