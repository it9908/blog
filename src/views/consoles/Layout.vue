<template>
    <div class="layout">
        <div class="left">
            <Sidebar></Sidebar>
        </div>
        <div class="right">
            <Nav></Nav>
            <div class="main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/consoles/Sidebar.vue";
import Nav from "@/components/consoles/Nav.vue";
export default {
    components: { Nav, Sidebar },
    data() {
        return {};
    }
};
</script>

<style lang="less" scoped>
.layout {
    width: 100%;
    display: flex;
    background: #353b48;
    .left{
        height: 100vh;
    }
    .right {
        min-width: 800px;
        flex: 1;
        background: #f1f3f4;
        .main {
            background: #f1f3f4;
        }
    }
}
</style>