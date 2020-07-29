import jquery from 'jquery';
import moment from 'moment';

// 设置语言
import 'moment/locale/zh-cn'; // 手动引入部分语言包
moment.locale('zh-cn');
let r = moment().endOf('day').fromNow();
console.log(r);