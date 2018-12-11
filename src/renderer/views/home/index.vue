<template>
  <div class="home">
    <el-container>
      <el-header>
        <el-row style="display:flex;">
          <el-col :span="8" style="flex:1;" @click.native="onClickGoBack">
            <div class="grid-content bg-purple md-header-img-center" style="text-align:left;">

            </div>
          </el-col>
          <el-col :span="8" style="flex:1;">
            <div class="md-station">筛选界面</div>
          </el-col>
          <el-col :span="8" class="md-height" style="flex:1;text-align:right;">
            <el-button type="primary" icon="el-icon-refresh">刷新</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <button @click="onClickGoMain">进入筛选界面</button>
      </el-main>
      <el-footer>
        <el-tabs tab-position="bottom" style="width: 100%;display: flex;justify-content: center;align-items: center;"
          :stretch="isStretch">
          <el-tab-pane label="用户管理" style="flex:1;"></el-tab-pane>
          <el-tab-pane label="配置管理" style="flex:1;"></el-tab-pane>
          <el-tab-pane label="角色管理" style="flex:1;"></el-tab-pane>
          <el-tab-pane label="定时任务补偿" style="flex:1;"></el-tab-pane>
        </el-tabs>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        isStretch: true
      }
    },
    methods: {
      // 点击返回
      onClickGoBack() {
        this.$router.go(-1);
      },
      // 点击登录按钮，进入作业指导书界面
      onClickGoMain() {
        this.$message({
          showClose: true,
          message: '进入筛选界面成功',
          type: 'success'
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .home {
    height: 100%;

    .el-container {
      height: 100%;
    }

    .el-header {
      color: #333;
      text-align: center;
      line-height: 60px;
      background-color: #6cd993;
      border-bottom: 0.1vh solid #5357ca;
    }

    .el-footer {
      border: solid 1px #6cd993;
    }
  }
</style>