<script setup lang="ts">
import {ref, watchEffect} from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton, ElCard } from 'element-plus';
import {setToken} from "@/utils/auth";
import {useRouter, useRoute, type LocationQueryValue} from "vue-router";
import {login} from '@/api/login'





defineOptions({
  name: 'Login',
})

const router = useRouter();
const route = useRoute();

// 定义响应式变量 redirect 来存储 query 中的 redirect 参数
let redirect = ref('/');

// 登录表单的数据模型
const form = ref({
  username: '',
  password: ''
});

// 表单验证规则
const rules = ref({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
});

// 表单引用，用于手动验证
const loginForm = ref<InstanceType<typeof ElForm>>();

watchEffect(() => {
  if (route.query.redirect != null) {
    redirect.value = route.query.redirect as string;
  }
});

// 登录处理函数
const handleLogin = async () => {
  try {
    await loginForm.value?.validate();
    login({username: form.value.username, password: form.value.password})
        .then((resp) => {
          setToken(resp.token)
          router.push({path: redirect.value || "/"}).catch(() => {})
        })
    console.log('登录成功', form.value);
  } catch (error) {
    console.log('表单验证失败');
  }
};

// 取消函数
const handleCancel = async () => {
  loginForm.value?.resetFields();
}

</script>

<template>
  <div class="login-container">
    <el-card class="login-form-card">
      <h2 class="title">登录</h2>
      <el-form :model="form" :rules="rules" ref="loginForm" label-width="100px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"/>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password" placeholder="请输入密码"/>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" block @click="handleLogin">登录</el-button>
          <el-button type="primary" block @click="handleCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-form-card {
  position: relative;
  top: -10vh;
  width: 440px;
  padding: 20px;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
}

.el-form-item {
  margin-bottom: 20px;
}

.el-button {
  margin-top: 10px;
}

</style>