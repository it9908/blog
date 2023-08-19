<template>
    <div class="main">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item>
                <el-input v-model="formInline.user" placeholder="seaching..."></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
        <el-skeleton :loading="isLoading" :rows="5" animated>
            <template slot="template">
                <el-skeleton-item variant="caption" style="width: 100%; height: 100vh;" />
            </template>
            <template>
                <el-table
                    :data="tableData"
                    style="width: 100%"
                    :default-sort="{prop: 'date', order: 'descending'}"
                >
                    <el-table-column prop="id" label="序号" width="80"></el-table-column>
                    <el-table-column prop="cover_url" label="封面" width="200">
                        <template slot-scope="scope">
                            <el-image
                                style="width: 100px;"
                                fit="cover"
                                :preview-src-list="[backend_url + scope.row.cover_url]"
                                :src="backend_url + scope.row.cover_url"
                            ></el-image>
                        </template>
                    </el-table-column>
                    <el-table-column prop="title" label="标题" width="200"></el-table-column>
                    <el-table-column prop="classification" label="分类" width="200"></el-table-column>
                    <el-table-column prop="tags" label="标签" width="200"></el-table-column>
                    <el-table-column prop="create_time" label="发布日期" width="200"></el-table-column>
                    <el-table-column fixed="right" label="操作" width="200">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                            <el-button type="text" size="small">编辑</el-button>
                            <el-button type="text" size="small">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </el-skeleton>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="pageSizeArr"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
        ></el-pagination>
    </div>
</template>

<script>
import { getArticle } from "@/api/admin";
export default {
    data() {
        return {
            isLoading: true, // 根据实际逻辑设定是否加载中
            formInline: {
                user: "",
                region: ""
            },
            tableData: [],
            currentPage: 1,
            pageSizeArr: [5, 10, 20, 50],
            pageSize: 10,
            total: 100,
            backend_url: ""
        };
    },
    created() {
        this.getArticleList();
    },
    mounted() {
        this.backend_url =
            process.env.VUE_APP_BACKEND_URL || "http://localhost:3000";
    },
    methods: {
        async getArticleList() {
            const res = await getArticle(this.currentPage, this.pageSize);
            this.tableData = res.data.data;
            this.total = res.data.totalCount;
            
            // console.log(this.tableData);
            setTimeout(()=>{
                this.isLoading = false
            },1000)
        },
        onSubmit() {
            console.log("submit!");
        },
        handleClick(row) {
            console.log(row);
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pageSize = val;
            this.getArticleList();
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.currentPage = val;
            this.getArticleList();
        }
    }
};
</script>

<style lang="less" scoped>
.main {
    padding: 20px;
}
</style>