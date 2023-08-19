import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/reset.css'
import '@/assets/iconfont/iconfont.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 响应式断点样式
import 'element-ui/lib/theme-chalk/display.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// 代码高亮风格，选择更多风格需导入 node_modules/hightlight.js/styles/ 目录下其它css文件
import 'highlight.js/styles/xt256.css'; // 或者你喜欢的其他样式
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import echarts from 'echarts'

Vue.prototype.$echart = echarts

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(mavonEditor)

// 注册需要的编程语言
hljs.registerLanguage('javascript', javascript);

Vue.directive('highlight', (el) => {
    // 选择指定元素(el)内的所有'pre code'元素。
      let blocks = el.querySelectorAll('pre code');

    //   // 遍历每个'pre code'代码块，并使用'hljs'库进行语法高亮显示。
      blocks.forEach((block) => {
        hljs.highlightBlock(block);
      });
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
