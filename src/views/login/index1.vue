<script setup lang='ts'>
// 接口
import { postLoginApi } from "@/api/login"
import { reactive, ref } from 'vue'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
// pinai模块
import { useUserStore } from "@/stores/users"
import router from "@/router";

const { login } = useUserStore()

const ruleFormRef = ref<FormInstance>()


const validatePass = (rule: any, value: any, callback: any) => {
    if (value === "") {

        callback(new Error("请输入正确的用户名"))
    } else {
        callback()
    }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === "") {
        callback(new Error("请输入正确的用户名"))
    } else {
        callback()
    }
}

const ruleForm = reactive({
    username: '神龙教主',
    password: 'admin888',
})

const rules = reactive<FormRules>({
    username: [{ validator: validatePass, trigger: 'blur' }],
    password: [{ validator: validatePass2, trigger: 'blur' }],
})

const submitForm = () => {
    if (!ruleFormRef.value) return
    ruleFormRef.value?.validate(async (valid) => {
        if (valid) {
            const { state, msg } = await login(ruleForm, postLoginApi)
            if (state === 200) {
                ElMessage.success(msg)
                router.push("/")
            } else {
                ElMessage.error(msg)
            }

        }
    })
}

// const resetForm = (formEl: FormInstance | undefined) => {
//     if (!formEl) return
//     formEl.resetFields()
// }
</script>
<template>
    <div class="divbox">
        <div class="divbox0">
            <div class="divbox1">
                <img src="../../assets/login1Bg.png" alt="">
            </div>
            <div class="divbox2">
                <div class="divlogo">
                    <img src="@/assets/logo.png" alt="">
                    <h1>weaver运营平台</h1>
                </div>
                <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="50px"
                    class="demo-ruleForm">
                    <el-form-item label="账户" prop="username">
                        <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
                    </el-form-item>

                    <el-form-item>
                        <el-button class="loginbox" type="primary" @click="submitForm">登录</el-button>
                        <!-- <el-button @click="resetForm(ruleFormRef)">Reset</el-button> -->
                    </el-form-item>
                </el-form>
            </div>
        </div>

    </div>
</template>
<style lang='scss' scoped>
.divbox {
    width: 100%;
    height: 100%;
    background-color: #f0f2f5;
    display: flex;
    align-items: center;
    justify-content: center;

    .divbox0 {
        width: 97%;
        height: 97%;
        background-color: #fff;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;

        .divbox1 {
            width: 50%;
            height: 100%;

            img {
                width: 100%;
                height: 100%;

            }
        }

        .divbox2 {
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1019607843);
            width: 35%;
            height: 400px;
            background-color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin-left: 6%;

            .divlogo {
                width: 100%;
                height: 50px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                margin-bottom: 10%;

                img {
                    width: 50px;
                    height: 50px;
                    margin-right: 3%;
                }

                h1 {
                    // color: #fff;
                    margin: 0;
                    font-size: 40px;
                }
            }

            .loginbox {
                width: 100%;
                height: 38px;
            }

            .el-input {
                height: 38px;
                width: 260px;
            }
        }
    }
}
</style>