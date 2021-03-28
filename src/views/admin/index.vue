<template>
    <div class="indexPage">
        <el-row :gutter="20">
            <el-col :span="24">
                <el-col :span="8">
                    <el-card class="elCard">
                        <section class="video-box">
                            <videoPlayer
                            ref="videoPlayer"
                            :options="videoOptions"
                            class="vjs-custom-skin videoPlayer"
                            :playsinline="true"
                            />
                        </section>
                        <div class="btnGroup">
                            <el-button type="success" size="mini" @click="openGate">开闸</el-button>
                            <el-button type="danger" size="mini" @click="closeGate">关闸</el-button>
                            <el-button type="primary" size="mini" @click="manualGate">手动入场</el-button>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card class="elCard">
                        <section class="video-box">
                            <videoPlayer
                            ref="videoPlayer"
                            :options="videoOptions"
                            class="vjs-custom-skin videoPlayer"
                            :playsinline="true"
                            />
                        </section>
                    </el-card>  
                </el-col>
                <el-col :span="8">
                    <el-card class="elCard cardIssue">
                        <el-col :span="16">
                            <plateNumber @getPlateLicense="getPlateLicense"  :noLabel='true' :clickOutside="true"></plateNumber>
                            <el-form ref="form" :model="form" class="formIssue" size="small">
                                <el-form-item label="无车牌：" label-width="80px">
                                    <el-input v-model="form.phone"></el-input>
                                </el-form-item>
                                <el-form-item class="elItem">
                                    <span>新天地电脑城</span>
                                    <span>出口2</span>
                                </el-form-item>
                                <el-form-item label="停车时长：" label-width="100px">
                                    <span>12小时23分钟</span>
                                </el-form-item>
                                <el-form-item label="收费金额：" label-width="100px">
                                    <span>12元</span>
                                </el-form-item>
                                <el-form-item  class="elFormItemFooter">
                                    <el-button type="primary" size="default" @click="">下发车牌</el-button>
                                    <el-button type="primary" size="default" @click="">人工匹配</el-button>                                    
                                </el-form-item>
                            </el-form>
                        </el-col>
                        <el-col :span="8">
                            <el-image class="qrImg" :src="qrImg"></el-image>
                        </el-col>
                    </el-card>
                </el-col>
            </el-col>
            <el-col :span="24">
                <el-col :span="16">
                    <div class="curPark">
                        <span>当前车场：</span>
                        <span><i class="elIcon el-icon-location"></i>{{parkInfo.parentList[0].departName}}</span>
                        <span><i class="elIcon el-icon-s-home"></i>{{parkInfo.parentList[1].departName}}</span>
                        <span><i class="elIcon el-icon-s-shop"></i>{{parkInfo.parentList[2].departName}}</span> 
                        <span><i class="elIcon el-icon-menu"></i>{{parkInfo.departName}}</span>
                        <span @click="handleChangeProject">切换<i class="el-icon-sort elIconSort"></i></span>
                    </div>
                    <div class="tag">
                        <el-tag effect="plain" size="small"><i class="el-icon-arrow-left"></i></el-tag>
                        <el-tag effect="dark" size="small">出口1</el-tag>
                        <el-tag effect="dark" size="small">出口2</el-tag>
                        <el-tag effect="dark" size="small">出口3</el-tag>
                        <el-tag effect="dark" size="small">出口4</el-tag>
                        <el-tag effect="dark" size="small">出口5</el-tag>
                        <el-tag effect="dark" size="small">入口1</el-tag>
                        <el-tag effect="dark" size="small">入口2</el-tag>
                        <el-tag effect="dark" size="small">入口3</el-tag>
                        <el-tag effect="dark" size="small">入口4</el-tag>
                        <el-tag effect="dark" size="small">入口5</el-tag>
                        <el-tag effect="plain" size="small"><i class="el-icon-arrow-right"></i></el-tag>
                    </div>
                    <div class="table">
                        <el-table :data="tableData.list.filter(data => !search || data.carNum.includes(search))" style="width: 100%">
                            <el-table-column prop="inTime" label="进场时间" width="180" align="center"></el-table-column>
                            <el-table-column prop="carNum" label="车牌" width="180"  align="center">
                                <template #header>
                                    <el-input
                                        v-model="search"
                                        size="mini"
                                        placeholder="搜索车牌">
                                    </el-input>
                                </template>
                                <template slot-scope="scope">
                                    <span>{{scope.row.carNum}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="parkName" label="车场名称" align="center"></el-table-column>
                            <el-table-column prop="laneName" label="车道名称" align="center"></el-table-column>
                            <el-table-column label="操作" align="center">
                                <template slot-scope="scope">
                                    <el-button size="mini" @click="handleOut(scope.$index, scope.row)">手动出场</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="fenye">
                            <el-pagination
                                background
                                @current-change="handleCurrentChange"
                                :current-page="params.pageNum"
                                :page-size="100"
                                layout="total, prev, pager, next, jumper"
                                :total="tableData.records == ''? 0: tableData.records"
                            >
                            </el-pagination>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8" class="elCol">
                    <h3>出口异常车辆列表</h3>
                    <p class="sup">今日已处理：15条 待处理：2条</p>
                    <div class="table">
                        <el-table :data="anomalyTableData.list.filter(data => !searchVal || data.carNum.includes(searchVal))" style="width: 100%">
                            <el-table-column prop="carNum" label="车牌号码" width="100"  align="center">
                                <template #header>
                                    <el-input
                                        v-model="searchVal"
                                        size="mini"
                                        placeholder="搜索车牌"/>
                                </template>
                            </el-table-column>
                            <el-table-column prop="parkName" label="车场名称" align="center"></el-table-column>
                            <el-table-column prop="laneName" label="车道名称" align="center"></el-table-column>
                            <el-table-column prop="status" label="状态" align="center"></el-table-column>
                            <el-table-column label="操作" align="center">
                                <template slot-scope="scope">
                                    <el-button size="mini" @click="handleAnomaly(scope.$index, scope.row)">已处理</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="fenye">
                            <el-pagination
                                background
                                @current-change="handleCurrentChangeAnomaly"
                                :current-page="params.pageNum"
                                :page-size="100"
                                layout="total, prev, pager, next, jumper"
                                :total="tableData.records == ''? 0: tableData.records"
                            >
                            </el-pagination>
                        </div>
                    </div>
                </el-col>
                
            </el-col>
        </el-row>
        <el-dialog
            title="提示"
            :visible.sync="projectDialogVisible"
            width="30%">
            <el-cascader :options="chechangTree" v-model="formInline"  @change="handleSelect"></el-cascader>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="changeAsyncOK('formInline')">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import { videoPlayer } from 'vue-video-player'
import 'videojs-flash'
import plateNumber from '@/components/common/plateNumber'
import { mapGetters } from "vuex"
export default {
    components: {
        videoPlayer,
        plateNumber
    },
    data(){
        return {
            videoSrc: '',
            // 视频播放
            videoOptions: {
                playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                autoplay: false, //如果true,浏览器准备好时开始回放。
                muted: false, // 默认情况下将会消除任何音频。
                loop: false, // 导致视频一结束就重新开始。
                preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: 'zh-CN',
                aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                techOrder: ['flash', 'html5'],      // 兼容顺序
                sources: [
                    {
                        type: 'video/mp4', // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
                        src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm' // url地址
                    },
                    { // 流配置，数组形式，会根据兼容顺序自动切换
                        type: 'rtmp/hls',
                        src: 'rtmp://10.74.20.123/live/record1'//'rtmp://58.200.131.2:1935/livetv/hunantv'
                    }
                ],
                poster: "", //你的封面地址
                // width: document.documentElement.clientWidth,
                notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
                controlBar: {
                    timeDivider: true,
                    durationDisplay: true,
                    remainingTimeDisplay: false,
                    fullscreenToggle: true  //全屏按钮
                }
            },
            qrImg:require("../../assets/images/codePic.png"),
            form:{
                depId:'',
                carNum:"",
                phone:"15488886666",
            },
            search:"",
            searchVal:"",
            params:{
                pageNum:1,
                pageSize:10
            },
            tableData:{
                records:0,
                list:[
                    {
                        inTime:"2021-02-01 15:56:32",
                        carNum:"鄂E78651",
                        parkName:"新天地电脑城",
                        laneName:"入口1"
                    },
                    {
                        inTime:"2021-02-01 15:50:24",
                        carNum:"鄂E4399A",
                        parkName:"机电花苑二区",
                        laneName:"入口1"
                    },
                    {
                        inTime:"2021-02-01 15:40:01",
                        carNum:"15542365874",
                        parkName:"机电花苑一区",
                        laneName:"入口1"
                    },
                    {
                        inTime:"2021-02-01 15:30:24",
                        carNum:"15549393491",
                        parkName:"机电花苑二区",
                        laneName:"入口1"
                    }
                ]
            },
            paramsAnomaly:{
                pageNum:1,
                pageSize:10
            },
            anomalyTableData:{
                records:0,
                list:[
                    {
                        carNum:"鄂E78651",
                        parkName:"新天地电脑城",
                        laneName:"出口3",
                        status:0
                    },
                    {
                        carNum:"鄂E78651",
                        parkName:"新天地电脑城",
                        laneName:"出口3",
                        status:0
                    },
                    {
                        carNum:"鄂E34556",
                        parkName:"新天地电脑城",
                        laneName:"出口3",
                        status:0
                    }
                ]
            },
            cityId:'',
            groupId:'',
            companyId:'',
            xParkId:'',
            projectDialogVisible:false,
            // 选中的id
            formInline: [],
            //   选中的对象
            selectObj: [],
            chechangTree: []
        }
    },
    computed: {
        ...mapGetters(["userInfo",'parkInfo'])
    },
    created(){
        console.log(this.parkInfo,'parkInfo')
        this.form.depId = this.parkInfo.id
        this.cityId = this.parkInfo.parentList[0].id
        this.groupId = this.parkInfo.parentList[1].id
        this.companyId = this.parkInfo.parentList[2].id
        this.xParkId = this.form.depId
    },
    methods:{
        // 开闸
        openGate(){

        },
        // 关闸
        closeGate(){

        },
        // 手动开闸
        manualGate(){

        },
        //项目切换
        handleChangeProject(){
            this.getOrgTree()
        },
        // 获取组织机构树
        getOrgTree(){
            this.$api.home.getTree().then(res=>{
                //debugger
                if(res.data.code == 200){
                    let resultArry = res.data.result
                    if (resultArry && resultArry.length) {
                        for (let i = 0; i < resultArry.length; i++) {
                            resultArry[i].label = resultArry[i].title
                            resultArry[i].value = resultArry[i].id
                            if (resultArry[i].children && resultArry[i].children.length) {
                                for (let j = 0; j < resultArry[i].children.length; j++) {
                                    resultArry[i].children[j].label = resultArry[i].children[j].title
                                    resultArry[i].children[j].value = resultArry[i].children[j].id
                                    if (resultArry[i].children[j].children && resultArry[i].children[j].children.length) {
                                        for (let p = 0; p < resultArry[i].children[j].children.length; p++) {
                                            resultArry[i].children[j].children[p].label = resultArry[i].children[j].children[p].title
                                            resultArry[i].children[j].children[p].value = resultArry[i].children[j].children[p].id
                                            if (resultArry[i].children[j].children[p].children && resultArry[i].children[j].children[p].children.length) {
                                                for (let k = 0; k < resultArry[i].children[j].children[p].children.length; k++) {
                                                    resultArry[i].children[j].children[p].children[k].label = resultArry[i].children[j].children[p].children[k].title
                                                    resultArry[i].children[j].children[p].children[k].value = resultArry[i].children[j].children[p].children[k].id
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } 
                        console.log(resultArry,'getTree')                                        
                        this.chechangTree = resultArry
                    }   
                    this.formInline = [this.cityId, this.groupId, this.companyId, this.xParkId]
                    this.projectDialogVisible = true
                }else{
                    this.$message.error(res.data.message)
                }
            }).catch(error=>{
                this.$message.error(error)
            })
        },
        handleSelect (value, selectedData) {
            if (selectedData) {
                this.selectObj = selectedData
            }
        },
        //项目确认
        changeAsyncOK(formInline){

        },
        getPlateLicense(data){
            console.log(data,"carNum")
            this.form.carNum = data
        },
        //分页页码切换
        handleCurrentChange(val) {
            this.params.pageNum = val;
            this.getList();
        },
        getList(){

        },
        //手动出场
        handleOut(){

        },
        //分页页码切换
        handleCurrentChangeAnomaly(val) {
            this.paramsAnomaly.pageNum = val;
            this.getAnomalyList();
        },
        getAnomalyList(){

        },
        // 异常处理
        handleAnomaly(index,row){

        }
    }
}
</script>
<style lang="less" scoped>
    .indexPage{
        height:100%;
        /deep/ .elCard{
            max-height:390px;
            .el-card__body{
                padding: 0;
                .qrImg{
                    vertical-align: middle;
                }
            }
            .video-box {
                width: 100%;
            }
            .btnGroup{
                margin-top:10px;
            }
            .el-form-item {
                margin-bottom: .5rem;
            }
            .elItem{
                .el-form-item__content{                    
                    display: flex;
                    justify-content: space-between;
                }
            }
            &.cardIssue{
                padding: 15px;
                box-sizing: border-box;
            }
            .elFormItemFooter{
                text-align: center;
            }
            
        }
        .curPark{
            .elIcon{
                margin-left:5px;
                color:#3485EC;
            }
            .elIconSort{
                padding: 5px 2px;
                margin-left: 5px;
                transform: rotate(90deg);
                background-color: #3485EC;
                color: #fff;
                border-radius: 3px;
            }
        }
        /deep/ .tag{
            margin-top:10px;
            .el-tag{
                cursor: pointer;
            }
        }
        /deep/ .table{
            margin-top:20px;
        }
        .elCol{
            text-align: center;
            .sup{
                margin-top: 15px;
            }
            .fenye{
                text-align: left; 
            }
        }
    }
</style>