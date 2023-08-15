<template>
    <el-container class="container">
        <el-header>
            <Header></Header>
        </el-header>
        <div class="main">
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </el-container>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
    components: { Header, Footer }
};
</script>

<style lang="less" scoped>
.container {
    width: 100%;
        background: #121212;
}
.el-header {
    z-index: 3000;
    padding: 0px;
    height: 60px;
    position: sticky;
    top: 0;
}
.main {
    padding: 10px;
    margin: 0 auto;
    width: 80%;

    .sidebar {
        padding: 8px;
        box-sizing: border-box;
        position: sticky;
        top: 60px;
        background: #eeeeee;
    }
}
</style>