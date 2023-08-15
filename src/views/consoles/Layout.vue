<template>
    <div class="layout">
        <div class="sidebar">
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                router
            >
                <el-menu-item index="1">
                    <img src="../../assets/logo.png" style="width:30px" alt srcset />
                    <router-link to="/">首页</router-link>
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

        <div class="right">
            <Nav class="nav"></Nav>
            <div class="main">
                <router-view></router-view>
                
            </div>
        </div>
    </div>
</template>

<script>
import Nav from "@/components/consoles/Nav.vue";
export default {
    components: { Nav },
    data() {
        return {
            
        };
    }
};
</script>

<style lang="less" scoped>
.layout {
    width: 100%;
    display: flex;
    .sidebar {
        width: 200px;
        background: red;
        .el-menu {
            border-right: none;
        }
    }
    .right {
        flex: 1;
        background: blue;
        .nav {
            position: sticky;
            top: 0;
        }
        .main {
            height: 100vh;
        }
    }
}
</style>