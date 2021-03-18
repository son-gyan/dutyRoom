<template>
    <div class="indexPage">
        <el-container class="container">
            <el-header>
                <img class="goback" src="../../assets/images/back.png" alt="" srcset="" v-show="showTag" @click="goback">
                <h1 class="headTit"> 云智泊无人值守值班平台</h1>
                <div class="sysHead">
                    <el-row>
                        <el-col :span="24">
                            <div class="fr">
                                <log-out :showTag="showTag"></log-out>
                            </div>
                        </el-col>                     
                    </el-row>
                </div>
            </el-header>
            <el-main class="content">
                <keep-alive>                    
                    <transition name="fade" mode="out-in">                
                        <router-view v-if="$route.meta.keepAlive"></router-view>
                    </transition>
                </keep-alive>
                <transition name="fade" mode="out-in"> 
                    <router-view v-if="!$route.meta.keepAlive"></router-view>
                </transition>
            </el-main>
            <!-- <el-footer>Footer</el-footer> -->
        </el-container>
    </div>
</template>
<script>
import LogOut from "@/components/common/logOut";
export default {
    components: { LogOut },
    data(){
        return {
            showTag:false
        }
    },
    watch: {
        $route: 'handleRoute'
    },
    created(){
        this.handleRoute(this.$route)
    },
    methods:{
        // 路由操作处理
        handleRoute (route) {
            this.$nextTick(() => {
                console.log(route.path ,'route.path')
                if(route.path == '/setting'){
                    this.showTag = true
                }else{
                    this.showTag = false
                }
            })
        },
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="less" scoped>
    .indexPage{
        height:100%;
        .container{
            height:100%;
        }
        /deep/ .el-container{
            .goback{
                float: left;
                height:40px;
                margin: 10px;
                vertical-align: middle;
            }
            .headTit{
                display: inline-block;
                width: 265px;                
            }
            .el-header{
                position: relative;
                background-color: #3485EC;
                color: #fff;
                text-align: center;
                line-height: 60px;
                .sysHead {
                    float: right;
                    i {
                    font-size: 22px;
                    }
                }
            }
            .content{
                height:100%;
                background-color: #ecf5ff;
            }
        }
    }
</style>