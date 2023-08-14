<template>
    <div class="articl">
        <div class="autocomplete">
            <el-autocomplete
                icon="el-icon-search"
                v-model="state"
                size="small"
                :fetch-suggestions="querySearchAsync"
                placeholder="searching..."
                @select="handleSelect"
            ></el-autocomplete>
        </div>
        <div
            class="list"
            v-for="item in listArticl"
            :key="item.id"
            @click="goDetailPage(item.id)"
        >
            <el-row type="flex" justify="space-between">
                <el-col :span="20">
                    <div class="router-box">{{item.title}}</div>
                    <ul class="ul">
                        <li>
                            <img src="../assets/tags.png" />标签：Java
                        </li>
                        <li>
                            <img src="../assets/classification.png" />分类：技术
                        </li>
                        <li>
                            <img src="../assets/rend.png" />浏览量：300
                        </li>
                        <li>
                            <img src="../assets/time.png" />
                            发布时时间：{{item.create_time}}
                        </li>
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
            restaurants: [],
            state: "",
            timeout: null,
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
    mounted() {
        this.restaurants = this.loadAll();
    },
    methods: {

        // 详情页
        goDetailPage(articleId) {
            alert(articleId);
            this.$router.push({
                path: `details/${articleId}`,
                params: { articleId }
            });

        },
        loadAll() {
            return [
                { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
                {
                    value: "Hot honey 首尔炸鸡（仙霞路）",
                    address: "上海市长宁区淞虹路661号"
                },
                {
                    value: "新旺角茶餐厅",
                    address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
                },
                { value: "泷千家(天山西路店)", address: "天山西路438号" },
                {
                    value: "胖仙女纸杯蛋糕（上海凌空店）",
                    address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
                },
                { value: "贡茶", address: "上海市长宁区金钟路633号" },
                {
                    value: "豪大大香鸡排超级奶爸",
                    address: "上海市嘉定区曹安公路曹安路1685号"
                },
                {
                    value: "茶芝兰（奶茶，手抓饼）",
                    address: "上海市普陀区同普路1435号"
                },
                { value: "十二泷町", address: "上海市北翟路1444弄81号B幢-107" },
                { value: "星移浓缩咖啡", address: "上海市嘉定区新郁路817号" },
                { value: "阿姨奶茶/豪大大", address: "嘉定区曹安路1611号" },
                {
                    value: "新麦甜四季甜品炸鸡",
                    address: "嘉定区曹安公路2383弄55号"
                },
                {
                    value: "Monica摩托主题咖啡店",
                    address: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"
                },
                {
                    value: "浮生若茶（凌空soho店）",
                    address: "上海长宁区金钟路968号9号楼地下一层"
                },
                {
                    value: "NONO JUICE  鲜榨果汁",
                    address: "上海市长宁区天山西路119号"
                },
                {
                    value: "CoCo都可(北新泾店）",
                    address: "上海市长宁区仙霞西路"
                },
                {
                    value: "快乐柠檬（神州智慧店）",
                    address: "上海市长宁区天山西路567号1层R117号店铺"
                },
                {
                    value: "Merci Paul cafe",
                    address: "上海市普陀区光复西路丹巴路28弄6号楼819"
                },
                {
                    value: "猫山王（西郊百联店）",
                    address: "上海市长宁区仙霞西路88号第一层G05-F01-1-306"
                },
                { value: "枪会山", address: "上海市普陀区棕榈路" },
                { value: "纵食", address: "元丰天山花园(东门) 双流路267号" },
                { value: "钱记", address: "上海市长宁区天山西路" },
                { value: "壹杯加", address: "上海市长宁区通协路" },
                {
                    value: "唦哇嘀咖",
                    address:
                        "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"
                },
                {
                    value: "爱茜茜里(西郊百联)",
                    address: "长宁区仙霞西路88号1305室"
                },
                {
                    value: "爱茜茜里(近铁广场)",
                    address:
                        "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"
                },
                {
                    value: "鲜果榨汁（金沙江路和美广店）",
                    address: "普陀区金沙江路2239号金沙和美广场B1-10-6"
                },
                {
                    value: "开心丽果（缤谷店）",
                    address: "上海市长宁区威宁路天山路341号"
                },
                {
                    value: "超级鸡车（丰庄路店）",
                    address: "上海市嘉定区丰庄路240号"
                },
                {
                    value: "妙生活果园（北新泾店）",
                    address: "长宁区新渔路144号"
                },
                { value: "香宜度麻辣香锅", address: "长宁区淞虹路148号" },
                {
                    value: "凡仔汉堡（老真北路店）",
                    address: "上海市普陀区老真北路160号"
                },
                {
                    value: "港式小铺",
                    address: "上海市长宁区金钟路968号15楼15-105室"
                },
                { value: "蜀香源麻辣香锅（剑河路店）", address: "剑河路443-1" },
                {
                    value: "北京饺子馆",
                    address: "长宁区北新泾街道天山西路490-1号"
                },
                {
                    value: "饭典*新简餐（凌空SOHO店）",
                    address: "上海市长宁区金钟路968号9号楼地下一层9-83室"
                },
                {
                    value: "焦耳·川式快餐（金钟路店）",
                    address: "上海市金钟路633号地下一层甲部"
                },
                { value: "动力鸡车", address: "长宁区仙霞西路299弄3号101B" },
                { value: "浏阳蒸菜", address: "天山西路430号" },
                {
                    value: "四海游龙（天山西路店）",
                    address: "上海市长宁区天山西路"
                },
                {
                    value: "樱花食堂（凌空店）",
                    address: "上海市长宁区金钟路968号15楼15-105室"
                },
                {
                    value: "壹分米客家传统调制米粉(天山店)",
                    address: "天山西路428号"
                },
                {
                    value: "福荣祥烧腊（平溪路店）",
                    address: "上海市长宁区协和路福泉路255弄57-73号"
                },
                {
                    value: "速记黄焖鸡米饭",
                    address: "上海市长宁区北新泾街道金钟路180号1层01号摊位"
                },
                { value: "红辣椒麻辣烫", address: "上海市长宁区天山西路492号" },
                {
                    value: "(小杨生煎)西郊百联餐厅",
                    address: "长宁区仙霞西路88号百联2楼"
                },
                { value: "阳阳麻辣烫", address: "天山西路389号" },
                {
                    value: "南拳妈妈龙虾盖浇饭",
                    address: "普陀区金沙江路1699号鑫乐惠美食广场A13"
                }
            ];
        },
        querySearchAsync(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString
                ? restaurants.filter(this.createStateFilter(queryString))
                : restaurants;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                cb(results);
            }, 3000 * Math.random());
        },
        createStateFilter(queryString) {
            return state => {
                return (
                    state.value
                        .toLowerCase()
                        .indexOf(queryString.toLowerCase()) === 0
                );
            };
        },
        handleSelect(item) {
            console.log(item);
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
    padding: 8px 20px;
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
