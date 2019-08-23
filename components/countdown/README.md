# countdown

> this is a countdown component

### countdown(倒计时)

开发的过程中，很多时候我们需要用到倒计时，特别是商城的开发，这个功能虽然不复杂，但是耗时间，没调试一次就要等待出现bug的时间。所以我参照天猫的首页以及聚划算设计了一个基于Vue的倒计时。这个插件可以设置时分，一般倒计时是24小时以内，一分钟以上（毕竟不是秒表），所以暂时没有天数和秒数的设置。除了时分设置，还有背景色、尺寸、是否实时返回时间等设置。

#### 插件的安装

##### NPM

```javascript
npm i countdown
```

##### 引入插件

```javascript
import Vue from 'vue';
import countdown from 'countdown';

Vue.use(countdown);
```

##### 基本用法

```html
<countdown 
    size="small" 
    theme-color="red" 
    hour="0" 
    minute='1' 
    :is-actual-cb="isActualCb" 
    :is-show-hour="flag" 
    @getTime='getTime'
 ></countdown>
```

##### API

| 参数         | 说明                                             | 类型    | 默认值 |
| ------------ | ------------------------------------------------ | ------- | ------ |
| size         | 尺寸（small—12px、middle—14px、large—16px）      | String  | small  |
| theme-color  | 时分秒以及“：”的颜色，字体颜色白色，不可设置     | String  | #000   |
| hour         | 时                                               | String  | 0      |
| minute       | 分                                               | String  | 0      |
| is-actual-cb | 是否实时返回时间，若为false,则倒计时结束才有回调 | Boolean | false  |
| is-show-hour | 是否显示时（如果设置时，此参数无效）             | Boolean | true   |

##### methods

getTime，回调，如果设置了is-actual-cb为true，则实时返回时间（可用于活动开始前多少时间提示），否则倒计时结束才会返回值：‘over’。



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
