<template>
    <div class="indexPage">
        <el-container>
            <el-header>
                <h1 class="headTit">云智泊无人值守值班平台</h1>
                <div class="sysHead">
                    <el-row>
                        <el-col :span="24">
                            <div class="fr">
                                <log-out></log-out>
                            </div>
                        </el-col>                     
                    </el-row>
                </div>
            </el-header>
            <el-main>Main</el-main>
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

        }
    },
    created(){

    },
    methods:{

    }
}
</script>
<style lang="less" scoped>
    .indexPage{
        /deep/ .el-container{
            .headTit{
                float: left;
                width: 80%;
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
        }
    }
</style>