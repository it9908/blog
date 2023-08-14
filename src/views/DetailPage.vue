<template>
    <div class="details">
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-divider></el-divider>
        <el-main>
            <div class="main-title">
                <h1>JavaWeb的发展</h1>
                <ul class="ul">
                    <li>标签：Java</li>
                    <li>分类：技术</li>
                    <li>浏览量：300</li>
                    <li>发布时时间：2023-8-14</li>
                </ul>
            </div>
            <el-divider></el-divider>
            <div class="main" v-html="listArticl[0].context"></div>
        </el-main>
        <div class="comment-app">
    <h2 class="app-title">评论列表</h2>
    <el-card class="comment-list">
      <el-comment v-for="(comment, index) in comments" :key="index" class="comment-item">
        <el-comment-avatar>
          <img src="avatar.jpg" alt="Avatar" class="avatar">
        </el-comment-avatar>
        <el-comment-content>
          <el-comment-header>
            <span class="comment-author">{{ comment.author }}</span>
            <span class="comment-timestamp">{{ timeAgo(comment.timestamp) }}</span>
          </el-comment-header>
          <p class="comment-text">{{ comment.text }}</p>
        </el-comment-content>
      </el-comment>
    </el-card>

    <h2 class="app-title">发布评论</h2>
    <el-card class="comment-form">
      <el-form :model="newComment" label-position="top" class="form">
        <el-form-item label="作者">
          <el-input v-model="newComment.author" class="input-field"></el-input>
        </el-form-item>
        <el-form-item label="评论内容">
          <el-input type="textarea" v-model="newComment.text" class="input-field"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitComment" class="submit-button">发布评论</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            articleId: undefined,
            listArticl: [
                {
                    id: 1,
                    cover_url: "../assets/logo.png",
                    title: "Java的发展历史",
                    context: `<p>Java是在1991年由SUN公司的James Gosling（Java之父）及其团队
                    所研发的一种编程语言，第一个版本耗时18个月，最开始命名为Oak（一种橡树）。Java现在
                    广泛应用于各种大型互联网应用，其设计的最初动机主要是平台独立（即体系结构中立）语言的
                    需要，可以嵌入到各种消费类电子设备（家用电器等），但市场反应不佳。
                    随着1990年代互联网的发展，SUN公司看到了Oak在互联网上的
                    应用场景，在1995年更名为Java（印度尼西亚爪哇岛的英文名称，因盛产咖啡而
                    闻名），随着互联网的崛起，Java逐渐称为重要的Web应用开发语言。Java的发展可以主要看
                    JavaWeb的发展，Java也见证了互联网的发展过程。</p>`,
                    create_time: "2023/8/14 13:34:23",
                    reading_num: 80
                },
                {
                    id: 2,
                    cover_url: "../assets/logo.png",
                    title: "Java的发展历史",
                    context: `<p>Java是在1991年由SUN公司的James Gosling（Java之父）及其团队
                    所研发的一种编程语言，第一个版本耗时18个月，最开始命名为Oak（一种橡树）。Java现在
                    广泛应用于各种大型互联网应用，其设计的最初动机主要是平台独立（即体系结构中立）语言的
                    需要，可以嵌入到各种消费类电子设备（家用电器等），但市场反应不佳。
                    随着1990年代互联网的发展，SUN公司看到了Oak在互联网上的
                    应用场景，在1995年更名为Java（印度尼西亚爪哇岛的英文名称，因盛产咖啡而
                    闻名），随着互联网的崛起，Java逐渐称为重要的Web应用开发语言。Java的发展可以主要看
                    JavaWeb的发展，Java也见证了互联网的发展过程。</p>`,
                    create_time: "2023/8/14 13:34:23",
                    reading_num: 80
                },
                {
                    id: 3,
                    cover_url: "../assets/logo.png",
                    title: "Java的发展历史",
                    context: `<p>Java是在1991年由SUN公司的James Gosling（Java之父）及其团队
                    所研发的一种编程语言，第一个版本耗时18个月，最开始命名为Oak（一种橡树）。Java现在
                    广泛应用于各种大型互联网应用，其设计的最初动机主要是平台独立（即体系结构中立）语言的
                    需要，可以嵌入到各种消费类电子设备（家用电器等），但市场反应不佳。
                    随着1990年代互联网的发展，SUN公司看到了Oak在互联网上的
                    应用场景，在1995年更名为Java（印度尼西亚爪哇岛的英文名称，因盛产咖啡而
                    闻名），随着互联网的崛起，Java逐渐称为重要的Web应用开发语言。Java的发展可以主要看
                    JavaWeb的发展，Java也见证了互联网的发展过程。</p>`,
                    create_time: "2023/8/14 13:34:23",
                    reading_num: 80
                },
                {
                    id: 4,
                    cover_url: "../assets/logo.png",
                    title: "Java的发展历史",
                    context: `<p>Java是在1991年由SUN公司的James Gosling（Java之父）及其团队
                    所研发的一种编程语言，第一个版本耗时18个月，最开始命名为Oak（一种橡树）。Java现在
                    广泛应用于各种大型互联网应用，其设计的最初动机主要是平台独立（即体系结构中立）语言的
                    需要，可以嵌入到各种消费类电子设备（家用电器等），但市场反应不佳。
                    随着1990年代互联网的发展，SUN公司看到了Oak在互联网上的
                    应用场景，在1995年更名为Java（印度尼西亚爪哇岛的英文名称，因盛产咖啡而
                    闻名），随着互联网的崛起，Java逐渐称为重要的Web应用开发语言。Java的发展可以主要看
                    JavaWeb的发展，Java也见证了互联网的发展过程。</p>`,
                    create_time: "2023/8/14 13:34:23",
                    reading_num: 80
                },
                {
                    id: 5,
                    cover_url: "../assets/logo.png",
                    title: "Java的发展历史",
                    context: `<p>Java是在1991年由SUN公司的James Gosling（Java之父）及其团队
                    所研发的一种编程语言，第一个版本耗时18个月，最开始命名为Oak（一种橡树）。Java现在
                    广泛应用于各种大型互联网应用，其设计的最初动机主要是平台独立（即体系结构中立）语言的
                    需要，可以嵌入到各种消费类电子设备（家用电器等），但市场反应不佳。
                    随着1990年代互联网的发展，SUN公司看到了Oak在互联网上的
                    应用场景，在1995年更名为Java（印度尼西亚爪哇岛的英文名称，因盛产咖啡而
                    闻名），随着互联网的崛起，Java逐渐称为重要的Web应用开发语言。Java的发展可以主要看
                    JavaWeb的发展，Java也见证了互联网的发展过程。</p>`,
                    create_time: "2023/8/14 13:34:23",
                    reading_num: 80
                },
                {
                    id: 6,
                    cover_url: "../assets/logo.png",
                    title: "Java的发展历史",
                    context: `<p>Java是在1991年由SUN公司的James Gosling（Java之父）及其团队
                    所研发的一种编程语言，第一个版本耗时18个月，最开始命名为Oak（一种橡树）。Java现在
                    广泛应用于各种大型互联网应用，其设计的最初动机主要是平台独立（即体系结构中立）语言的
                    需要，可以嵌入到各种消费类电子设备（家用电器等），但市场反应不佳。
                    随着1990年代互联网的发展，SUN公司看到了Oak在互联网上的
                    应用场景，在1995年更名为Java（印度尼西亚爪哇岛的英文名称，因盛产咖啡而
                    闻名），随着互联网的崛起，Java逐渐称为重要的Web应用开发语言。Java的发展可以主要看
                    JavaWeb的发展，Java也见证了互联网的发展过程。</p>`,
                    create_time: "2023/8/14 13:34:23",
                    reading_num: 80
                },
                {
                    id: 7,
                    cover_url: "../assets/logo.png",
                    title: "Java的发展历史",
                    context: `<p>Java是在1991年由SUN公司的James Gosling（Java之父）及其团队
                    所研发的一种编程语言，第一个版本耗时18个月，最开始命名为Oak（一种橡树）。Java现在
                    广泛应用于各种大型互联网应用，其设计的最初动机主要是平台独立（即体系结构中立）语言的
                    需要，可以嵌入到各种消费类电子设备（家用电器等），但市场反应不佳。
                    随着1990年代互联网的发展，SUN公司看到了Oak在互联网上的
                    应用场景，在1995年更名为Java（印度尼西亚爪哇岛的英文名称，因盛产咖啡而
                    闻名），随着互联网的崛起，Java逐渐称为重要的Web应用开发语言。Java的发展可以主要看
                    JavaWeb的发展，Java也见证了互联网的发展过程。</p>`,
                    create_time: "2023/8/14 13:34:23",
                    reading_num: 80
                }
            ],
            comments: [
                {
                    author: "User1",
                    text: "这是第一条评论",
                    timestamp: "2023-08-14 10:00"
                },
                {
                    author: "User2",
                    text: "这是第二条评论",
                    timestamp: "2023-08-14 11:30"
                }
                // ... 更多评论
            ],
            newComment: {
                author: "",
                text: ""
            }
        };
    },
    mounted() {
        this.articleId = this.$route.params.articleId;
    },
    methods: {
       
        timeAgo(timestamp) {
            // 实现一个函数来计算时间差并返回一个友好的时间描述，比如 "5分钟前"
            // 可以使用日期库来辅助处理时间
        },
        submitComment() {
            if (this.newComment.author && this.newComment.text) {
                this.newComment.timestamp = new Date().toLocaleString();
                this.comments.push({ ...this.newComment });
                this.newComment.author = "";
                this.newComment.text = "";
            }
        }
    }
};
</script>

<style lang="less" scoped>
.details {
    background: #dfe6e9;
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
}

.comment-app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.app-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.comment-list {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}

.comment-item {
  margin-bottom: 20px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.comment-author {
  font-weight: bold;
  margin-right: 10px;
}

.comment-timestamp {
  font-size: 14px;
  color: #888;
}

.comment-text {
  margin-top: 5px;
}

.comment-form {
  border: 1px solid #ccc;
  padding: 20px;
}

.form {
  max-width: 400px;
  margin: 0 auto;
}

.input-field {
  width: 100%;
}

.submit-button {
  width: 100%;
}

</style>