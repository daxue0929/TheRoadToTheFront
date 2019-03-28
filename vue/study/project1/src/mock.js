const Mock = require('mockjs')
//使用mockjs模拟数据
Mock.mock('http://localhost:8090/bysj/EmpQueryAllServlet', () => {
  const data = Mock.mock({
    test: {
      "array|10": [
        {
          "empId|1": "12",
          // "name|1": "Hello",
          // "age|1": "23"
        }
      ]
    }
  })
  return {
    ...data
  }
})



