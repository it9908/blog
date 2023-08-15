<style lang="less" scoped>
.nav{
    z-index: 3500;
    height: 4rem;
    background: skyblue;
    color: #000000;
    display: flex;
    justify-content: space-between;
    .avatar{
        height: 2rem;
        width: 2rem;
        background: red;
    }
}
</style>

<template>
    <div class="nav">
        <el-breadcrumb class="breadcrumb" separator="/">
          <el-breadcrumb-item v-for="(r, index) in $route.matched" :key="index + '1'" :to="{ path: r.path }">{{
            r.meta.title
          }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="avatar">

        </div>
    </div>
</template>

<script>
export default {
    name:'',
    mounted(){
        console.log(this.$route);
    }
}
</script>