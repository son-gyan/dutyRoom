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
                            <el-button type="success" size="mini" @click="">开闸</el-button>
                            <el-button type="danger" size="mini" @click="">关闸</el-button>
                            <el-button type="primary" size="mini" @click="">手动入场</el-button>
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
                            <plateNumber @getPlateLicense="getPlateLicense"  :noLabel='true'></plateNumber>
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
                    fs
                </el-col>
            </el-col>
        </el-row>
        
    </div>
</template>
<script>
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import { videoPlayer } from 'vue-video-player'
import 'videojs-flash'
import plateNumber from '@/components/common/plateNumber'
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
                carNum:"",
                phone:"15488886666",
            }
        }
    },
    created(){
    },
    methods:{
        getPlateLicense(data){
            console.log(data,"carNum")
            this.form.carNum = data
        },
    }
}
</script>
<style lang="less" scoped>
    .indexPage{
        height:100%;
        /deep/ .elCard{
            height:390px;
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
        
    }
</style>