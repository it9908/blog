<template>
    <div class="login">
        <h1>博客后台管理系统</h1>
        <div class="form-box">
            <el-form label-position="top" label-width="80px" :model="formData" size="small">
                <el-form-item>
                    <el-input v-model="formData.username" placeholder="用户名/账户"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="formData.password" placeholder="密码" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="login">登录</el-button>
                </el-form-item>
                <el-form-item>
                    <div class="goback-btn">
                        <span>
                            <a href="#" @click="goBack">返回主页</a>
                        </span>
                    </div>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { Login } from "../api/user";
export default {
    name: "LoginPage",
    beforeRouteEnter(to, from, next) {
        // 使用回调函数获取组件实例
        next(vm => {
            // 获取登录状态
            const isLoggedIn = vm.isLoggedIn;
            if (isLoggedIn) {
                // 已登录，跳转到目标页面
                next("/console"); // 修改为你的目标页面路由
            } else {
                next();
            }
        });
    },
    computed: {
        ...mapState("auth", ["isLoggedIn"])
    },
    data() {
        return {
            formData: {
                username: "",
                password: ""
            }
        };
    },
    mounted() {},
    methods: {
        async login() {
            const res = await Login(this.formData);
            console.log(res);
            localStorage.setItem("token", res.data.token);
            if (res.data.code === 200) {
                // 存储登录状态到 Vuex
                this.$store.dispatch("auth/loginSuccess");
                // 动态添加路由
                this.$router.addRoute({
                    path: "/console",
                    name: "Console",
                    redirect: "/console/home",
                    meta: {
                        title: "控制台"
                    },
                    component: () => import("../views/consoles/Layout.vue"),
                    children: [
                        {
                            path: "home",
                            meta: {
                                title: "首页"
                            },
                            component: () =>
                                import("../views/consoles/Home.vue")
                        },
                        {
                            path: "articles",
                            meta: {
                                title: "文章管理"
                            },
                            component: () =>
                                import("../views/consoles/ArticleManage.vue")
                        },
                        {
                            path: "commemts",
                            meta: {
                                title: "评论管理"
                            },
                            component: () =>
                                import("../views/consoles/CommentManage.vue")
                        },
                        {
                            path: "release",
                            meta: {
                                title: "发布文章"
                            },
                            component: () =>
                                import(
                                    "../views/consoles/ArticlePublishing.vue"
                                )
                        }
                    ]
                });
                this.$router.push({ path: "/console" });
            }
        },
        goBack() {
            this.$router.replace({ path: "/" });
        }
    }
};
</script>

<style lang="less" scoped>
.el-button {
    width: 100%;
}
.login {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url("../assets/bg.jpg") no-repeat;
    background-size: 100% auto;
    h1 {
        color: #ffffff;
    }
}
.form-box {
    padding: 36px 20px 0px;
    width: 200px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.3);
    .el-form {
        height: 100%;
    }
}
.goback-btn {
    display: flex;
    justify-content: end;

    span a {
        font-size: 12px;
        color: red;
        &:hover {
            border-bottom: 1px solid red;
        }
    }
}
</style>