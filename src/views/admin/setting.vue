<template>
    <div class="setting">
        <el-row :gutter="20">
            <el-col :span="24"><div class="title">设置</div></el-col>
            <el-col :span="24">
                <el-form class="elForm" ref="settingForm" :model="settingForm" label-width="100px" >  <!-- size="mini" -->
                    <el-col :span="24">                   
                        <el-col :span="12">
                            <h3 class="h3">修改密码：</h3>
                            <el-form-item label="输入原密码" >
                                <el-input v-model="settingForm.oldPwd" placeholder="请输入原密码"></el-input>
                            </el-form-item>
                            <el-form-item label="输入新密码">
                                <el-input v-model="settingForm.newPwd" placeholder="请输入新密码"></el-input>
                            </el-form-item>
                            <el-form-item label="确认新密码">
                                <el-input v-model="settingForm.confirmPwd" placeholder="请确认新密码"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <h3 class="h3">异常车辆：</h3>
                            <el-form-item label="支付超时时间" label-width="120px">
                                <el-select v-model="settingForm.time" placeholder="请选择支付超时时间">
                                    <el-option label="120秒" value="120"></el-option>
                                    <el-option label="600秒" value="600"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="异常车辆提示音" label-width="120px">
                                <el-switch v-model="settingForm.beep"></el-switch>
                            </el-form-item>
                        </el-col>
                    </el-col>
                    <el-col :span="24"> 
                        <el-col :span="12">
                            <h3 class="h3">出入口：</h3>
                            <el-form-item label="默认显示">
                                <el-select v-model="settingForm.defaultShow" placeholder="请选择默认显示">
                                    <el-option label="出口" :value="1"></el-option>
                                    <el-option label="入口" :value="2"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <h3 class="h3">下发语音：</h3>
                            <el-form-item label="语音内容" label-width="120px">
                                <el-select v-model="settingForm.voice" placeholder="请选择语音内容">
                                    <el-option label="请倒车5米后重新识别" :value="1"></el-option>
                                    <el-option label="请倒车2米后重新识别" :value="2"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="添加语音" label-width="120px">
                                <el-input v-model="settingForm.inpVoice" placeholder="请输入语音"></el-input>
                                <el-button type="primary" @click="addVoice">添加</el-button>
                            </el-form-item>
                        </el-col>
                    </el-col>
                    <el-col :span="24"> 
                        <el-form-item label-width="0px" class="elFormItemFooter">
                            <el-button type="primary" @click="submitForm('settingForm')">确认</el-button>
                            <el-button @click="cancelbtn">取消</el-button>
                        </el-form-item>
                    </el-col>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            settingForm:{
                oldPwd:"",
                newPwd:"",
                confirmPwd:"",
                time:"",
                beep:true,
                defaultShow:1,
                voice:1,
                inpVoice:"请再次扫码缴费",
            }
        }
    },
    methods: {
        //添加语音
        addVoice(){

        },
        //取消
        cancelbtn(){
            this.$router.go(-1)
        }
    },
}
</script>
<style lang="less" soped>
    .setting{
        height: 100%;
        background-color: #fff;
        border-radius: 4px;
        .title{
            padding: 20px 0;
            font-size: 20px;
            text-align: center;
            border-bottom: 1px solid #aaa;
        }
        .h3{
            padding-left: 18px;
        }
        /deep/ .elForm{
            padding: 20px 0;
            .el-input{
                width: 270px;
            }
            .elFormItemFooter{
                margin-top:20px;
                text-align: center;
            }
        } 
    }
</style>