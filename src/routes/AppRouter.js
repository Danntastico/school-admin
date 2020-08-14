import React from 'react';
import { Router } from '@reach/router';

import { Home } from '../pages/Home';
import {
  HOME_PATH,
  STUDENT_PATH,
  SUBJECT_PATH,
  TEACHER_PATH,
  DETAIL_STUDENT_PATH,
  DETAIL_SUBJECT_PATH,
  DETAIL_TEACHER_PATH,
} from '../utils/constants';
import { Students } from '../pages/Student';
import { Teachers } from '../pages/Teacher';
import { Subjects } from '../pages/Subjects';

import { GlobalStyle } from '../styles/GlobalStyle';
import { Sidebar } from '../components/Sidebar';
import { TeacherDetails } from '../pages/TeacherDetails';
import { StudentDetails } from '../pages/StudentDetails';
import { SubjectDetails } from '../pages/SubjectDetails';

export const AppRouter = () => {
  return (
    <div>
      <GlobalStyle />
      <Sidebar />
      <div className='container'>
        <Router>
          <Home path={HOME_PATH} default />
          <Students path={STUDENT_PATH} />
          <Teachers path={TEACHER_PATH} />
          <Subjects path={SUBJECT_PATH} />
          <StudentDetails path={DETAIL_STUDENT_PATH} />
          <TeacherDetails path={DETAIL_TEACHER_PATH} />
          <SubjectDetails path={DETAIL_SUBJECT_PATH} />
        </Router>
      </div>
    </div>
  );
};
