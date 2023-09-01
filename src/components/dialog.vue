<template>
    <el-dialog width="30%" @close="">
        <slot></slot>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Props {
    isShow: boolean
}

let emits = defineEmits(['update:visibleChange'])

let form = ref({
    id: 1,
    bookName: '',
    author: '',
    typeName: '',
    remarks: '',
    createTime: '',
    updateTime: '',
})
</script>

<style scoped></style>