<template>
    <div class="details">
        <div class="breadcrumb">
            <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>-->
            <el-page-header @back="goBack()" content="详情页面"></el-page-header>
        </div>
        <el-divider></el-divider>
        <el-main>
            <div class="main-title">
                <h1>{{article.title}}</h1>
                <ul class="ul">
                    <li>标签：{{article.tags}}</li>
                    <li>分类：{{article.classification}}</li>
                    <li>浏览量：{{article.read_total}}</li>
                    <li>发布时间：{{article.create_time}}</li>
                </ul>
            </div>
            <el-divider></el-divider>
            <div class="main" v-highlight v-html="article.context"></div>
        </el-main>
        <el-divider></el-divider>
        <div class="comment-app">
            <div class="title">
                <h2>评论</h2>
            </div>
            <el-divider></el-divider>
            <div class="list" v-for="item in comments" :key="item.id">
                <img src="../assets/user.png" alt srcset />
                <div class="right">
                    <div class="box">
                        <div class="name">{{item.name}}</div>
                        <span class="time">{{item.create_time}}</span>
                    </div>
                    <div class="comment">{{item.content}}</div>
                </div>
            </div>
            <el-divider></el-divider>
            <div class="form-box">
                <el-form ref="form" :mode="form" label-width="80px">
                    <el-form-item label="昵称">
                        <el-input placeholder="留下您的昵称" v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="内容">
                        <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="form.content"
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="small" @click="release">发送</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import {
    getArticle,
    updateViewCount,
    getComments,
    postComments
} from "../api/user";
export default {
    name: "DetailPage",
    data() {
        return {
            article: [],
            articleId: undefined,
            comments: [],
            form: {
                name: "",
                content: "",
                articleId: undefined
            },
            currentPage: undefined
        };
    },
    mounted() {
        // console.log(this.$route);
        this.articleId = this.$route.params.articleId;
        this.currentPage = this.$route.params.currentPage;
        // console.log(this.$route.params.currentPage);
        this.form.articleId = this.articleId;
        this.getArticles();
        this.getListComments();
    },
    methods: {
        async release() {
            const res = await postComments(this.form);
            console.log(res);
            this.form.name = "";
            this.form.content = "";
            this.getListComments();
        },
        // 获取评论
        async getListComments() {
            const res = await getComments(this.articleId);
            this.comments = res.data.data;
            console.log(this.comments);
        },
        async getArticles() {
            const res = await getArticle(this.articleId);
            this.article = res.data.article;
            // 更新浏览量
            await updateViewCount(this.articleId);
        },
        // 返回首页
        goBack() {
            console.log(this.currentPage);
            this.$router.replace({
                name: "Articles2",
                params: { currentPage: this.currentPage }
            });
        }
    }
};
</script>

<style lang="less" scoped>
.details {
    background: #ffffff;
}
.breadcrumb {
    padding: 20px 20px 0px 20px;
}
h1 {
    text-align: center;
}
.ul {
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    padding: 0 2rem;
}
.comment-app {
    width: 80%;
    margin: 0 auto;
    padding: 0px 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .list {
        width: 100%;
        display: flex;
        gap: 10px;
        .right {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 16px;
            .box {
                width: 100%;
                display: flex;
                justify-content: space-between;
                .name {
                    font-weight: 700;
                    line-height: 30px;
                }
                .time {
                    font-size: 12px;
                    color: #f0b9b9;
                }
            }
        }
    }
    .form-box {
        width: 80%;
        margin: 0 auto;
    }
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
}
.main {
    padding: 0 1rem;
}
/deep/pre code.hljs {
    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.6); /* 添加阴影效果 */
    // border-radius: 10px;
    margin: 2rem 0;

    &::-webkit-scrollbar {
        width: 8px; /* 设置滚动条宽度 */
        height: 10px; /* 设置滚动条高度 */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #888; /* 设置滚动条滑块颜色 */
        border-radius: 4px; /* 设置滑块的圆角 */
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #555; /* 鼠标悬停时的滑块颜色 */
    }

    &::-webkit-scrollbar-track {
        background-color: #000000; /* 设置滚动条轨道背景色 */
    }
}
</style>