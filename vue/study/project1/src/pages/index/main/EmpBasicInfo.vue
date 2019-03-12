<template>
	<div>
		<div id="header">
			员工基本信息管理
			加一条信息
		</div>
		<el-table
			:data="tableData"
			height="510"
			border
			style="width: 100%">
			<el-table-column
				fixed
				prop="date"
				label="日期"
				width="150">
			</el-table-column>
			<el-table-column
				prop="name"
				label="姓名"
				width="120">
			</el-table-column>
			<el-table-column
				prop="province"
				label="省份"
				width="120">
			</el-table-column>
			<el-table-column
				prop="city"
				label="市区"
				width="120">
			</el-table-column>
			<el-table-column
				prop="address"
				label="地址"
				width="300">
			</el-table-column>
			<el-table-column
				prop="zip"
				label="邮编"
				width="120">
			</el-table-column>
			<el-table-column
				fixed="right"
				label="操作"
				width="100">
				<template slot-scope="scope">
					<el-button @click="handleSearch(scope.row)" type="text" size="small">编辑</el-button>
					<el-button type="text" size="small" @click="handleUpdate(score.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
  export default {
    name: "EmpBasicInfo",
    methods: {
      handleSearch(row) {
        console.log(row);
      },
      handleUpdate(row) {
        console.log(row)
			}
    },
    data() {
      return {
        tableData: [
          {date: '2016-05-02', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1518 弄', zip: 200333},
          {date: '2016-05-04', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1517 弄', zip: 200333},
          {date: '2016-05-01', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1519 弄', zip: 200333},
          {date: '2016-05-03', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1516 弄', zip: 200333},
          {date: '2016-05-03', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1516 弄', zip: 200333},
          // {date: '2016-05-03', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1516 弄', zip: 200333},
          // {date: '2016-05-03', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1516 弄', zip: 200333},
          // {date: '2016-05-03', name: '王小虎', province: '上海', city: '普陀区', address: '上海市普陀区金沙江路 1516 弄', zip: 200333}
        ]
      }
    }
  }
</script>

<style scoped>
	#header{
		width: 100%;
		margin: 0px auto;
		height: 40px;
		background: #fff;
		border-bottom: 1px solid #eee;
		box-shadow: #4e4e4e 0px 1px;
	}
</style>
