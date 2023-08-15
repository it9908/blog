<template>
    <div class="articl">
        <div class="autocomplete">
            <el-autocomplete
                v-model="keyWord"
                size="small"
                :trigger-on-focus="false"
                :fetch-suggestions="querySearchAsync"
                placeholder="searching..."
                @keyup.enter.native="searchEneter"
                @select="handleSelect"
                @input="changeStyle('block', '.el-autocomplete-suggestion')"
                @keyup="changeStyle('block', '.el-autocomplete-suggestion')"
            ></el-autocomplete>
        </div>
        <div class="list" v-for="item in listArticl" :key="item.id" @click="goDetailPage(item.id)">
            <el-row type="flex" justify="space-between">
                <el-col :span="20">
                    <div class="router-box">{{item.title}}</div>
                    <ul class="ul">
                        <li>
                            <img src="../assets/tags.png" />
                            标签：{{item.tags}}
                        </li>
                        <li>
                            <img src="../assets/classification.png" />
                            分类：{{item.classification}}
                        </li>
                        <li>
                            <img src="../assets/rend.png" />
                            浏览量：{{item.read_total}}
                        </li>
                        <li>
                            <img src="../assets/time.png" />
                            发布时时间：{{item.create_time}}
                        </li>
                    </ul>
                </el-col>
                <el-col :span="4">
                    <el-image style="width: 200px; height: 100%" :src="item.cover_url" fit="cover"></el-image>
                </el-col>
            </el-row>
        </div>
        <div class="pagination">
            <el-pagination
                background
                @current-change="handleCurrentChange"
                layout="prev, pager, next"
                :current-page="currentPage"
                :page-size="pageSize"
                :total="total"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
import { getListArticle, getKeyWord, search } from "@/api/user";
export default {
    name: "HomeView",
    data() {
        return {
            keyWord: "",
            timeout: null,
            listArticl: [],
            total: null,
            currentPage: 1,
            pageSize: 7,
            keyWordAll: []
        };
    },
    mounted() {
        this.getListArticles();
    },
    methods: {
        // 获取联想关键字列表
        async querySearchAsync(queryString, cb) {
            try {
                const res = await getKeyWord(this.keyWord);
                this.keyWordAll = res.data.data;
                // console.log(this.keyWordAll);
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    cb(this.keyWordAll);
                }, 1000 * Math.random());
            } catch (error) {
                console.error(error);
            }
        },
        createStateFilter(queryString) {
            return keyWord => {
                return (
                    keyWord.value
                        .toLowerCase()
                        .indexOf(queryString.toLowerCase()) === 0
                );
            };
        },
        // 回车搜索
        async searchEneter() {
            const res = await search(this.keyWord);
            // console.log(res);
            this.listArticl = res.data.data;
            this.changeStyle("none", ".el-autocomplete-suggestion");
        },
        // 选中提示关键字触发
        async handleSelect(item) {
            this.keyWord = item.value;
            // console.log(this.keyWord);
            const res = await search(this.keyWord);
            // console.log(res);
            this.listArticl = res.data.data;
        },
        //根据传进来的状态改变建议输入框的状态（展开|隐藏）
        changeStyle(status, className) {
            let dom = document.querySelectorAll(className);
            dom[0].style.display = status;
        },
        // 换页
        handleCurrentChange(val) {
            this.currentPage = val;
            this.getListArticles();
        },
        // 获取文章列表
        async getListArticles() {
            const res = await getListArticle(this.currentPage, this.pageSize);
            this.listArticl = res.data.data;
            this.total = res.data.total;
        },
        // 详情页
        goDetailPage(articleId) {
            this.$router.push({
                path: `details/${articleId}`,
                params: { articleId }
            });
        }
    }
};
</script>

<style lang="less" scoped>
.articl {
    padding: 8px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    .autocomplete {
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-end;
    }
    .pagination {
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
    }
}
.list {
    padding: 8px 16px;
    box-sizing: border-box;
    border-bottom: 1px solid #ffffff;
    position: relative;
    color: #f5f5f7;
    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    img {
        width: 100%;
        height: 100%;
    }
    .ul {
        display: flex;
        gap: 14px;
        position: absolute;
        bottom: 0;
        li {
            font-size: 12px;
            color: #ebeef5;
            img {
                margin: 0px 4px;
                width: 22px;
                vertical-align: middle;
            }
        }
    }
}
</style>
