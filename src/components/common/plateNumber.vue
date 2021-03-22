<template>
  <div id="page">
    <div class="wrap">
      <div class="singleBlock">
        <div class="card-header" v-if="!noLabel">车牌号：</div>
        <div class="num-box">
          <div class="num0" :class="activeKeyWordIndex==0?'focus':''" @click="clickFirstWrap()">
              <span>{{formData.num0}}</span>
          </div>
          <div class="num1" :class="activeKeyWordIndex==1?'focus':''" @click="clickKeyWordWrap(1)"><span>{{formData.num1}}</span></div>
          <em class="spot"></em>
          <div class="num1" :class="activeKeyWordIndex==2?'focus':''" @click="clickKeyWordWrap(2)"><span>{{formData.num2}}</span></div>
          <div class="num1" :class="activeKeyWordIndex==3?'focus':''" @click="clickKeyWordWrap(3)"><span>{{formData.num3}}</span></div>
          <div class="num1" :class="activeKeyWordIndex==4?'focus':''" @click="clickKeyWordWrap(4)"><span>{{formData.num4}}</span></div>
          <div class="num1" :class="activeKeyWordIndex==5?'focus':''" @click="clickKeyWordWrap(5)"><span>{{formData.num5}}</span></div>
          <div class="num1" :class="activeKeyWordIndex==6?'focus':''" @click="clickKeyWordWrap(6)"><span>{{formData.num6}}</span></div>
          <div v-if="formData.commonCard == '2'" class="num1" :class="activeKeyWordIndex==7?'focus':''" @click="clickKeyWordWrap(7)"><span class="last">{{formData.num7}}</span></div>
        </div>
      </div>
      <!-- <div class="submit-box">
        <button @click="submitFn()">确认</button>
      </div> -->
    </div>
    <div class="first-word-wrap"
      v-if="firstWrapStatus"  v-click-outside:dialog="handleDiaClickOutside">
      <div class="first-word"
        @click="selectFirstWord($event)">
        <div class="word">
          <span>京</span>
        </div>
        <div class="word">
          <span>湘</span>
        </div>
        <div class="word">
          <span>津</span>
        </div>
        <div class="word">
          <span>鄂</span>
        </div>
        <div class="word">
          <span>沪</span>
        </div>
        <div class="word">
          <span>粤</span>
        </div>
        <div class="word">
          <span>渝</span>
        </div>
        <div class="word">
          <span>琼</span>
        </div>
      </div>
      <div class="first-word"
        @click="selectFirstWord($event)">
        <div class="word">
          <span>冀</span>
        </div>
        <div class="word">
          <span>川</span>
        </div>
        <div class="word">
          <span>晋</span>
        </div>
        <div class="word">
          <span>贵</span>
        </div>
        <div class="word">
          <span>辽</span>
        </div>
        <div class="word">
          <span>云</span>
        </div>
        <div class="word">
          <span>吉</span>
        </div>
        <div class="word">
          <span>陕</span>
        </div>
      </div>
      <div class="first-word"
        @click="selectFirstWord($event)">
        <div class="word">
          <span>黑</span>
        </div>
        <div class="word">
          <span>甘</span>
        </div>
        <div class="word">
          <span>苏</span>
        </div>
        <div class="word">
          <span>青</span>
        </div>
        <div class="word">
          <span>浙</span>
        </div>
        <div class="word">
          <span>皖</span>
        </div>
        <div class="word">
          <span>藏</span>
        </div>
        <div class="word">
          <span>闽</span>
        </div>
      </div>
      <div class="first-word"
        @click="selectFirstWord($event)">
        <div class="word">
          <span>蒙</span>
        </div>
        <div class="word">
          <span>赣</span>
        </div>
        <div class="word">
          <span>桂</span>
        </div>
        <div class="word">
          <span>鲁</span>
        </div>
        <div class="word">
          <span>宁</span>
        </div>
        <div class="word">
          <span>豫</span>
        </div>
        <div class="word">
          <span>新</span>
        </div>
        <div class="word bordernone">
          <!-- <img src="../assets/images/icon-switch.png" alt=""> -->
        </div>
      </div>
    </div>
    <div class="keyboard-wrap" v-if="keyBoardStatus === true"  v-click-outside:dialog="handleDiaClickOutside">
      <!-- <div class="number-wrap"></div>
      <div class="letter-wrap"></div>
      <div class="cn-wrap"></div> -->
      <div class="keyboard" v-if="activeKeyWordIndex !== 1">
        <span v-for="(item,index) in allKeyWord.No1"
          :key="index"
          @click="clickKeyBoard(item)">{{item}}</span>
      </div>
      <div class="keyboard" v-if="activeKeyWordIndex !== 1">
        <span v-for="(item,index) in allKeyWord.No2"
          :key="index"
          @click="clickKeyBoard(item)">{{item}}</span>
          <span class="bordernone"></span>
          <span class="bordernone"></span>
          <span class="bordernone"></span>
          <span class="bordernone"></span>
      </div>
      <div class="keyboard">
        <span v-for="(item,index) in allKeyWord.No3"
          :key="index"
          @click="clickKeyBoard(item)">{{item}}</span>
      </div>
      <div class="keyboard">
        <span v-for="(item,index) in allKeyWord.No4"
          :key="index"
          @click="clickKeyBoard(item)">{{item}}</span>
      </div>
      <div class="keyboard">
        <span v-for="(item,index) in allKeyWord.No5"
          :key="index"
          @click="clickKeyBoard(item)">{{item}}</span>
      </div>
      <div class="keyboard">
        <span v-for="(item,index) in allKeyWord.No6"
          :key="index"
          @click="clickKeyBoard(item)">{{item}}</span>
          <span class="bordernone"></span>
          <span class="bordernone"></span>
          <span class="bordernone"></span>
          <span class="bordernone"></span>
          <!-- <span class="bordernone" v-if="activeKeyWordIndex === 1"></span>
          <span class="bordernone" v-if="activeKeyWordIndex === 1"></span> -->
          <!-- <span @click="deleteWord" v-if="activeKeyWordIndex === 1">x</span> -->
      </div>
      <div class="keyboard" v-if="activeKeyWordIndex !== 1">
        <span v-for="(item,index) in allKeyWord.No7"
          :key="index"
          @click="clickKeyBoard(item)">{{item}}</span>
          <span class="bordernone"></span>
          <span class="delete" @click="deleteWord"><img src="../../assets/images/icon-delete.png" alt=""></span>
      </div>
      <div class="cancel">
        <span @click="finishedHandle">完成</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
import ClickOutside from 'element-ui/src/utils/clickoutside'
export default {
  directives: { ClickOutside },
  props:{
    noLabel:Boolean,
    clickOutside:Boolean
  },
  data () {
    return {
      formData: {
        commonCard: '2',
        num0: '',
        num1: '',
        num2: '',
        num3: '',
        num4: '',
        num5: '',
        num6: '',
        num7: ''
      },
      allKeyWord: {
        No1: [1, 2, 3, 4, 5, 6, 7],
        No2: [8, 9, 0],
        No3: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        No4: ['H', 'J', 'K', 'L', 'M', 'N', 'P'],
        No5: ['Q', 'R', 'S', 'T', 'U', 'V', 'W'],
        No6: ['X', 'Y', 'Z', ],
        No7: ['港', '澳', '学', '领', '警']
      },
      activeKeyWordIndex: -1, // 当前车牌号
      keyBoardStatus: false,
      firstWrapStatus: false, // 选择弹窗
      confirmTitle: '',
      submitConfirm: false,
      submitConfirmFalse: false,
      submitConfirmText: '',
    }
  },
  computed: {
    depId(){
      return this.$store.getters.depId||sessionStorage.getItem('depId')
    }
  },
  watch: {
    depId () {
      this.getData()
    }
  },
  mounted () { 
    this.getData()
  },
  methods: {
    handleDiaClickOutside(){
      if(this.clickOutside){
        this.firstWrapStatus = false
        this.firstClickStatus = false 
        this.keyBoardStatus = false
      }        
    },
    //预设车牌
    getData(depId){
      let params = {
        depId:this.$store.getters.depId||sessionStorage.getItem('depId')
      }
      console.log(params)
      if(params.depId){
        this.$api.home.queryByDepId(params).then(res=>{
            if(res.code == 200){
                //   预设车牌城市选择
                if (res.result.setLicensePlate) {
                  this.formData.num0 = res.result.setLicensePlate.substr(0, 1)
                } else {
                  this.formData.num0 = ''
                }
                //   预设车牌ABC选择
                if (res.result.setLicensePlate) {
                  this.formData.num1 = res.result.setLicensePlate.substr(1, 1)
                } else {
                  this.formData.num1 = ''
                }
            }else{
                this.$message.error(res.message);
            }
        }).catch((res) => {
            this.loading = false;
        });
      }
    },
    clickFirstWrap () {
      // 点击第一个输入框
      this.firstClickStatus = true
      this.firstWrapStatus = true
      this.keyBoardStatus = false
      this.formData.num0 = ''
    },
    selectFirstWord (event) {
      // 选择省份
      if (event.target.localName !== 'span') {
        return
      }
      this.formData.num0 = event.target.innerText
      this.firstSelectStatus = true
      this.firstWrapStatus = false
      this.firstClickStatus = false
      this.keyBoardStatus = true
      this.activeKeyWordIndex = 1
      // this.$refs.num1.focus()
      // document.getElementById('num1').focus()
    },
    clickKeyBoard (item) { // 点击自定义键盘
      console.log(item)
      this.formData['num' + this.activeKeyWordIndex] = item
      //debugger
      if (this.formData.commonCard === '1') {
        this.activeKeyWordIndex++
        if (this.activeKeyWordIndex > 6) {
          this.keyBoardStatus = false
        }
      } else {
        this.activeKeyWordIndex++
        /* if(this.activeKeyWordIndex == 7){
          
        } */
        let plateLicense
        plateLicense = this.plate_license_2
        //debugger
        plateLicense = this.palindrome(plateLicense)
        /* if (plateLicense.length < 7) {
            this.$toast('请输入正确的车牌号')
            return
        } */
        this.$emit('getPlateLicense',plateLicense)
        if (this.activeKeyWordIndex > 7) {
          this.keyBoardStatus = false
          //this.finishedHandle()
        }
      }
    },
    deleteWord () { // 退格
      // console.log(this.activeKeyWordIndex)
      // console.log(this.formData['num' + (this.activeKeyWordIndex - 1)])
      if (this.activeKeyWordIndex > 1) {
        this.formData['num' + (this.activeKeyWordIndex - 1)] = ''
        this.activeKeyWordIndex--
      }
    },
    clickKeyWordWrap (activeKeyWordIndex) {
      this.keyBoardStatus = true
      this.activeKeyWordIndex = activeKeyWordIndex
      this.formData['num' + this.activeKeyWordIndex] = ''
      //debugger
    },
    finishedHandle(){
        let plateLicense
        plateLicense = this.plate_license_1
        plateLicense = this.palindrome(plateLicense)
        if (plateLicense.length < 7) {
            this.$message.error('请输入正确的车牌号')
            return
        }
        this.$emit('getPlateLicense',plateLicense)
        this.keyBoardStatus = false
    },
    submitFn () {
      let plateLicense
      if (this.formData.commonCard === '1') {
        plateLicense = this.plate_license_1
        plateLicense = this.palindrome(plateLicense)
        if (plateLicense.length < 7) {
          this.$message.error('请输入正确的车牌号')
          return
        }
      }
      if (this.formData.commonCard === '2') {
        plateLicense = this.plate_license_2
        plateLicense = this.palindrome(plateLicense)
        if (plateLicense.length < 8) {
          this.$message.error('请输入正确的车牌号')
          return
        }
      }
      this.$emit('getPlateLicense',plateLicense)
      console.log(plateLicense);
      alert(plateLicense)
    },
    palindrome (str) {
      var arr = str.split('')
      arr = arr.filter(function (val) {
        return (
          val !== ' ' &&
          val !== ',' &&
          val !== '.' &&
          val !== '?' &&
          val !== ':' &&
          val !== ';' &&
          val !== '`' &&
          val !== "'" &&
          val !== '_' &&
          val !== '/' &&
          val !== '-' &&
          val !== '\\' &&
          val !== '' &&
          val !== '(' &&
          val !== ')'
        )
      })
      return arr.join('')
    },
    checkIsHasSpecialStr (str) {
      var flag = false
      var arr = str.split('')
      arr.forEach(val => {
        if (
          val === '!' ||
          val === '}' ||
          val === '{' ||
          val === ']' ||
          val === '[' ||
          val === '&' ||
          val === '$' ||
          val === '@' ||
          val === ' ' ||
          val === ',' ||
          val === '.' ||
          val === '?' ||
          val === ':' ||
          val === ';' ||
          val === '`' ||
          val === "'" ||
          val === '_' ||
          val === '/' ||
          val === '-' ||
          val === '\\' ||
          val === '' ||
          val === '(' ||
          val === ')'
        ) {
          flag = true
        }
      })
      return flag
    },
    checkIsHasChineseStr (str) {
      var Reg = /.*[\u4e00-\u9fa5]+.*/
      if (Reg.test(str)) {
        return true
      }
      return false
    }
  },
  computed: {
    plate_license_1 () {
      return (
        this.formData.num0 +
        this.formData.num1 +
        this.formData.num2 +
        this.formData.num3 +
        this.formData.num4 +
        this.formData.num5 +
        this.formData.num6
      )
    },
    plate_license_2 () {
      return (
        this.formData.num0 +
        this.formData.num1 +
        this.formData.num2 +
        this.formData.num3 +
        this.formData.num4 +
        this.formData.num5 +
        this.formData.num6 +
        this.formData.num7
      )
    }
  }
}
</script>
<style lang="less" scoped>
#page{
    margin-bottom: 10px;
}
.flex-items-center {
  display: flex;
  align-items: center;
}
.wrap {
  /* height: 11.1rem;
  margin: 0.5rem 0.6rem;
  padding: 0.85rem 0.6rem; */
  background-color: #fff;
  //border-radius: 0.2rem;
  padding: .1rem 16px;
    /* border-bottom: 1px solid #ebedf0; */
  .singleBlock{
    display: flex;
    align-items: center;
  }
  .radio-box {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 0.7rem;
    text-align: right;
    color: #4a4a4a;
    input[type="radio"] {
      display: none;
    }
    label {
      padding-left: 0.6rem;
      cursor: pointer;
      img {
        width: 0.8rem;
        margin-right: 0.1rem;
      }
    }
  }
  .card-header {
    width: 6.2em;
    padding-right: 16px;
    font-size: 14px;
    color: #4a4a4a;
    text-align: right;
    margin-right: 12px;
    box-sizing: border-box;
  }
  // input输入框
  .num-box {
    display: flex;
    max-width: 100%;
    justify-content: space-between;
    align-items: center;
    .spot {
        width: 5px;
        height: 5px;
        margin-right: 5px;
      border-radius: 50%;
      background-color: #d8d8d8;
    }
    & > div {
        width: 30px;
        height: 30px;
        margin-right: 5px;
      border: 1px solid #e4e4e4;
      background-color: #fff;
      &.focus{
        border: 1px solid #1989fa;
      }
      &.first {
        position: relative;
        text-align: center;
        line-height: .68rem;
        font-weight: 200;
        .input-wrap {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          &.active {
            z-index: 100;
          }
        }
        em {
          color: #979797;
          font-size: .3rem;
          line-height: .68rem;
        }
        span {
          display: inline-block;
          width: 100%;
          height: 100%;
          // background-color: #9cbce2;
          background-color: #fff;
          color: #828282;
          line-height: .68rem;
        }
      }
      &.active {
        border: 1px solid #4a90e2;
        &:after {
          border-bottom: 0.5rem solid #4a90e2;
        }
      }
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        font-size: 18px;
        color: #828282;
        &.first {
          background-color: #9cbce2;
          color: #fff;
          text-indent: 0.2rem;
          border-radius: 0;
        }
        &.last{
          background-color: #23e504;
        }
      }
    }
  }
  .submit-box {
    button {
      width: 100%;
      height: 2.2rem;
      border-radius: 0.25rem;
      font-size: 0.5rem;
      margin-top: 0.7rem;
      background: linear-gradient(
        320deg,
        rgba(74, 144, 226, 1) 0%,
        rgba(101, 172, 248, 1) 100%
      );
      color: #fff;
    }
  }
  .info {
    font-size: 0.5rem;
    margin-top: 0.9rem;
    color: #828282;
    text-align: left;
    img {
      width: 0.6rem;
      vertical-align: middle;
    }
  }
}
.first-word-wrap {
  // height: 9.4rem;
  background-color: #D2D5DB;
  padding: 15px 20px 50px;//0.2rem 0.3rem .5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  .first-word {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    .word {
      box-sizing: border-box;
      width: 40px;
      height: 40px;
      // border: 1px solid #9cbce2;
      box-shadow: 0px 1px 4px  rgba(0, 0, 0, 0.35);
      border-radius: 0.16rem;
      text-align: center;
      &.bordernone {
        border: none;
        box-shadow:none
      }
      span {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        background-color: #fff;
        color: #000;
        // border: 1px solid #fff;
        border-radius: 0.125rem;
        font-size: 18px;
      }
      img {
        width: 35px;
      }
    }
    &:nth-last-of-type(1){
      margin-bottom: 0rem;
    }
  }
}
.keyboard-wrap {
  background-color: #D2D5DB;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px 20px 50px;//0.3rem 0.3rem 0.2rem;
  z-index: 99;
  .keyboard {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* height: .8rem; */
    margin-bottom: 15px;
    font-size: 18px;
    span {
      text-align: center;
      display: flex;
      width: 40px;
      height: 40px;
      align-items: center;
      justify-content: center;
      margin: 0 0.1rem;
      box-shadow: 0px 1px 4px  rgba(0, 0, 0, 0.35);
      background-color: #fff;
      border-radius: 0.125rem;
      &:active {
        background-color: #e4e4e4;
      }
      &.bordernone{
        border: none;
        box-shadow: none;
        background-color: #D2D5DB;
        &:active{
          background-color:#D2D5DB;
        }
      }
      &.delete{
        background-color: #465266;
        img{
          //width: .45rem;
            width: 25px;
        }
      }
    }
  }
  .cancel{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    span{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70px;
      height: 40px;
      background-color: #465266;
      color: #fff;
      border-radius: 0.125rem;
    }
  }
}
</style>
