<template>
    <div class="sidebar">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#353b48"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
        >
            <el-menu-item>
                <div class="logo">
                    <router-link to="/"><img src="../../assets/logo.png" style="width:30px" /></router-link>
                </div>
            </el-menu-item>
            <el-menu-item index="/console/home">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>系统管理</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="/console/articles">文章管理</el-menu-item>
                    <el-menu-item index="/console/commemts">评论管理</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/console/release">
                <i class="el-icon-menu"></i>
                <span slot="title">文章发布</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<style lang="less" scoped>
.sidebar{
    position: sticky;
    left: 0;
    top: 0;
}
.el-menu {
    border-right: none;
    background: #2f3640;
    .logo{
        display: flex;
        justify-content: center;
    }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100%;
    
}
</style>