<script setup lang='ts'>
// 接口
// postLoginSaomaApi
import { postLoginApi, } from "@/api/login"
import { reactive, ref, watchEffect } from 'vue'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { uuid } from "@/utils/index"
// pinai模块
import { useUserStore } from "@/stores/users"
import router from "@/router";
import QrcodeVue from 'qrcode.vue'
const { login } = useUserStore()
const ruleFormRef = ref<FormInstance>()
const stateuuid = ref(uuid())
const state = ref(true)
const state2 = ref(false)
const onsatate = () => {
    state.value = !state.value
    state2.value = !state2.value
}
watchEffect(() => {
    if (!state.value) {
        stateuuid.value = uuid()
        console.log(stateuuid.value);
    } else {
        console.log('1')
    }
})

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
</script>
<template>
    <div class="divbox">
        <div class="divbox0">
            <div class="divbox1">
                <img src="../../assets/login1Bg.png" alt="">
            </div>
            <div class="divbox2 animate__slideInDown animate__animated">
                <i v-show="state" class="iconfont icon-erweimajiaobiao jiaobiao" @click="onsatate"></i>
                <div class="divlogo">
                    <i v-show="state2" class="iconfont icon-fanhui fanhui" @click="onsatate"></i>
                    <img src="@/assets/logo.png" alt="">
                    <h1>{{ state ? 'weaver运营平台' : '扫码登录' }}</h1>
                </div>
                <el-form v-show="state2" class="erweima">
                    <div>
                        <qrcode-vue class="erweima1" :value="`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxed58e834201d0894&redirect_uri=http://kg.zhaodashen.cn/mt/admin/qr/login.jsp&response_type=code&scope=snsapi_base&state=${stateuuid
                            }&connect_redirect=1#wechat_redirect`" size:300></qrcode-vue>
                    </div>
                </el-form>
                <el-form v-show="state" ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="50px"
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

            .erweima {
                div {
                    .erweima1 {
                        width: 250px !important;
                        height: 250px !important;
                        margin-left: 10%;
                    }
                }
            }
        }

        .jiaobiao {
            position: relative;
            left: 46%;
            top: -12%;
            font-size: 40px;
            cursor: pointer;
        }

        .divlogo {
            width: 100%;
            height: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin-bottom: 10%;

            .fanhui {
                font-size: 40px;
                position: relative;
                left: 68%;
                top: -59%;
                cursor: pointer;
            }

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
</style>