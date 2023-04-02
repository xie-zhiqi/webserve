<script setup lang='ts'>
type props = {
    className: string
    title: string
    btnTitle?: string
    btnUrl?: string
}
defineProps<props>()
</script>
<template>
    <el-card :class="className">

        <template #hander>
            <span>{{ title }}</span>
            <el-button type="default">{{ btnTitle }}</el-button>
        </template>

        <slot></slot>
    </el-card>
</template>
<style lang='scss' scoped></style>