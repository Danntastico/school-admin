import {
  GET_ALL_STUDENTS,
  GET_ALL_TEACHERS,
  GET_ALL_COURSES,
  GET_ALL_STUDENTCOURSES,
  GET_STUDENT_BY_ID,
  GET_TEACHER_BY_ID,
  POST_NEW_STUDENTCOURSE,
  POST_NEW_STUDENT,
  POST_NEW_TEACHER,
  POST_NEW_COURSE,
  GET_STUDENTCOURSES_BY_ID,
  CLEAR_ACTIVE_TEACHER,
  CLEAR_ACTIVE_COURSE,
  CLEAR_ACTIVE_STUDENT,
  GET_COURSE_BY_ID,
} from "../../utils/constants";

const initialState = {
  teachers: {
    data: [],
    activeTeacher: null,
  },
  students: {
    data: [],
    activeStudent: null,
  },
  courses: {
    data: [],
    activeCourse: null,
  },
  studentsCourses: {
    data: [],
    activeStudentCourses: [],
  },
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STUDENTS:
      return {
        ...state,
        students: {
          ...state.students,
          data: action.payload
            .map((i) => ({
              id: i.id,
              firstName: i.firstName,
              lastName: i.lastName,
              age: i.age,
              address: i.address,
              courses: i.stuntendsCourse.map((item) => ({
                course: item.course.name,
                calification: item.calification,
              })),
            }))
            .sort((a, b) => a - b),
        },
      };
    case POST_NEW_STUDENT:
      return {
        ...state,
        students: {
          ...state.students,
          data: [action.payload, ...state.students.data],
        },
      };
    case GET_STUDENT_BY_ID:
      return {
        ...state,
        students: {
          ...state.students,
          activeStudent: {
            id: action.payload.id,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            age: action.payload.age,
            address: action.payload.address,
            courses: action.payload.stuntendsCourse.map((item) => ({
              course: item.course.name,
              calification: item.calification,
            })),
          },
        },
      };

    case CLEAR_ACTIVE_STUDENT:
      return {
        ...state,
        students: {
          ...state.students,
          activeStudent: null,
        },
      };
    case GET_ALL_TEACHERS:
      return {
        ...state,
        teachers: {
          ...state.teachers,
          data: action.payload
            .map((i) => ({
              id: i.id,
              firstName: i.firstName,
              lastName: i.lastName,
              age: i.age,
              address: i.address,
              courses: i.course.map((item) => ({
                name: item.name,
              })),
            }))
            .sort((a, b) => a - b),
        },
      };
    case POST_NEW_TEACHER:
      return {
        ...state,
        teachers: {
          ...state.teachers,
          data: [action.payload, ...state.teachers.data],
        },
      };
    case GET_TEACHER_BY_ID:
      return {
        ...state,
        teachers: {
          ...state.teachers,
          activeTeacher: {
            id: action.payload.id,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            age: action.payload.age,
            address: action.payload.address,
          },
        },
      };
    case CLEAR_ACTIVE_TEACHER:
      return {
        ...state,
        teachers: {
          ...state.teachers,
          activeTeacher: null,
        },
      };

    case GET_ALL_COURSES:
      return {
        ...state,
        courses: {
          ...state.courses,
          data: action.payload.map((i) => ({
            id: i.id,
            name: i.name,
            year: i.year,
            teacher_id: i.teacher_id,
            address: i.address,
            studentsCourse: i.stuntendsCourse.map((item) => ({
              id_course: item.id_course,
              calification: item.calification,
              course: item.course.name,
            })),
          })),
        },
      };
    case GET_COURSE_BY_ID:
      return {
        ...state,
        courses: {
          ...state.courses,
          activeCourse: {
            id: action.payload.id,
            name: action.payload.name,
            year: action.payload.year,
            teacherId: action.payload.teacher_id,
          },
        },
      };
    case CLEAR_ACTIVE_COURSE:
      return {
        ...state,
        courses: {
          ...state.courses,
          activeCourse: null,
        },
      };
    case POST_NEW_COURSE:
      return {
        ...state,
        courses: {
          ...state.courses,
          data: [action.payload, ...state.courses.data],
        },
      };
    case GET_ALL_STUDENTCOURSES:
      return {
        ...state,
        studentsCourses: {
          ...state.studentsCourses,
          data: action.payload.map((i) => ({
            id: i.id,
            id_course: i.id_course,
            id_student: i.id_student,
            calification: i.calification,
          })),
        },
      };
    case GET_STUDENTCOURSES_BY_ID:
      return {
        ...state,
        studentsCourses: {
          ...state.studentsCourses,
          activeStudentCourses: state.studentsCourses.data.filter(
            (i) => i.id_student === action.payload
          ),
        },
      };
    case POST_NEW_STUDENTCOURSE: {
      return {
        ...state,
        studentsCourses: {
          ...state.studentsCourses,
          data: [
            ...state.studentsCourses.data,
            {
              id: action.payload.id,
              id_course: action.payload.id_course,
              id_student: action.payload.id_student,
              calification: action.payload.calification,
            },
          ],
        },
        students: {
          ...state.students,
          activeStudent: {
            ...state.students.activeStudent,
            courses: [...state.students.activeStudent.courses, action.payload],
          },
        },
      };
    }
    default:
      return state;
  }
};
