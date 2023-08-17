<template>
    <div class="comments">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="序号"></el-table-column>
            <el-table-column prop="article_title" label="文章标题"></el-table-column>
            <el-table-column prop="name" label="昵称"></el-table-column>
            <el-table-column prop="content" label="评论内容"></el-table-column>
            <el-table-column prop="create_time" label="发布时间"></el-table-column>
        </el-table>
    </div>
</template>

<script>
import { getAllComments } from "@/api/admin";
export default {
    data() {
        return {
            tableData:[],
        };
    },
    created(){
        this.getListComments()
    },
    methods:{
        async getListComments(){
            const res = await getAllComments()
            this.tableData = res.data.comments
        }
    }
};
</script>

<style lang="less" scoped>
.comments{
    padding: 10px;
}
</style>