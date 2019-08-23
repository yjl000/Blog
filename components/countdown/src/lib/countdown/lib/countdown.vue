<template>
  <div>
     <ul class="timeWrapper">
       <li v-show="showHour"><span :style="{background:themeColor,fontSize:fontSize + 'px'}">{{cHour}}</span><span :style="{color:themeColor,fontSize:fontSize + 'px'}">:</span></li>
       <li><span :style="{background:themeColor,fontSize:fontSize + 'px'}">{{cMinute}}</span><span :style="{color:themeColor,fontSize:fontSize + 'px'}">:</span></li>
       <li><span :style="{background:themeColor,fontSize:fontSize + 'px'}">{{second}}</span></li>
     </ul>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    hour: {
      type: String,
      default: '0'
    },
    minute: {
      type: String,
      default: '0'
    },
    size: {
      type: String,
      default: 'small'
    },
    themeColor: {
      type: String,
      default: '#333'
    },
    isShowHour: {
      type: Boolean,
      default: true
    },
    isActualCb: { // 是否实时返回时分秒，如果设置为false，则就有倒计时为0时才会有回调。
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      cHour: '0',
      cMinute: "01",
      second: 59,
      fontSize: 12,
      showHour: this.isShowHour,
      timer: null
    }
  },

  methods: {
    // 初始化部分参数
    _initSize () {
      // 将传入的小时赋值给组件参数
      this.cHour = parseInt(this.hour, 10) < 10 ? '0' + parseInt(this.hour, 10) : this.hour;
      this.cMinute = parseInt(this.minute, 10) < 10 ? '0' + parseInt(this.minute, 10) : this.minute;
      // 如果设置了小时，那么隐藏小时的设置将会失效
      if (this.cHour !== '00') {
        this.showHour = true;
      }
      // 根据传入的分钟来设定小时是否需要立即减1
      if (this.cMinute !== '00') {
        this.cMinute = parseInt(this.cMinute, 10) - 1;
        this.cMinute = this.cMinute < 10 ? '0' + this.cMinute : this.cMinute;
      } else if (this.cHour !== '00') {
        this.cHour = parseInt(this.cHour, 10) - 1;
        this.cHour = this.cHour < 10 ? '0' + this.cHour : this.cHour;
        this.cMinute = 59;
      } else if (this.cHour === '00' && this.cMinute === '00') {
        this.second = '00';
        return;
      }

      this.computeTime();
      // 判断组件的大小
      if (this.size === 'small') {
        this.fontSize = 12;
      } else if (this.size === 'middle') {
        this.fontSize = 14;
      } else {
        this.fontSize = 16;
      }
    },
    // 计算倒计时
    computeTime () {
      this.timer = setInterval(() => {
        this.second = parseInt(this.second, 10) - 1;
        this.second = this.second < 10 ? '0' + this.second : this.second;
        if (this.second === "0-1") {
          this.cMinute = parseInt(this.cMinute, 10) - 1;
          this.cMinute = this.cMinute < 10 ? '0' + this.cMinute : this.cMinute;
          this.second = 59;
        }
        if (this.cMinute === "00" && this.cHour !== "00") {
          this.cHour = parseInt(this.cHour, 10) - 1;
          this.cHour = this.cHour < 10 ? '0' + this.cHour : this.cHour;
          this.cMinute = 59;
        } else if (this.cHour === "00" && this.cMinute === "00" && this.second === "00") {
          clearInterval(this.timer);
          this.$emit('getTime', 'over')
        }

        if (this.isActualCb) {
          const time ={
            h: this.cHour,
            m: this.cMinute,
            s: this.second
          }
          this.$emit('getTime', time);
        }
      }, 1000)
    }
  },
  mounted () {
    this._initSize();
  }
}
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
    font-size: 12px;
    font-family: '微软雅黑';
  }
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
  }
  
  li > span:first-of-type{
    padding: 2px;
    border-radius: 2px;
    color: #fff;
  }

  li > span:nth-of-type(2){
    margin: 0 2px;
    font-weight: 600;
  }

</style>
