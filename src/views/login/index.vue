<template>
    <div class="divbox">
        <!-- <img class="beijing" src="@/assets/pexels-tomas-anunziata-412026.jpg" alt=""> -->
        <video src="@/assets/Code_flythough_loop_01_Videvo.mp4" autoplay></video>
        <Particles class="abc" id="tsparticles" :particlesInit="particlesInit" :options="options" />

        <div class="content ">
            <!-- 标题 -->
            <div class="divbox1 ">
                <div class=" title">
                    <h1 class="animate__animated animate__heartBeat">WEAVERS</h1>
                </div>
                <div class="button">


                    <router-link to="/login1">
                        <el-button class="button-3d-1"> 界面1（含微信扫码） </el-button>
                    </router-link>
                    <router-link to="/login2">
                        <el-button class="animated-button-2"> 界面2（含微信扫码） </el-button>
                    </router-link>
                    <router-link to="login3">
                        <el-button class="gradient-button-2">界面3（含行为验证码）</el-button>
                    </router-link>
                    <!-- <router-link to="/login3">
                        <el-button>界面3</el-button>
                    </router-link> -->
                    <router-link to="/login4">
                        <el-button class="animated-button-2">界面4（含短信登录）</el-button>
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
// const isShow = false
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

    overflow: hidden;

    // background-image: url('@/assets/loginBg.jpg');
    .beijing {
        width: 100%;
        height: 100%;
    }
}

.divbox1 {
    width: 780px;
    height: 230px;
    // background-color: rgba(232, 225, 225, 0.4);
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

        .button-3d-1 {
            position: relative;
            background: orangered;
            border: none;
            color: white;
            padding: 15px 24px;
            font-size: 10px;
            outline: none;
            box-shadow: -6px 6px 0 hsl(16, 100%, 30%);
        }

        .button-3d-1::before {
            content: "";
            display: block;
            width: 0;
            height: 0;
            position: absolute;
            top: 0;
            left: -6px;
            border: 6px solid transparent;
            border-right: 6px solid hsl(16, 100%, 30%);
            border-left-width: 0px;
        }

        .button-3d-1::after {
            content: "";
            display: block;
            width: 0;
            height: 0;
            position: absolute;
            bottom: -6px;
            right: 0;
            border: 6px solid transparent;
            border-top: 6px solid hsl(16, 100%, 30%);
            border-bottom-width: 0px;
        }

        .button-3d-1:active {
            background: hsl(16, 100%, 40%);
            top: 3px;
            left: -3px;
            box-shadow: -3px 3px 0 hsl(16, 100%, 30%);
        }

        .button-3d-1:active::before {
            border: 3px solid transparent;
            border-right: 3px solid hsl(16, 100%, 30%);
            border-left-width: 0px;
            left: -3px;
        }

        .button-3d-1:active::after {
            border: 3px solid transparent;
            border-top: 3px solid hsl(16, 100%, 30%);
            border-bottom-width: 0px;
            bottom: -3px;
        }

        .animated-button-2 {
            position: relative;
            padding: 10px 20px;
            font-size: 15px;
            background-color: #00b3b4;
            background-size: 46px 26px;
            border: 1px solid #555;
            color: white;
            transition: all ease 0.3s;
        }

        .animated-button-2::after {
            position: absolute;
            top: 50%;
            right: 0.6em;
            transform: translateY(-50%);
            content: "»";
            font-size: 20px;
            transition: all ease 0.3s;
            opacity: 0;
        }

        .animated-button-2:hover {
            padding: 20px 60px 20px 20px;
        }

        .animated-button-2:hover::after {
            right: 1.2em;
            opacity: 1;
        }

        .gradient-button-2 {
            border: solid 4px transparent;
            border-image: linear-gradient(to right, rgb(40, 164, 115), transparent);
            border-image-slice: 1;
        }

        .gradient-button-2:hover {
            color: white;
            background-image: linear-gradient(to right, rgb(105, 196, 108), transparent);
            border-right: none;
        }

        .gradient-button-1 {
            position: relative;
            z-index: 1;
            display: inline-block;
            padding: 20px 40px;
            font-size: 1.4rem;
            box-sizing: border-box;
            background-color: #e7eef1;
            color: orangered;
            border: solid 10px transparent;
            border-image: linear-gradient(to top right, orangered, yellow);
        }

        .gradient-button-1 {
            border-image-slice: 1;
        }

        .gradient-button-1:hover {
            color: white;
            background-image: linear-gradient(to top right, orangered, yellow);

            /* 或者 */

            border-image-slice: 1 fill;
        }

        .el-button {
            height: 48px;
        }
    }
}
</style>