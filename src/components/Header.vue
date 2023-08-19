<template>
    <div class="header">
        <div class="head_list">
            <el-menu mode="horizontal" class="el-menu-demo" text-color="#fff">
                <el-menu-item>
                    <slot name="logo">Mxz'blog</slot>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="head_list hidden-xs-only">
            <el-menu
                class="el-menu-demo"
                background-color
                mode="horizontal"
                text-color="#fff"
                active-text-color="#409eff"
                router
                :default-active="$route.path"
            >
                <el-menu-item index="/article/1">文章</el-menu-item>
                <el-menu-item index="/messages">留言墙</el-menu-item>
                <el-menu-item index="/about">关于本站</el-menu-item>
            </el-menu>
        </div>
        <div class="head_list hidden-xs-only">
            <el-menu class="el-menu-demo" mode="horizontal" text-color="#fff">
                <el-menu-item>
                    <span @click="goSignIn">后台管理</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="shrink-bar hidden-sm-and-up">
            <el-menu class="el-menu-demo" mode="horizontal" text-color="#fff">
                <el-menu-item>
                    <span @click="drawer = true">
                        <i class="el-icon-s-operation"></i>
                    </span>
                </el-menu-item>
            </el-menu>
        </div>
        <el-drawer title="导航栏" :visible.sync="drawer" direction="ttb" :before-close="handleClose">
            <div>
                <el-menu
                    class="el-menu-demo"
                    background-color
                    text-color="#000"
                    active-text-color="#409eff"
                    router
                    :default-active="$route.path"
                >
                    <el-menu-item index="/article" @click="drawer = false">文章</el-menu-item>
                    <el-menu-item index="/messages" @click="drawer = false">留言墙</el-menu-item>
                    <el-menu-item index="/about" @click="drawer = false">关于本站</el-menu-item>
                    <el-menu-item><span @click="goSignIn">后台管理</span></el-menu-item>
                </el-menu>
            </div>
        </el-drawer>
    </div>
</template>

<script>
export default {
    name: "Header",

    data() {
        return {
            drawer: false
        };
    },

    methods: {
        // 前往登录页
        goSignIn() {
            this.$router.push({ path: "/login" });
        },
        handleClose() {
            this.drawer = false;
        }
    }
};
</script>

<style lang="less" scoped>
.el-menu--horizontal {
    border-right: 1px solid #898989;
}

.el-menu-item {
    background-color: rgba(255, 255, 255, 0) !important;
}

.el-menu-demo {
    background: rgba(255, 255, 255, 0.5);
}
.header {
    width: 100%;
    display: grid;
    grid-template-columns: 200px 2fr 100px;
    .shrink-bar {
        i {
            color: #ffffff;
        }
    }
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

@import url("../assets/media_queries/front_desk/header.less");
</style>