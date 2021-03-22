<template>
    <div class="loginPage">
        <h1 class="tit">无人值守值班平台</h1>
        <el-form ref="form" :model="form" class="elForm">
            <el-form-item>
                <el-input v-model="form.username" placeholder="请输入用户名">
                    <i slot="prefix" class="el-input__icon el-icon-user"></i>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="form.password" placeholder="请输入密码">
                    <i slot="prefix" class="el-input__icon el-icon-unlock"></i>
                </el-input>
            </el-form-item>
            <el-form-item>
                <!-- <el-input v-model="form.code" placeholder="验证码" class="codeInput">
                    <i slot="prefix" class="el-input__icon el-icon-key"></i>
                    <template slot="append">
                        <img class="imgCode" :src="codeUrl" alt="" srcset="">
                    </template>
                </el-input> -->
                <el-checkbox v-model="form.checkedPwd" style="color:#fff">记住密码</el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="btnLogin" @click.native="onLogin">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            codeUrl:require("@/assets/images/codeImg.png"),
            form:{
                username:"",
                password:"",
                code:"",
                checkedPwd:true
            }
        }
    },
    methods:{
        onLogin(){
            let params={
                username:this.form.username,  //admin
                password:this.form.password   // ljs12345
            }
            this.$api.common.login(params).then(res=>{
                //debugger
                if(res.data.code == 200){
                    this.$store.dispatch('setToken', res.data.result.token)                
                    this.$store.dispatch('setUserInfo', res.data.result.userInfo)                
                    this.$store.dispatch('setParkInfo', res.data.result.park)                
                    this.$router.push('/index')
                }else{
                    this.$message.error(res.data.message)
                }
            }).catch(error=>{
                this.$message.error(error)
            })
        }
    }
}
</script>
<style lang="less" scoped>
    .loginPage{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height:100%;
        background: url('../../assets/images/loginBg.png') center no-repeat;
        background-size: cover;
        background-position: bottom;
        box-sizing: border-box;
        .tit{
            margin-bottom: 20px;
            color:#fff;
            font-weight: 400;
            text-align: center;
        }
        /deep/ .elForm{
            width: 521px;
            padding: 50px 60px;
            background: url('../../assets/images/formBg.png') center no-repeat;
            background-size: cover;
            background-position: 100% 100%;
            box-sizing: border-box;
            /* /deep/ .el-input-group__append{
                max-height:40px
            } */
            .codeInput{
                width: 79%;
            }
            .imgCode{
                max-height:30px
            }
            .el-input-group__append{
                padding: 0 3px;
            }
            .el-input__icon{
                color:#03d4e3;
            }
           .el-input__inner{
                background-color: transparent;
                border-color:#03d4e3;
                color:#fff;
            }
            .el-checkbox__input.is-checked .el-checkbox__inner{
                background-color: transparent;
                border-color: #02ffff;
            }
            .el-checkbox__inner{
                background-color: transparent;
                border-color: #02ffff;
                &:hover{
                    border-color: #02ffff;
                }
            }
            .el-checkbox__input.is-checked+.el-checkbox__label{
                color:#fff
            }
            .btnLogin{
                width: 100%;
            }
        }
    }
</style>