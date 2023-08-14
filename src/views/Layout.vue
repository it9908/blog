<template>
    <el-container class="container">
        <el-header>
            <Header></Header>
        </el-header>
        <div class="main">
            <el-row type="flex" :gutter="10" class="row-bg">
                <el-col :span="18">
                    <div class="router-box">
                        <router-view></router-view>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="sidebar">
                        <Sidebar></Sidebar>
                    </div>
                </el-col>
            </el-row>
        </div>
        <Footer></Footer>
    </el-container>
</template>

<script>
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";
import Footer from "./Footer.vue";
export default {
    components: { Header, Sidebar, Footer }
};
</script>

<style lang="less" scoped>
.container {
    width: 100%;
    background: linear-gradient(90deg, #3498db, #e74c3c);
    animation: dynamicBackground s linear infinite alternate;

    @keyframes dynamicBackground {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: 100% 100%;
        }
    }
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
    .router-box {
        background: rgba(255, 255, 255, 0.3);
    }

    .sidebar {
        padding: 8px;
        box-sizing: border-box;
        position: sticky;
        top: 60px;
        background: #eeeeee;
    }
}
</style>