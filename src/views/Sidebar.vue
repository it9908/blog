<template>
    <div class="sidebar">
        <div class="info">
            <div class="circle-animation">
                <img src="../assets/avatar.png" class="rotate-on-hover border-animation" />
            </div>
            <h2>Mxz</h2>
            <div>文章</div>
            <p>0</p>
            <ul class="ul">
                <li><i class="iconfont icon-github"></i>GitHub</li>
                <li><i class="iconfont icon-youxiang"></i>邮箱</li>
                <li><i class="iconfont icon-gitee-fill-round"></i>Gitee</li>
                <li><i class="iconfont icon-bilibili"></i>bilibili</li>
            </ul>
        </div>
        <div class="scroll-notice">
            <div class="title">
                <p>公告栏</p><img src="../assets/gb.png">
            </div>
            <el-divider></el-divider>
            <div class="scroll-content">这里是滚动通知的内容，你可以在这里放置需要滚动的信息。</div>
        </div>
        <div class="announcement">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>推荐文章</span>
                </div>
                <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
            </el-card>
        </div>
    </div>
</template>.

<style lang="less" scoped>
// 头像旋转
.rotate-on-hover {
    transition: transform 0.3s ease-in-out;
}

.rotate-on-hover:hover {
    transform: rotate(360deg);
}

.sidebar {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    .info {
        padding: 16px 0px;
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        background: linear-gradient(135deg, #1a2a6c 0%, #b21f1f 100%);
        color: #dff9fb;
        border-radius: 20px;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease-in-out;

        .ul {
            display: flex;
            flex-direction: column;
            gap: 8px;
            li{
                color: #dff9fb;
                height: 30px;
                line-height: 30px;
                .icon-github,.icon-youxiang{
                    color: #fff;
                }
                .icon-gitee-fill-round{
                    color: #c71d23;
                }

                .icon-bilibili{
                    color: #20b0e3;
                }
            }
            i{
                vertical-align: middle;
                font-size: 28px;
                margin-right: 4px;
            }
        }
    }
    .announcement {
        width: 100%;

        .box-card {
            width: 100%;
            background: linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%);
        }
    }
}

// 公告栏滚动
.scroll-notice {
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    background: #fff;
    border-radius: 10px;
    .title{
        display: flex;
        line-height: 24px;
    }
    img{
        height: 24px;
        vertical-align: middle;
    }
}

.scroll-content {
    height: 30px;
    white-space: nowrap; /* 不换行 */
    animation: scroll 6s linear infinite; /* 调整时间和动画效果 */
}

@keyframes scroll {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
}

// 头像流光效果

.circle-animation {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    img {
        width: 80px;
        height: 80px;
        border-radius: 100%;
    }
}

.border-animation {
    border: 2px solid transparent;
    animation: borderGlow 2s ease-in-out infinite alternate;
    position: absolute;
    transform-origin: center;
}

@keyframes borderGlow {
    0% {
        box-shadow: 0 0 10px rgba(52, 152, 219, 0.7);
    }
    100% {
        box-shadow: 0 0 20px rgba(52, 152, 219, 0.9),
            0 0 40px rgba(52, 152, 219, 0.5);
    }
}

</style>