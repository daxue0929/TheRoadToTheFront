import HelloWorld from "./components/HelloWorld";
import Test from "./pages/test/Test";
import Login from "./pages/login/Login";
import Index from "./pages/index/Index";
import UpdateEmpBasicInfo from "./pages/index/main/UpdateEmpBasicInfo";
import CourseEvaluateInfo from "./pages/index/main/CourseEvaluateInfo";
import CourseInfo from "./pages/index/main/CourseInfo";
import InTrainingInfo from "./pages/index/main/InTrainingInfo";
import TeacherEvaluateInfo from "./pages/index/main/TeacherEvaluateInfo";
import TeacherInfo from "./pages/index/main/TeacherInfo";
import TrainingResults from "./pages/index/main/TrainingResults";
import Regist from "./pages/regist/Regist";
import Admin from "./pages/index/Admin";
import CourseAllInfo from "./pages/index/admin/CourseAllInfo";
import EmpBasicAllInfo from "./pages/index/admin/EmpBasicAllInfo";
import TeacherCourseInfo from "./pages/index/admin/TeacherCourseInfo";
import TeacherAllInfo from "./pages/index/admin/TeacherAllInfo";
import EvaluateTeacherInfo from "./pages/index/admin/EvaluateTeacherInfo";
import EvaluateEmpInfo from "./pages/index/admin/EvaluateEmpInfo";
import EvaluateCourseInfo from "./pages/index/admin/EvaluateCourseInfo";
import EvaluateAllInfo from "./pages/index/admin/EvaluateAllInfo";
import EmpCourseInfo from "./pages/index/admin/EmpCourseInfo";
import AddEmpItem from "./pages/index/admin/AddEmpItem";
import FrontBasicPage from "./pages/index/main/FrontBasicPage";

export const routes = [
  {path: '/test', component: HelloWorld},
  {path: '/test/index', component: Test},
  {path: '/login', component: Login},
  {path: '/regist', component: Regist},
  {
    path: '/index', component: Index,
    children: [
      {path:'FrontBasicPage', component: FrontBasicPage},
      {path: 'UpdateEmpBasicInfo', component: UpdateEmpBasicInfo},
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
      {path:'CourseAllInfo', component: CourseAllInfo},
      {path:'EmpBasicAllInfo', component:EmpBasicAllInfo},
      {path:'EmpCourseInfo', component:EmpCourseInfo},
      {path:'EvaluateAllInfo', component:EvaluateAllInfo},
      {path:'EvaluateCourseInfo', component:EvaluateCourseInfo},
      {path:'EvaluateEmpInfo', component:EvaluateEmpInfo},
      {path:'EvaluateTeacherInfo', component:EvaluateTeacherInfo},
      {path:'TeacherAllInfo',component:TeacherAllInfo},
      {path:'TeacherCourseInfo',component:TeacherCourseInfo},
      {path:'AddEmpItem', component:AddEmpItem}
    ]
  }
]
