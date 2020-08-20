//Backend URL
export const BACKEND_URL = "https://schooladminapi.azurewebsites.net";

//Router paths
export const HOME_PATH = "/";
export const STUDENT_PATH = "students";
export const TEACHER_PATH = "teachers";
export const COURSE_PATH = "courses";
export const STUDENTCOURSES_PATH = "studentCourses";
export const DETAIL_COURSE_PATH = "/courses/detail/:id";
export const DETAIL_STUDENT_PATH = "/students/detail/:id";
export const DETAIL_TEACHER_PATH = "/teachers/detail/:id";

//Action Types
export const GET_ALL_STUDENTS = "GET_ALL_STUDENTS";
export const GET_STUDENT_BY_ID = "GET_STUDENT_BY_ID";
export const POST_NEW_STUDENT = "POST_NEW_STUDENT";
export const REMOVE_STUDENT = "REMOVE_STUDENT";

export const GET_ALL_TEACHERS = "GET_ALL_TEACHERS";
export const GET_TEACHER_BY_ID = "GET_TEACHER_BY_ID";
export const POST_NEW_TEACHER = "POST_NEW_TEACHER";

export const GET_ALL_COURSES = "GET_ALL_COURSES";
export const GET_COURSE_BY_ID = "GET_COURSE_BY_ID";
export const POST_NEW_COURSE = "POST_NEW_COURSE";

export const GET_ALL_STUDENTCOURSES = "GET_ALL_STUDENT_COURSES";
export const GET_STUDENTCOURSES_BY_ID = "GET_STUDENTCOURSES_BY_ID";
export const POST_NEW_STUDENTCOURSE = "POST_NEW_STUDENTCOURSE";
export const REMOVE_STUDENTCOURSE = "REMOVE_STUDENTCOURSE";
