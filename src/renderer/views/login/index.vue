<template>
	<div class="login">
		<el-container>
			<el-header>
				<el-row style="display:flex;">
					<el-col :span="8" style="flex:1;" @click.native="onClickGoBack">
						<div class="grid-content bg-purple md-header-img-center" style="text-align:left;">
							<i class="el-icon-back"></i>
						</div>
					</el-col>
					<el-col :span="8" style="flex:1;">
						<div class="md-station">登录</div>
					</el-col>
					<el-col :span="8" class="md-height" style="flex:1;text-align:right;">
						<el-button type="primary" icon="el-icon-refresh">刷新</el-button>
					</el-col>
				</el-row>
			</el-header>
			<el-main>
				<button @click="onClickGoInstruction">Login</button>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {}
		},
		methods: {
			// 点击返回
			onClickGoBack() {
				this.$router.go(-1);
			},
			// 点击登录按钮，进入作业指导书界面
			onClickGoInstruction() {
				this.$router.push({
					path: '../instruction/index',
					name: 'instruction'
				});
				this.$message({
					showClose: true,
					message: '登录成功',
					type: 'success'
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.login {

		.el-header,
		.el-footer {
			color: #333;
			text-align: center;
			line-height: 60px;
			background-color: #6cd993;
			border-bottom: 0.1vh solid #5357ca;
		}
	}
</style>