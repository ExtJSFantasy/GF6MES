<template>
	<div class="task">
		<el-container>
			<el-header>
				<el-row style="display:flex;">
					<el-col :span="8" style="flex:1;" @click.native="onClickGoBack">
						<div class="grid-content bg-purple md-header-img-center" style="text-align:left;">
							<i class="el-icon-back"></i>
						</div>
					</el-col>
					<el-col :span="8" style="flex:1;">
						<div class="md-station">选择工作台</div>
					</el-col>
					<el-col :span="8" class="md-height" style="flex:1;text-align:right;">
						<el-button type="primary" icon="el-icon-refresh">刷新</el-button>
					</el-col>
				</el-row>
			</el-header>
			<el-main>
				<el-row :gutter="12">
					<el-col :span="8">
						<el-card shadow="always" @click.native="onClickTaskItem">
							总是显示
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card shadow="always">
							总是显示
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card shadow="always">
							总是显示
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card shadow="always">
							总是显示
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card shadow="always">
							总是显示
						</el-card>
					</el-col>
				</el-row>
			</el-main>
		</el-container>

	</div>
</template>

<script>
	export default {
		name: 'taskList',
		data() {
			return {

			}
		},
		methods: {
			// 点击返回
			onClickGoBack() {
				this.$router.go(-1);
			},
			// 点击任务单
			onClickTaskItem() {
				this.$router.push({
					path: '../login/index',
					name: 'login'
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.task {

		.el-header,
		.el-footer {
			color: #333;
			text-align: center;
			line-height: 60px;
			background-color: #6cd993;
			border-bottom: 0.1vh solid #5357ca;
		}

		.el-card {
			margin-top: 1vh;
		}
	}
</style>