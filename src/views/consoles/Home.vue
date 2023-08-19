<template>
    <div class="main-con">
        <echarts :width="width" :height="height" :id="id"></echarts>
    </div>
</template>

<script>
import echarts from "../../components/consoles/echarts/Echarts.vue";
export default {
    name: "chartShow",
    data() {
        return {
            width: "100%",
            height: "500px",
            id: "chartShow"
        };
    },
    components: {
        echarts
    }
};
</script>

<style lang="less" scoped>
.main-con{
  height: 100%;
  padding: 20px;
}
</style>