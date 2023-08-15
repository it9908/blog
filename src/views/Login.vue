<template>
    <div class="login">
        <h1>博客后台管理系统</h1>
        <div class="form-box">
            <el-form label-position="top" label-width="80px" :model="formLabelAlign" size="small">
                <el-form-item>
                    <el-input v-model="formLabelAlign.name" placeholder="用户名/账户"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="formLabelAlign.region" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="Login">登录</el-button>
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
export default {
    name: "LoginPage",
    data() {
        return {
            formLabelAlign: {
                name: "",
                region: "",
                type: ""
            }
        };
    },
    mounted() {},
    methods: {
        Login() {
            alert("登录");
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