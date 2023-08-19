<style lang="less" scoped>
.nav {
    width: 100%;
    z-index: 2010;
    padding: 0 1rem;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    height: 3rem;
    line-height: 3rem;
    background: #487eb0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .avatar {
        display: flex;
        align-items: center;
        color: #ffffff;
        p {
            margin-right: 0.625rem;
        }
        img {
            width: 34px;
            height: 34px;
            border-radius: 50%;
        }
    }
}
.el-breadcrumb__inner a,
/deep/.el-breadcrumb__inner.is-link {
    color: #ffffff;
}
</style>

<template>
    <div class="nav">
        <div class="avatar">
            <p>欢迎回来：{{info.name}}</p>
            <img :src="backend_url+info.avatar_url" alt srcset />
        </div>
    </div>
</template>

<script>
import { getProfile } from "@/api/admin";
export default {
    name: "",
    data() {
        return {
            info: [],
            backend_url: ""
        };
    },
    mounted() {
        this.getProfiles();
        this.backend_url =
            process.env.VUE_APP_BACKEND_URL || "http://localhost:3000";
    },
    methods: {
        async getProfiles() {
            const res = await getProfile();
            console.log(res);
            this.info = res.data.profile;
        }
    }
};
</script>