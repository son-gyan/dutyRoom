<template>
    <div clsss="flex">
        <div class="head">
            <el-avatar :size="40" class="pointer">
                <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
            </el-avatar>
            <span class="username">admin</span>
            <img class="settingImg" src="../../assets/images/iconfont-setting.png" @click="jumpTo"  v-show="!showTag" /> 
            <img class="pointer" src="../../assets/images/signOut.png" @click="dialogVisible = true" />
        </div>
        <p class="time">2020年12月23日 12:23:36</p>
        <div class="logOut">
            <el-dialog :close-on-click-modal="dialogClose" title="提示" :visible.sync="dialogVisible" width="30%">
                <span style="padding-left:20px">确定退出当前用户？</span>
                <div class="line"></div>
                <span slot="footer" class="fr">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="loginOut">确定</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters} from 'vuex'
export default {
    props: {
        showTag:{
            type: Boolean
        }
    },
    data() {
        return {
            userName: "123",
            dialogVisible: false,
            dialogClose: false
        };
    },
    computed: {
        ...mapGetters(['userInfo'])
    },
    methods: {
        jumpTo(){
            this.$router.push('/setting')
        },
        loginOut(){
            this.$api.common.loginOut().then((res)=>{
                if (res.data.resCode == 0) {
                    debugger
                    top.window.location.href=res.data.data;
                } else {
                    this.$message({
                        message: res.data.resMsg,//this.$t('message.addFail'),
                        type: "error"
                    });
                }
            }).catch((res) => {
                this.$message({
                    message: res.message,
                    type: 'error'
                })
            });
        }
    }
}
</script>
<style lang="less" scoped>
    .head{
        line-height: 40px;    
    }
    .time{
        font-size: 12px;
        line-height: 20px;
    }
    .username{
        margin-right:10px;
    }
    .settingImg{
        max-width: 20px;
        margin-right:10px;
        vertical-align: middle;
    }
    .pointer{
        vertical-align: middle;
    }
</style>