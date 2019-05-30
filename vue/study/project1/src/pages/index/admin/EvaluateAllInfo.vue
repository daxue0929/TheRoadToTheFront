<template>
	<div class="evaluate-all-info">
		<div class="evaluate-item">
			<div class="title">评价编号</div>
			<div class="title">被评课程</div>
			<div class="title">评价员工</div>
			<div class="title title-last">评价内容</div>
		</div>
		<div class="evaluate-item" v-for="item in evaluate">
			<div class="item">{{item.evaId}}</div>
			<div class="item">{{item.teacherName}}</div>
			<div class="item">{{item.empName}}</div>
			<div class="item detail">{{item.evaValue}}</div>
		</div>

		<div class="operation">
			<span style="color: #CB080B;">请输入要删除的评价编号</span><input class="delete" v-model="deleteId" type="text" placeholder="例如：1/2/3"><button @click="delateEva">确定</button>
		</div>
	</div>
</template>

<script>
  export default {
    name: "EvaluateAllInfo",
		data() {
      return {
        deleteId: '',
        evaluate: [
					{evaId:'1',teacherName:'物理学发展史',empName:'李三',evaValue:'这一门可生动详生动详细生动详生动详细的剖析了生活中的的剖析了生活生动详生动详细的剖析了生活中的中的细生动详细的剖生动详细的剖析了生活中的析了生活中的的剖析了生生动详细的剖析了生活中的活中的生动详细的剖析了生活中的物理学，生动详细的剖析了生活中的是社会发展的精神资粮'},
          {evaId:'2',teacherName:'生物学发展史',empName:'李三',evaValue:'这一门可生动详生动详细的剖析了生活中生动详生动详细的剖析了生活中的的细生动详细的剖生动详细的剖析了生活中的析了生活中的的剖析了生生动详细的剖析了生活中的活中的生动详细的剖析了生活中的物理学，生动详细的剖析了生活中的是社会发展的精神资粮'},
          {evaId:'3',teacherName:'素质的养成',empName:'李三',evaValue:'这一门可生动详生动详细的剖析了生活中的细生动详细的剖生动详细的剖析了生活中的析了生活中的的剖析了生生动详细的剖析了生活中的活中的生动详细的剖析了生活中的物理学，生动详细的剖析了生活中的是社会发展的精神资粮'},
          {evaId:'4',teacherName:'谈判能力',empName:'李三',evaValue:'这一门可生动详生动详细的剖析了生活中生动详生动详细的剖析了生活中的的细生动详细的剖生动详细的剖析了生活中的析了生活中的的剖析了生生动详细的剖析了生活中的活中的生动详细的剖析了生活中的物理学，生动详细的剖析了生活中的是社会发展的精神资粮'}
        ]
			}
		},
		methods: {
      delateEva() {
        console.log("1",this.deleteId)
				const _this = this
        this.evaluate = this.evaluate.filter(function (item) {
          console.log(item.evaId, _this.deleteId)
					if(item.evaId != _this.deleteId){
					  return item
					}
      })
				alert("删除成功")
			}
		}
  }
</script>
<style scoped>
	.evaluate-item{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		/*margin-bottom: .3rem;*/

	}
	.evaluate-item > .item{
		box-shadow: 0 0 .2rem #CB3130 inset;
		height: 5rem;
		line-height: 5rem;
		padding-left: .5rem;
		padding-right: .5rem;
		width: 10rem;
		text-align: center;

	}
	.evaluate-item > .title{
		height: 5rem;
		line-height: 3rem;
		padding-left: .5rem;
		padding-right: .5rem;
		width: 10rem;
		font-weight: 700;
		font-size: 1.5rem;
	}
	.evaluate-item >.title-last{
		width: 40rem;
	}
	.evaluate-item > .detail{
		width: 40rem;
		background: #FFFFFF;
		line-height: 2rem;
		overflow: scroll;
	}

	.operation{
		height: 10rem;
		background: #E6FFE7;
		text-align: center;
	}
	.operation{

	}
</style>
