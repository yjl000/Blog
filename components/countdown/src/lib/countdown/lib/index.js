// 引入vue文件
import countdown from './countdown';

// 定义插件
const myPlugin = {
    // 插件有一个install方法
    // 方法的第一个参数是传入的Vue,第二个是自定义参数
    install (Vue, option) {
        // 将其注册为vue的组件， 'countdown'是组件名，countdown是组件
        Vue.component('countdown', countdown);
    }
};

// 将插件导出去，并在main.js中通过Vue.use()使用
export default myPlugin;