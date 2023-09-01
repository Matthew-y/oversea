<template>
    <div>
        <main>
            <el-form :model="form" label-width="100">
                <el-form-item label="用户名：" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary" @click="viewForm">查看</el-button>
            <addDialog title="弹窗" v-model="dialogVisible" @update:visible-change="visibleChange">
                <el-input placeholder="请输入内容" />
            </addDialog>
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import addDialog from '../components/dialog.vue';
let searchKey = ref('')
let dialogVisible = ref(false)

let form = ref({ name: '', password: '' })

function handleSearch() {
    console.log(searchKey.value)
}

function viewForm() {
    console.log(form.value)
}

function handleNew() {
    dialogVisible.value = true
}

function visibleChange(value:boolean) {
    dialogVisible.value = value
}
</script>
<style scoped>
main {
    width: 60%;
    margin: 100px auto;
}
</style>