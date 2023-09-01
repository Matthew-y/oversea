<template>
    <main class="df">
        <el-menu default-active="2" active-text-color="#ffd04b" class="el-menu-vertical-demo" text-color="#fff" background-color="#545c64" unique-opened
            @open="handleOpen" @close="handleClose">
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>Navigator One</span>
                </template>
                <el-menu-item-group title="Group One">
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title>item four</template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>
                <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <el-icon>
                    <document />
                </el-icon>
                <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
                <el-icon>
                    <setting />
                </el-icon>
                <span>Navigator Four</span>
            </el-menu-item>
        </el-menu>
        <section class="df">
            <div class="page-header p20 dfb">
                <el-breadcrumb class="dfa" separator="/">
                    <el-breadcrumb-item :to="{ path: '/manageSys/user' }">
                        Genshin 管理系统
                    </el-breadcrumb-item>
                    <el-breadcrumb-item>个人中心</el-breadcrumb-item>
                </el-breadcrumb>
                <div class="user-info dfa">
                    <el-avatar :size="32" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                    <el-dropdown trigger="click" @command="handleDropdownClick">
                        <span class="el-dropdown-link pointer">Matt</span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="account">账号信息</el-dropdown-item>
                                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </div>
            <router-view></router-view>
        </section>
    </main>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Props } from '../../interfaces/testInterface'
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'

const router = useRouter()

const dialog: Props = {
    isShow: false,
    defaultName: 'dialog'
}

const menuData: Array<object> = [
    { icon: '', title: '', path: '' },
]

function handleOpen(key: string, keyPath: string) {
    console.log(`key${key}`)
    console.log(`keyPath${keyPath}`)
}

function handleClose(key: string, keyPath: string):void {
    console.log(`key${key}`)
    console.log(`keyPath${keyPath}`)
}

function handleDropdownClick(command: string) {
    if(command === 'account') router.push('/account')
    if(command === 'logout') handleLogout()
}

function handleLogout():void {
    localStorage.removeItem('token')
    router.go(0)
}
</script>
<style scoped lang="scss">
main {
    height: 100%;
    display: flex;

    section {
        height: 100;
        flex-direction: column;
        flex-grow: 1;
    }
}

.el-menu {
    width: 300px;
    height: 100%;
}

.el-breadcrumb {}

.page-header {
    padding-right: 40px;
    box-shadow:
        0px 0.6px 0.9px -2px rgba(0, 0, 0, 0.028),
        0px 2px 3.1px -2px rgba(0, 0, 0, 0.042),
        0px 9px 14px -2px rgba(0, 0, 0, 0.07);
}

.user-info {
    .el-avatar {
        border: 1px solid #cdcdcd;
        margin-right: 10px;
    }
}
</style>