<template>
    <div class="articl">
        <div class="list" v-for="item in listArticl" :key="item.id" @click="goDetailPage(item.id)">
            <el-row type="flex" justify="space-between">
                <el-col :span="20">
                    <div class="router-box">{{item.title}}</div>
                    <ul class="ul">
                        <li>标签：Java</li>
                        <li>分类：技术</li>
                        <li>浏览量：300</li>
                        <li>发布时时间：{{item.create_time}}</li>
                    </ul>
                </el-col>
                <el-col :span="4">
                    <img src="../assets/bg.jpg" />
                </el-col>
            </el-row>
        </div>
        <div class="pagination">
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeView",
    data() {
        return {
            listArticl: [
                {
                    id: 1,
                    cover_url: "../assets/logo.png",
                    title: "Java的发展历史",
                    contextL: `<p>Java是在1991年由SUN公司的James Gosling（Java之父）及其团队
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
                    contextL: `<p>Java是在1991年由SUN公司的James Gosling（Java之父）及其团队
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
                    contextL: `<p>Java是在1991年由SUN公司的James Gosling（Java之父）及其团队
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
                    contextL: `<p>Java是在1991年由SUN公司的James Gosling（Java之父）及其团队
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
                    contextL: `<p>Java是在1991年由SUN公司的James Gosling（Java之父）及其团队
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
                    contextL: `<p>Java是在1991年由SUN公司的James Gosling（Java之父）及其团队
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
                    contextL: `<p>Java是在1991年由SUN公司的James Gosling（Java之父）及其团队
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
    methods: {
        // 详情页
        goDetailPage(articleId) {
            alert(articleId);
            this.$router.push({ path: `/details/${articleId}`, params: { articleId } });
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
    .pagination {
        display: flex;
        justify-content: center;
    }
}
.list {
    padding: 8px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #ffffff;
    position: relative;
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
            font-size: 10px;
        }
    }
}
</style>
