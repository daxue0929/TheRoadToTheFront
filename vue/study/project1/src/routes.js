import HelloWorld from "./components/HelloWorld";
import Test from "./pages/test/Test";
import Login from "./pages/login/Login";
import Index from "./pages/index/Index";
import UpdateEmpInfo from "./pages/index/main/UpdateEmpInfo";
import EmpBasicInfo from "./pages/index/main/EmpBasicInfo";
import CompletedCourse from "./pages/index/main/CompletedCourse";
import CourseEvaluateInfo from "./pages/index/main/CourseEvaluateInfo";
import CourseInfo from "./pages/index/main/CourseInfo";
import InTrainingInfo from "./pages/index/main/InTrainingInfo";
import TeacherEvaluateInfo from "./pages/index/main/TeacherEvaluateInfo";
import TeacherInfo from "./pages/index/main/TeacherInfo";
import TrainingResults from "./pages/index/main/TrainingResults";
import Regist from "./pages/regist/Regist";
import EmployeeCenter from "./pages/index/admin/EmployeeCenter";
import Admin from "./pages/index/Admin";

export const routes = [
  {path: '/test', component: HelloWorld},
  {path: '/test/index', component: Test},
  {path: '/login', component: Login},
  {path: '/regist', component: Regist},
  {
    path: '/index', component: Index,
    children: [
      {path: 'update', component: UpdateEmpInfo},
      {path: 'EmpBasicInfo', component: EmpBasicInfo},
      {path: 'CompletedCourse', component: CompletedCourse},
      {path: 'CourseEvaluateInfo', component: CourseEvaluateInfo},
      {path: 'CourseInfo', component: CourseInfo},
      {path: 'InTrainingInfo', component: InTrainingInfo},
      {path: 'TeacherEvaluateInfo', component: TeacherEvaluateInfo},
      {path: 'TeacherInfo', component: TeacherInfo},
      {path: 'TrainingResults', component: TrainingResults}
    ]
  },
  {
    path: '/admin', component: Admin,
    children: [
      {path:'EmployeeCenter', component: EmployeeCenter}
    ]
  }
]
