<template>
    <div class="divbox">
        <img src="@/assets/loginBg.jpg" alt="">
        <Particles class="abc" id="tsparticles" :particlesInit="particlesInit" :options="options" />
        <div class="content">
            <!-- 标题 -->
            <div class="divbox1">
                <div class="title">
                    <h1>WEAVERS</h1>
                </div>
                <div class="button">
                    <router-link to="/login1">
                        <el-button type="primary"> 界面1（含微信扫码） </el-button>
                    </router-link>
                    <router-link to="/login2">
                        <el-button type="success"> 界面2（含微信扫码） </el-button>
                    </router-link>
                    <router-link to="login3">
                        <el-button type="warning">界面3（含行为验证码）</el-button>
                    </router-link>
                    <!-- <router-link to="/login3">
                        <el-button>界面3</el-button>
                    </router-link> -->
                    <router-link to="/login4">
                        <el-button type="danger">界面4（含短信登录）</el-button>
                    </router-link>
                </div>
            </div>
            <!-- 等录 -->
            <div class="divbox2"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { loadFull } from 'tsparticles'
import type { Engine } from 'tsparticles-engine'

const particlesInit = async (engine: Engine) => {
    await loadFull(engine as any)
}

const options = reactive({
    // background: {
    //     color: {
    //         value: '#000' // 粒子颜色
    //     }
    // },
    fpsLimit: 60,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: 'push' // 可用的click模式有: "push", "remove", "repulse", "bubble"。
            },
            onHover: {
                enable: true,
                mode: 'grab' // 可用的hover模式有: "grab", "repulse", "bubble"。
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
            },
            push: {
                quantity: 4
            },
            repulse: {
                distance: 200,
                duration: 0.4
            }
        }
    },
    particles: {
        color: {
            value: '#ffff'
        },
        links: {
            color: 'red', // '#dedede'。线条颜色。
            distance: 150, // 线条长度
            enable: true, // 是否有线条
            opacity: 0.5, // 线条透明度。
            width: 1 // 线条宽度。
        },
        collisions: {
            enable: true
        },
        move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 4, // 粒子运动速度。
            straight: false
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 80 // 粒子数量。
        },
        opacity: {
            value: 0.5 // 粒子透明度。
        },
        shape: {
            type: 'circle' // 可用的粒子外观类型有："circle","edge","triangle", "polygon","star"
        },
        size: {
            random: true,
            value: 5
        }
    },
    detectRetina: true
})
</script>

<style lang="scss" scoped>
.divbox {
    width: 100%;
    height: 100%;

    // background-image: url('@/assets/loginBg.jpg');
    img {
        width: 100%;
        height: 100%;
    }
}

.divbox1 {
    width: 780px;
    height: 230px;
    background-color: rgba(232, 225, 225, 0.4);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;

    .title {
        margin-top: 5%;
        height: 30%;
        display: flex;
        align-items: center;
        justify-content: center;

        h1 {
            color: #fff;
            text-align: center;
            margin: 0 !important;
            font-size: 60px;
        }
    }

    .button {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-top: 5%;

        .el-button {
            height: 48px;
        }
    }
}
</style>