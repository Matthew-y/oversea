<template>
    <main>
        <div class="login-container p20 center">
            <div class="login-title mb20">请登录</div>
            <el-form :model="form" label-width="80" :rules="rules">
                <el-form-item label="用户名：" prop="account">
                    <el-input v-model="form.account" placeholder="请输入用户名" clearable/>
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input v-model="form.password" type="password" placeholder="请输入密码" clearable/>
                </el-form-item>
            </el-form>
            <el-button @click="validateLoginForm" type="primary">确定</el-button>
        </div>
    </main>
</template>
<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { handleAccountLogin } from '../api/authentication'

const proxy = getCurrentInstance()
const router = useRouter()

const rules: object = {
    account: { required: true, message: '请输入用户名', trigger: 'blur' },
    password: { required: true, message: '请输入密码', trigger: 'blur' }
}

let form = ref({ account: '', password: '' })

// 校验用户名&密码
function validateLoginForm (valid: boolean) {
    if(!valid) return
    handleLogin()
}

// 登录
async function handleLogin() {
    let res = await handleAccountLogin(form.value)
    console.log(res)
    form.value.account = ''
    form.value.password = ''
    router.push('/')
}
</script>
<style scoped lang="scss">
main {
    height: 100%;
    padding-top: 25%;
}
.login-container {
    width: 400px;
    border: 1px solid #cdcdcd;
    border-radius: 5px;
}
</style>