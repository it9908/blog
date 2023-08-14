<template>
    <div class="header">
        <div class="head_list">
            <el-menu mode="horizontal" class="el-menu-demo" text-color="#fff">
                <el-menu-item>
                    <slot name="logo">Mxz'blog</slot>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="head_list">
            <el-menu
                class="el-menu-demo"
                background-color
                mode="horizontal"
                text-color="#fff"
                active-text-color="#409eff"
                router
                :default-active="$route.path"
            >
                <el-menu-item index="/article">文章</el-menu-item>
                <el-menu-item index="/messages">留言墙</el-menu-item>
                <el-menu-item index="/about">关于本站</el-menu-item>
            </el-menu>
        </div>
        <div class="head_list">
            <el-menu class="el-menu-demo" mode="horizontal" text-color="#fff">
                <el-menu-item><span @click="goSignIn">登录</span></el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            
        };
    },

    methods: {
        // 前往登录页
        goSignIn(){
            alert("goSignIn")
        },
        
    }
};
</script>

<style lang="less" scoped>
.el-menu-item {
    background-color: rgba(255, 255, 255, 0) !important;
}

.el-menu-demo {
    background: rgba(255, 255, 255, 0.5);
}
.header {
    display: grid;
    grid-template-columns: 200px 2fr 1fr;
}
.head_list {
    height: 60px;
    text-align: center;
}
.head_list:first-of-type .el-menu {
    display: flex;
    justify-content: center;
}
.head_list:last-of-type .el-menu {
    display: flex;
    justify-content: center;
}
</style>