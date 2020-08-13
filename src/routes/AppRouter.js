import React from 'react';
import { Router } from '@reach/router';

import { Home } from '../pages/Home';
import {
  HOME_PATH,
  STUDENT_PATH,
  SUBJECT_PATH,
  TEACHER_PATH,
} from '../utils/constants';
import { Students } from '../pages/Student';
import { Teachers } from '../pages/Teacher';
import { Subjects } from '../pages/Subjects';

import { GlobalStyle } from '../styles/GlobalStyle';
import { Sidebar } from '../components/Sidebar';

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
        </Router>
      </div>
    </div>
  );
};
