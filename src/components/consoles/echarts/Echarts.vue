<template>
    <div>
        <div :style="{ height: height, width: width }" :id="id"></div>
    </div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
// 不引入这个会报错 xAxis "0" not found
require("echarts/lib/component/grid");
// import 'echarts/lib/component/grid';
export default {
    name: "echarts",
  props: {
    height: {
      type: String,
      default: "500px",
    },
    width: {
      type: String,
      default: "500px",
    },
    id: {
      type: String,
      default: "demo",
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      console.log(this.id);
      let myChart = echarts.init(document.getElementById(this.id));
      // 绘制图表
      myChart.setOption({
        title: { text: "在Vue中使用echarts" },
        tooltip: {},
        xAxis: {
            type: 'category',
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
  },
}
</script>

<style>
</style>