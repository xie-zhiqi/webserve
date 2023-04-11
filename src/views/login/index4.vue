<script setup lang='ts'>
// 接口
import type { PostSmsLoginPayloadType } from '@/api/sms/type'

import { postSmsSendApi, postSmsLoginApi } from '@/api/sms'

// 引入状态
import { useUserStore } from "@/stores/users"

import { reactive, ref } from 'vue'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import router from '@/router';

// 定义模型
const { login } = useUserStore()

const validatePass = (rule: any, value: any, callback: any) => {
    if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
    } else {
        callback(new Error('请输入正确的手机号'))
    }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value >= 5) {
        callback()
    } else {
        callback(new Error('请输入五位验证码'))
    }
}
const rules = reactive<FormRules>({
    mobile: [{ validator: validatePass, trigger: 'blur' }],
    code: [{ validator: validatePass2, trigger: 'blur' }],
})

// 发送短信验证码
const sms = reactive({
    t: 0,
    msg: "获取验证码",
    tiem: 10,
    disabled: false
})
// 获取验证码
const onSmscode = async () => {

    if (/^1[3-9]\d{9}$/.test(ruleForm.mobile)) {
        sms.disabled = true
        sms.t = setInterval(() => {
            sms.tiem--
            sms.msg = sms.tiem + 's'
            if (sms.tiem == 0) {
                clearInterval(sms.t)
                sms.tiem = 10
                sms.msg = "获取验证码"
                sms.disabled = false
            }
        }, 1000)
        const { state, msg } = await postSmsSendApi(ruleForm)
        if (state === 201) {
            ElMessage.success(msg)
        } else {
            ElMessage.error(msg)
        }
    } else {
        ElMessage.error("请输入手机号")
    }
}

const ruleForm = reactive<PostSmsLoginPayloadType>({
    mobile: '',
    code: '',
})

const ruleFormRef = ref()
const submitForm = () => {
    if (!ruleFormRef.value) return
    ruleFormRef.value.validate(async (valid: boolean) => {
        if (valid) {
            // const { state, msg, token, roleName, username } = await postSmsLoginApi(ruleForm)
            // // const res = await postSmsLoginApi(ruleForm)
            // // console.log(res)
            // localStorage.setItem('token', token)
            // localStorage.setItem('roleName', roleName)
            // localStorage.setItem('username', username)
            // if (state === 200) {
            //     router.push("/")
            //     ElMessage.success(msg)
            // } else {
            //     ElMessage.error(msg)
            // }
            const { state, msg } = await login(ruleForm, postSmsLoginApi)
            if (state === 200) {
                ElMessage.success(msg)
                router.push("/")
            } else {
                ElMessage.error(msg)
            }

        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>
<template>
    <div class="divbox ">
        <div class="divbox1 animate__animated  animate__lightSpeedInRight">
            <h1 style="color: white;">weavers运营平台🍍</h1>
            <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="20px" class="demo-ruleForm">
                <el-form-item prop="mobile">
                    <el-input v-model.number="ruleForm.mobile" type="" autocomplete="off" placeholder="请输入手机号"
                        width="300" />
                </el-form-item>
                <el-form-item prop="code">
                    <el-input v-model="ruleForm.code" type="text" autocomplete="off" class="input2" placeholder="请输入验证" />
                    <!-- disabled -->
                    <el-button :disabled="sms.disabled" class="button2" @click="onSmscode">{{ sms.msg }}</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button @click="resetForm(ruleFormRef)">重置</el-button>
                    <el-button type="primary" @click="submitForm">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<style lang='scss' scoped>
.divbox {
    width: 100%;
    height: 100%;
    background-color: #303a4a;
    display: flex;
    align-items: center;
    justify-content: center;

    .divbox1 {
        width: 400px;
        height: 400px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        :deep(.el-input) {
            height: 40px;
            width: 300px;
        }

        :deep(.el-form) {
            margin-top: 5%;
        }

        .el-button.el-button {
            height: 40px;
        }

        .el-button+.el-button {
            height: 40px;
            width: 76%;
        }
    }
}

.input2 {
    width: 200px !important;
    border: none !important;
    border-radius: none;
}

.button2 {
    height: 40px;
    width: 100px;
    background-color: #fff;
    border: none;
    color: rgb(167, 164, 164);
    cursor: pointer;
}

.button2:hover {
    color: rgb(101, 101, 226);
}
</style>