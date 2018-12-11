<template>
	<div class="stationLayout">
		<el-container>
			<el-header>
				<el-row>
					<el-col :span="8">
						<div class="grid-content bg-purple md-header-img-center">
							<img class="md-header-img" src="../../assets/imgs/logo.png" />
						</div>
					</el-col>
					<el-col :span="8">
						<div class="md-station">选择工作台</div>
					</el-col>
					<el-col :span="8" class="md-height">
						<!-- <i class="el-icon-refresh md-flex md-refresh"></i> -->
						<!-- <el-button
                class="md-flex md-refresh"
                icon="el-icon-refresh"
                circle
              ></el-button>
              <el-button
                class="md-flex"
                type="primary"
              >非筛选HOLD打印</el-button> -->
						<el-button type="primary" @click="onClickFHoldPrint">非筛选HOLD打印<i class="el-icon-printer el-icon--right"></i></el-button>
						<el-button type="primary" icon="el-icon-refresh" @click="onClickRefresh">刷新</el-button>
					</el-col>
				</el-row>
			</el-header>
			<el-main>
				<el-card class="box-card">
					<el-row :gutter="10">
						<el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="1" v-for="(station,index) in stations" :key="index" @click.native="onClickSelectStation(station)">
							<div class="grid-content bg-purple" v-text="station.name"></div>
						</el-col>
					</el-row>
				</el-card>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: 'station',
		data() {
			return {
				selectRad: '',
				stations: [{
						id: 1,
						name: '工作台1'
					},
					{
						id: 2,
						name: '工作台2'
					},
					{
						id: 3,
						name: '工作台3'
					},
					{
						id: 4,
						name: '工作台4'
					}
				]
			}
		},
		methods: {
			// 非筛选hold打印
			onClickFHoldPrint() {
				console.log('非筛选hold打印');
			},
			// 刷新
			onClickRefresh() {
				console.log(3232);
			},
			// 选择工作台
			onClickSelectStation(station) {
				this.$router.push({
					path: '../taskList/index',
					name: 'taskList'
				});
				// console.log(this.$router);
			}
		}
	}
</script>

<style scoped lang="scss">
	.stationLayout {
		height: 100%;

		.el-container {
			height: 100%;

			.md-station {
				color: #f8f8f8;
				font-size: 3vh;
				font-weight: 600;
			}
		}

		.md-flex {
			flex: 1;
			text-align: center;
		}

		.grid-content {
			// height: 60px;
			display: flex;
			width: 100%;

			.md-refresh {
				background-color: transparent;
				border-color: transparent;
				font-size: 2vw;
				color: #f8f8f8;
				text-align: right;
			}
		}

		.md-height {
			height: 60px;
			text-align: right;
		}

		.el-header,
		.el-footer {
			color: #333;
			text-align: center;
			line-height: 60px;
			background-color: #6cd993;
			border-bottom: 0.1vh solid #5357ca;
		}

		.el-main {
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #f8f8f8;
			color: #333;
			text-align: center;

			.box-card {
				height: 60%;
				width: 50%;

				.el-col {
					border-radius: 4px;

					.bg-purple-dark {
						background: #99a9bf;
					}

					.bg-purple {
						background: #d3dce6;
						display: flex;
						justify-content: center;
						align-items: center;
					}

					.bg-purple-light {
						background: #e5e9f2;
					}

					.grid-content {
						border-radius: 4px;
						min-height: 36px;
					}
				}
			}
		}

		.md-header-img-center {
			display: flex;
			height: 100%;
			align-items: center;

			.md-header-img {
				height: 60px;
			}
		}
	}
</style>