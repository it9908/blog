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
            ]
        };
    },
    mounted() {
        this.articleId = this.$route.params.articleId;
    }
};
</script>

<style lang="less" scoped>
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
</style>