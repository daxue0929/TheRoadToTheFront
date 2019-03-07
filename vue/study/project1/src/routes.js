import HelloWorld from "./components/HelloWorld";
import Test from "./pages/test/Test";
import Login from "./pages/login/Login";
import Index from "./pages/index/Index";

export const routes = [
	{ path: '/test', component: HelloWorld },
  { path: '/test/index', component: Test },
  { path: '/login', component: Login },
  { path: '/index', component: Index }
]
