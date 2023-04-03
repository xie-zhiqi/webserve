<template>
	<div>
		<div class="divbox" ref="yuansu"></div>
		<div class="divbox2" ref="yuansu2"></div>
	</div>
</template>
<script setup  lang="ts">
import * as echarts from 'echarts';
import { ref, onMounted } from "vue"

var datas = {
	id: "echartPie",
	value: [85, 80],
	legend: ["可乐", "雪碧"],
	color: ["#B0C4DE", "#98FB98"],
	tooltipShow: false,    //设置悬浮提示显示              --默认显示true
	hoverAnimation: false, //设置鼠标悬浮点击饼图动画效果  --默认开启动画true
	title: "饼图",
};
var seriesData: any = [];
var ssss = []
datas.value.forEach(function (item, index) {
	seriesData.push({
		value: item,
		name: datas.legend[index],
		color: datas.color[index],
	});
	ssss.push({
		value: item,
		name: datas.legend[0],
	})
});
var option2 = {
	backgroundColor: "#fff",
	title: {
		x: "2%",
		y: "2%",
		textStyle: {
			fontWeight: 400,
			fontSize: 16,
			color: "#687284",
		},
		text: datas.title || "",
	},
	tooltip: {
		trigger: "item",
		show: datas.tooltipShow === false ? false : true,
	},
	legend: {
		orient: "horizontal",
		top: 16,
		icon: "circle",
		selectedMode: false,
		itemWidth: 6,
		itemHeight: 6,
		itemGap: 6,
		borderRadius: 6,
		data: datas.legend,
	},
	series: [
		{
			type: "pie",
			hoverAnimation: datas.hoverAnimation === false ? false : true,
			radius: ["40%", "67%"],
			color: datas.color,
			itemStyle: {
				borderRadius: 60,
			},
			label: {
				normal: {
					position: "inner",
					formatter: function (param: any) {
						// console.log('饼图', param)
						if (!param.percent) return "";
						var f = Math.round(param.percent * 10) / 10;
						var s = f.toString();
						var rs = s.indexOf(".");
						if (rs < 0) {
							rs = s.length;
							s += ".";
						}
						while (s.length <= rs + 1) {
							s += "0";
						}
						return s + "%";
					},
					textStyle: {
						color: "#fff",
						fontSize: 12,
					},
				},
			},
			labelLine: {
				normal: {
					show: false,
				},
			},
			data: seriesData,
		},
		{
			name: '背景',
			type: 'pie',
			radius: ["40%", "67%"],
			label: {
				show: false,
			},
			data: [
				{
					value: 20,
					hoverAnimation: false,
					itemStyle: {
						normal: {
							color: {
								type: 'linear',
								colorStops: [
									{ offset: 0, color: '#B0C4DE' },
								],
							}
						},
					},
				}
			],
			z: 0
		},
	],
};
var DataName = ['2023', '2022', '同比'];
var DataTime = ['2023/03/07', '2023/03/08', '2023/03/09', '2023/03/10', '2023/03/11', '2023/03/12', '2023/03/13', '2023/03/14', '2023/03/15', '2023/03/16', '2023/03/17', '2023/03/18'];
var Data2023 = [32.6, 15.9, 9.0, 45.4, 58.7, 40.7, 45.6, 67.2, 43.7, 18.8, 16.0, 72.3];
var Data2022 = [22.0, 6.9, 17.0, 34.2, 35.6, 10.7, 22.6, 42.2, 62.6, 41.0, 36.4, 33.3];
var DataTonBi = [6.0, 6.2, 12.3, 7.5, 11.3, 5.2, 15.3, 10.4, 3.0, 4.5, 4.0, 6.2];
const option = {
	// backgroundColor: '#ffffff',
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'cross',
			crossStyle: {
				color: '#666'
			}
		}
	},
	legend: {
		data: DataName
	},
	grid: {
		left: '2%',
		right: '2%',
		bottom: '2%',
		containLabel: true
	},
	xAxis: [
		{
			type: 'category',
			data: DataTime,
			axisPointer: {
				type: 'shadow'
			},
			boundaryGap: false,
			// 坐标轴线
			axisLine: {
				show: false,
				lineStyle: {
					color: "rgba(100,100,100,1)" //X轴字体颜色
				}
			},

		}
	],
	yAxis: [
		{

			type: 'value',
			// name: '受理额',
			min: 0,
			max: 250,
			interval: 50,
			axisLabel: {
				formatter: '{value}'
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: "rgba(100,100,100,1)"
				},
			},
			splitLine: {
				// show:false,
				lineStyle: {
					type: 'dashed',
					color: 'rgba(200,200,200,1)' //里面横着的虚线
				}
			}
		},
		{
			show: false,
			type: 'value',
			name: '同比',
			min: 0,
			max: 25,
			interval: 5,
			axisLabel: {
				formatter: '{value}%'
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: "rgba(200,200,200,.51)"
				},
			},
			splitLine: {
				show: false,
				lineStyle: {
					type: 'dashed',
					color: 'rgba(200,200,200,1)'
				}
			}
		}
	],
	series: [
		{
			name: DataName[0],
			type: 'bar',
			data: Data2023,
			barWidth: '25%',
			seriesLayoutBy: 'row',
			itemStyle: {
				barBorderRadius: [30, 30, 0, 0],
				color: {
					x: 0,
					y: 0,
					x2: 1,
					y2: 1,
					colorStops: [
						{ offset: 0, color: 'rgba(0,133,232,1)' },  //第一顶部颜色
						{ offset: 1, color: 'rgba(0,133,232,1)' }  //第一底部颜色
					]
				}
			}
		},
		{
			name: DataName[1],
			type: 'bar',
			data: Data2022,
			barWidth: '25%',
			seriesLayoutBy: 'row',
			itemStyle: {
				barBorderRadius: [30, 30, 0, 0],
				color: {
					x: 0,
					y: 0,
					x2: 1,
					y2: 1,
					colorStops: [
						{ offset: 0, color: 'rgba(220,239,255,1)' },  //第二顶部颜色
						{ offset: 1, color: 'rgba(220,239,255,1)' }  //第二底部颜色
					]
				}
			}
		},
		{
			name: DataName[2],
			type: 'line',
			color: "rgba(145,204,117,1)", //圆颜色
			smooth: true,
			symbol: 'circle',
			symbolSize: 8,  //圆大小
			lineStyle: {
				normal: {
					width: 1,
					color: 'rgba(145,204,117,1)'  //线条样式
				}
			},

			yAxisIndex: 1,
			data: DataTonBi
		}
	]
}

const yuansu = ref<HTMLInputElement | null>(null)
const yuansu2 = ref<HTMLInputElement | null>(null)
onMounted(() => {

	const myecharts = echarts.init(yuansu.value as HTMLDivElement)
	const myecharts2 = echarts.init(yuansu2.value as HTMLDivElement)

	myecharts2.setOption(option2)
	myecharts.setOption(option)

})
</script>
<style lang="scss" scoped>
.divbox {
	width: 100%;
	height: 500px;
	display: flex;
	flex-direction: column;

	// background-color: red;
}
</style>
